import React from 'react'


const Card = (props) => {
    return (
        <div className="card" style={{width: "400px", height: "500px"}}>
            <img src={props.image} className="card-img-top" alt="no cargo la imagen" />
            <div className="card-body">
                <h5 className="card-title">{props.characterName}</h5>
                <p className="card-text">{props.gender}</p>
                {/* <p className="card-text">{props.hair}</p> */}
                <p className="card-text">{props.eyeColor}</p>
                <a href="#" className="btn btn-primary">Learn more!</a>
            </div>
        </div>
    )
}


export default Card;
