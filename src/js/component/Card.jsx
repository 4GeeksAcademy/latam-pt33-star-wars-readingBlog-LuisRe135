import React from 'react'


const Card = (props) => {
    return (
        <div className="card" style={{minWidth: "400px", height: "450px"}}>
            <img src={props.image} className="card-img-top img-fluid" alt="no cargo la imagen" style={{objectFit: 'contain',minWidth: "400px", height: "300px"}} />
            <div className="card-body">
                <h5 className="card-title">{props.characterName}</h5>
                <p className="card-text">Gender: {props.gender}</p>
                <p className="card-text">Hair Color: {props.hair}</p>
                <p className="card-text">Eye Color: {props.eyeColor}</p>
                <a href="#" className="btn btn-primary">Learn more!</a>
            </div>
        </div>
    )
}


export default Card;
