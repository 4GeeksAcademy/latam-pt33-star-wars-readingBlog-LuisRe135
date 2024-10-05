import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useLocation } from 'react-router-dom';

const VehicleDetails = (props) =>{
    
    let { state } = useLocation();
    const {   name, costInCredits, model, passengers, shipLength, capacity, image, description, crew } = state

    return (
        <>
            <div className="container" style={{maxWidth: "70%"}}>
                
                <div className="d-flex justify-content-between">
                    <img src={image} style={{height: '400px', width: '600px', objectFit: 'contain'}} />
                    <div className="text-center d-flex flex-column justify-content-start">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <hr className = "text_danger" />
                <div className="container text-danger d-flex justify-content-between mb-4">
                    <div className="text-center">
                        <h6>Name</h6>
                        {name}
                    </div>
                    <div className="text-center">
                        <h6>Passengers</h6>
                        {passengers}
                    </div>
                    <div className="text-center">
                        <h6>Model</h6>
                        {model}
                    </div>
                    <div className="text-center">
                        <h6>Crew</h6>
                        {crew}
                    </div>
                    <div className="text-center">
                        <h6>Cost(Cr)</h6>
                        {costInCredits}
                    </div>
                    <div className="text-center">
                        <h6>Cargo(Cr)</h6>
                        {capacity}
                    </div>
                    

                </div>
            </div>
        </>
    )
}
export default VehicleDetails;