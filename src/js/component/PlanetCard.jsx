import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import { Context } from "../store/appContext";



const PlanetCard = (props) => {
    const {actions} = useContext(Context);
    const planetInfo = {
        name: props.name,
        type: "planet-",
        orbitalPeriod: props.orbit,
        rotationalPeriod: props.rotation,
        climate: props.climate,
        diameter: props.diameter,
        terrain: props.terrain,
        image: props.image,
        description: props.description,
        population: props.population
       
    }
    return (
        <div className="card m-2" style={{minWidth: "400px", height: "450px"}}>
            <img src={props.image} className="card-img-top img-fluid" alt="no cargo la imagen" style={{objectFit: 'contain',minWidth: "400px", height: "200px"}} />
            <div className="card-body ">
                <h5 className="card-title">{planetInfo.name}</h5>
                <p className="card-text">Population: {planetInfo.population}</p>
                <p className="card-text">Terrain: {planetInfo.terrain}</p>
                <div className="d-flex justify-content-around">
                    <Link to={"/planet-details/" + props.id} state={planetInfo} ><button className="btn btn-primary">Learn more!</button></Link>
                    <button type="button" className="btn btn-outline-warning" onClick={()=>{actions.addFavorites(planetInfo)}}><i className="fa-regular fa-heart"></i></button>

                </div>
            </div>
        </div>
    )
}


export default PlanetCard;
