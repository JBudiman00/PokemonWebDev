import React, { useState } from 'react';
import { database } from '../database.js';
import { update, onValue, off, ref } from 'firebase/database';
import '../styles/card.css';

export default function Card(props){
    const updateData = () => {
        //Ensure current team count isn't larger than 6
        const teamData = ref(database, '/team')
        let count = 0;
        var onTeam = false;
        onValue(teamData, (snap)=>{
            for(let key in snap.val()){
                count++;
            }
        });
        if(count <= 5 && onTeam == false){
            let data = {
                //Add more pokemon details later
                name: props.name
            }
            const dataRef = ref(database, '/team/' + props.name);
            update(dataRef, data)
            .then(() => {
                console.log("Pokemon successfully added")
            })
            .catch((error) => {
                console.log("Error: Pokemon couldn't be added")
            });
            console.log('success');
        }
        else{
            console.log("Max pokemon team count reached")
        }
    }
    
    return(
        <div className="card">
            <p className="header">{props.name}</p>
            <img src={props.url}></img>
            <p>Abilities</p>
            {props.ability.map((item, index) => {
                return <li key={index}>{item}</li>
            })
            }
            <button className="selectButton" onClick={updateData}>Select</button>
        </div>
    )
}