import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useLocation } from 'react-router-dom';

const PlanetDetails = (props) =>{
    
    let { state } = useLocation();
    const { image, name, orbitalPeriod, rotationalPeriod, climate, diameter, description } = state

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
                        <h6>Orbital Period</h6>
                        {orbitalPeriod}
                    </div>
                    <div className="text-center">
                        <h6>Rotation</h6>
                        {rotationalPeriod}
                    </div>
                    <div className="text-center">
                        <h6>Climate</h6>
                        {climate}
                    </div>
                    <div className="text-center">
                        <h6>Diameter</h6>
                        {diameter}
                    </div>
                    

                </div>
            </div>
        </>
    )
}
export default PlanetDetails;