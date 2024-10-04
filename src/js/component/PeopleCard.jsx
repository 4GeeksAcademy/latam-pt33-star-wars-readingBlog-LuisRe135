import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import { Context } from "../store/appContext";



const PeopleCard = (props) => {
    const {store, actions} = useContext(Context);
    const personInfo = {
        name: props.name,
        birthYear: props.birthYear,
        gender: props.gender,
        skin: props.skinColor,
        eyes: props.eyeColor,
        hair: props.hair,
        image: props.image,
        description: props.description,
        height: props.height
    }
    return (
        <div className="card m-2" style={{minWidth: "400px", height: "450px"}}>
            <img src={props.image} className="card-img-top img-fluid" alt="no cargo la imagen" style={{objectFit: 'contain',minWidth: "400px", height: "200px"}} />
            <div className="card-body ">
                <h5 className="card-title">{personInfo.name}</h5>
                <p className="card-text">Gender: {personInfo.gender}</p>
                <p className="card-text">Hair Color: {personInfo.hair}</p>
                <p className="card-text">Eye Color: {personInfo.eyes}</p>
                <div className="d-flex justify-content-around">
                    <Link to={"/details/" + props.id} state={personInfo} ><button className="btn btn-primary">Learn more!</button></Link>
                    <button type="button" className="btn btn-outline-warning" onClick={()=>{actions.addFavorites(personInfo.name)}}><i className="fa-regular fa-heart"></i></button>
                    <span onClick={()=>{actions.deleteFavorites(personInfo.name)}} ><i className="fa-solid fa-trash"></i></span>
                </div>
            </div>
        </div>
    )
}


export default PeopleCard;
