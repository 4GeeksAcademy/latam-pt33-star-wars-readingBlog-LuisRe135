import React, {useContext} from "react";
import { Context } from "../store/appContext";

const PeopleDetails = (props) =>{
    const {store, actions} = useContext(Context);
    return (
        <>
            <div>
                <div className="d-flex">
                    <img src={props.image} />
                    <div>
                        <h1>{props.name}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
                <hr className = "text_danger" />
                <div className="container text-danger d-flex justify-content-between">
                    <div>
                        Name
                        {props.name}
                    </div>
                    <div>
                        Birth Year
                        {props.birthYear}
                    </div>
                    <div>
                        Gender
                        {props.gender}
                    </div>
                    <div>
                        Height
                        {props.height}
                    </div>
                    <div>
                        Skin Color
                        {props.skinColor}
                    </div>
                    <div>
                        Eye Color
                        {props.eyeColor}
                    </div>

                </div>
            </div>
        </>
    )
}
export default PeopleDetails;