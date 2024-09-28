import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card.jsx";

export const Home = () =>{ 
	const {store, actions} = useContext(Context);
	// console.log(store.peoplesProperties)
	return(
		
		<div className="text-center container mt-5 d-flex flex-row" style={{height: "550px", overflowX: "scroll"}}>
			{store.people.map((item, index) => {
				console.log(item)
				return <Card key={index} characterName={item.properties.name} gender={item.properties.gender} />
			})}
		</div>
			
	
		


	)};
