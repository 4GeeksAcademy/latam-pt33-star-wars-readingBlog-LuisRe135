import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import { Context } from "../store/appContext";



const Card = (props) => {
    const {store, actions} = useContext(Context);
    const personInfo = {
        name: props.characterName,
        birthYear: props.birthYear,
        gender: props.gender,
        skin: props.skinColor,
        eyes: props.eyeColor,
        hair: props.hair
    }
    return (
        <div className="card" style={{minWidth: "400px", height: "450px"}}>
            <img src={props.image} className="card-img-top img-fluid" alt="no cargo la imagen" style={{objectFit: 'contain',minWidth: "400px", height: "300px"}} />
            <div className="card-body">
                <h5 className="card-title">{personInfo.name}</h5>
                <p className="card-text">Gender: {personInfo.gender}</p>
                <p className="card-text">Hair Color: {personInfo.hair}</p>
                <p className="card-text">Eye Color: {personInfo.eyes}</p>
                <Link to={"/details/" + props.id} state={personInfo} ><button className="btn btn-primary">Learn more!</button></Link>
            </div>
        </div>
    )
}


export default Card;
