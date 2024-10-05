import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import { Context } from "../store/appContext";



const VehicleCard = (props) => {
    const {actions} = useContext(Context);
    const vehicleInfo = {
        name: props.name,
        type: "vehicle-",
        costInCredits: props.cost,
        model: props.model,
        passengers: props.passengers,
        shipLength: props.totalLength,
        capacity: props.cargoCapacity,
        image: props.image,
        description: props.description,
        crew: props.crew
       
    }
    return (
        <div className="card m-2" style={{minWidth: "400px", height: "450px"}}>
            <img src={props.image} className="card-img-top img-fluid" alt="no cargo la imagen" style={{objectFit: 'contain',minWidth: "400px", height: "200px"}} />
            <div className="card-body ">
                <h5 className="card-title">{vehicleInfo.name}</h5>
                <p className="card-text">Crew: {vehicleInfo.crew}</p>
                <p className="card-text">Cargo Capacity: {vehicleInfo.capacity}</p>
                <p className="card-text">Cost in Credits: {vehicleInfo.costInCredits}</p>
                <div className="d-flex justify-content-around">
                    <Link to={"/vehicle-details/" + props.id} state={vehicleInfo} ><button className="btn btn-primary">Learn more!</button></Link>
                    <button type="button" className="btn btn-outline-warning" onClick={()=>{actions.addFavorites(vehicleInfo)}}><i className="fa-regular fa-heart"></i></button>

                </div>
            </div>
        </div>
    )
}


export default VehicleCard;
