import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/Card.jsx";

export const Home = () =>{ 
	const {store, actions} = useContext(Context);
	return(
	
	<div className="text-center mt-5 d.flex flex-row">
		{store.people.map((person, index) =>{ 
			return <Card id= {index} characterName = {person.name} gender={person.gender} eyeColor={person.eye_color} image="..." />

		})}

	</div>
)};
