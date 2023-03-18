import React, { useState, useEffect } from 'react';
import { database } from '../database.js';
import { onValue, ref, off } from 'firebase/database';
import TeamCard from './teamcards.jsx';

export default function Team(){
    const [display, updateDisplay] = useState([]);

    useEffect(() => {
        const dataRef = ref(database, '/team')
        onValue(dataRef, (snap) => {
            const arr = [];
            
            for(let key in snap.val()){
                arr.push(key);
            }

            updateDisplay(arr);
        });

        return () => {
            const dataRef = ref(database, '/team');
            off(dataRef);
            console.log("Removed listener");
        }
    }, [])

    return (
        <>
        {display.map((item) => <TeamCard name={item}/>)}
        </>
    );
}