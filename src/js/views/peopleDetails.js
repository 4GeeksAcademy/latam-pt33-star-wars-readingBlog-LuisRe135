import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useLocation } from 'react-router-dom';

const PeopleDetails = (props) =>{
    const {store, actions} = useContext(Context);
    let { state } = useLocation();
    const { image, name, birthYear, gender, hair, skin, eyes, height, description } = state
 
    return (
        <>
            <div>
                
                <div className="d-flex">
                    <img src={image} />
                    <div>
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <hr className = "text_danger" />
                <div className="container text-danger d-flex justify-content-between">
                    <div className="text-center">
                        <h6>Name</h6>
                        {name}
                    </div>
                    <div className="text-center">
                        <h6>Birth Year</h6>
                        {birthYear}
                    </div>
                    <div className="text-center">
                        <h6>Gender</h6>
                        {gender}
                    </div>
                    <div className="text-center">
                        <h6>Height</h6>
                        {height}
                    </div>
                    <div className="text-center">
                        <h6>Skin Color</h6>
                        {skin}
                    </div>
                    <div className="text-center">
                        <h6>Eye Color</h6>
                        {eyes}
                    </div>

                </div>
            </div>
        </>
    )
}
export default PeopleDetails;