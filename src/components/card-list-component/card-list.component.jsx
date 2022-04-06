import { Component } from "react";
import './card-list.style.css';
import CardComponent from "../card-component/card-component";


const CardList = (props)=>{
    
        const {monsters} = props;
        return (
            <div className="card-list" key={`asasasas`}>
                
                {monsters.map(user => 
                {
                    return (
                        <CardComponent monster={user} key={user.id}/>
                    )
                })}
            </div>
        )
}

export default CardList;