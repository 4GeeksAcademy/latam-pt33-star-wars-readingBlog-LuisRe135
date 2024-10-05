const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			vehicles: [],
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
			loadAllVehicles: async() => {
				const store = getStore()
				const response = await fetch("https://www.swapi.tech/api/vehicles/", {
					method: "GET"
				})
				
				if (response.ok){
					const data = await response.json();
					let properties = [];
				
					for (let vehicle of data.results){
						const indVehicle = await getActions().loadVehicle(vehicle.uid)
						properties.push(indVehicle)
					}
				
					setStore({vehicles: properties})
					
				}
			},
			loadAllPlanets: async() => {
				const store = getStore()
				const response = await fetch("https://www.swapi.tech/api/planets/", {
					method: "GET"
				})
				
				if (response.ok){
					const data = await response.json();
					let properties = [];
				
					for (let planet of data.results){
						const indPlanet = await getActions().loadPlanet(planet.uid)
						properties.push(indPlanet)
					}
				
					setStore({planets: properties})
					
				}
			},
			loadPerson: async(id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
					method: "GET"
				})
				if (response.ok){
					const data = await response.json()
					
					return data.result
				}
			},
			loadVehicle: async(id) => {
				const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
					method: "GET"
				})
				if (response.ok){
					const data = await response.json()
					
					return data.result
				}
			},
			loadPlanet: async(id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`, {
					method: "GET"
				})
				if (response.ok){
					const data = await response.json()
					
					return data.result
				}
			},
			addFavorites: async(item) => {
				const store = getStore();
				let fav = store.favorites;
				if (!fav.some(favorite => favorite.name === item.name)){
					console.log("dentro del if ")
					fav.push(item);
				}				
				setStore({favorites: fav})				
			},
			deleteFavorites: (item)=> {
				
				const store = getStore();
				let newFav = store.favorites;
				
					const index = newFav.indexOf(item)
					newFav.splice(index, 1);
					setStore({favorites: newFav})
					console.log(store.favorites)
				
				
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
