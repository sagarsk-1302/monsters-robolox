import { Component } from "react";
import './card-component.style.css';

const CardComponent = ({monster})=>{
        const {name, email, id} = monster;
        return (
            <div className="card-container" >
                <img className="monster-image" src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <p>{name}</p>
                <p>{email}</p>
            </div>
        )
} 

export default CardComponent;