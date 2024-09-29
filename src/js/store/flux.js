const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peoplesProperties: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {


			loadData: async() => {
				const store = getStore()
				const response = await fetch("https://www.swapi.tech/api/people/", {
					method: "GET"
				})
				
				if (response.ok){
					const data = await response.json();
					let properties = [];
				
					for (let person of data.results){
						const character = await getActions().loadPerson(person.uid)
						properties.push(character)
					}
				
					setStore({people: properties})
					
				}
			},
			loadPerson: async(id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
					method: "GET"
				})
				if (response.ok){
					const data = await response.json()
					console.log(data.result)
					return data.result
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
