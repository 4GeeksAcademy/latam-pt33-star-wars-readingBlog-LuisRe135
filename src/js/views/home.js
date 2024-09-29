import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card.jsx";

export const Home = () =>{ 
	const {store, actions} = useContext(Context);
	
	return(
		<>
			<div className="text-center container mt-5 d-flex flex-row" style={{height: "550px", overflowX: "scroll"}}>
				{store.people.map((item, index) => {
					
					return <Card key={index} image={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} 
							characterName={item.properties.name} gender={item.properties.gender} hair={item.properties.hair_color} 
							eyeColor={item.properties.eye_color} id={item.uid} />
				})}
			</div>
		</>	
	
		


	)};
