import React, { useState } from 'react';
import { database } from '../database.js';
import { set, update, onValue, remove, ref } from 'firebase/database';
import '../styles/card.css';

export default function teamCard(props){
    const removeData = () => {
        //Ensure current team count isn't larger than 6
        const dataRef = ref(database, '/team/' + props.name);
        remove(dataRef)
        .then(() => {
            console.log("Removed successfully");
        })
        .catch((error) => {
            console.log("Remove failed")
            console.log(error);
        });
    };

    return(
        <div className="card">
            <p className="header">{props.name}</p>
            <button className="selectButton" onClick={removeData}>Remove</button>
        </div>
    );
}