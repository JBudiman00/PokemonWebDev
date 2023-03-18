import React, { useState, useEffect } from 'react';
import Card from './availablecards.jsx';

export default function Info(){
    const [pokemon, setPokemon] = useState()

    const handleFetch = (response) => {
        console.log(response.status);
        return response.json();
    }

    const handleID = (response) => {
        //const respPoke = response.results.map((item) => <li key={item.name}>{item.name}</li>);
        const respPoke = response.results.map((item) => <Card key={item.name} name={item.name}/>);
        setPokemon(respPoke);
    }

    const handleError = (error) => {
        console.log(error);
        setPokemon(<li>Network Error!</li>)
    }

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
        .then(handleFetch)
        .then(handleID)
        .catch(handleError)
    }, [])

    return (
        <>{pokemon}</>
    )
}