import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PeopleCard from "../component/PeopleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";

export const Home = () =>{ 
	const {store} = useContext(Context);
	
	return(
		<>
			<div className="text-center container mt-5 d-flex flex-row" style={{height: "550px", overflowX: "scroll"}}>
				{store.people.map((item, index) => {
					
					return <PeopleCard key={index} image={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} 
							name={item.properties.name} gender={item.properties.gender} hair={item.properties.hair_color} 
							eyeColor={item.properties.eye_color} id={item.uid} birthYear= {item.properties.birth_year}
							skinColor={item.properties.skin_color} description={item.description} 
							height={item.properties.height}  />
				})}
			</div>
			<div className="text-center container mt-5 d-flex flex-row" style={{height: "550px", overflowX: "scroll"}}>
				{store.planets.map((item, index) => {
					
					return <PlanetCard key={index} image={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} 
							name={item.properties.name} orbit={item.properties.orbital_period} rotation={item.properties.rotation_period} 
							climate={item.properties.climate} diameter={item.properties.diameter} id={item.uid} 
							population={item.properties.population} description={item.description} terrain={item.properties.terrain}
							 />
				})}
			</div>
			<div className="text-center container mt-5 d-flex flex-row" style={{height: "550px", overflowX: "scroll"}}>
				{store.vehicles.map((item, index) => {
					
					return <VehicleCard key={index} image={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} 
							name={item.properties.name} model={item.properties.model} crew={item.properties.crew} 
							passengers={item.properties.passengers} cargoCapacity={item.properties.cargo_capacity} id={item.uid} 
							totalLength={item.properties.length} description={item.description} cost={item.properties.cost_in_credits}
							 />
				})}
			</div>
		</>	
	
		


	)};
