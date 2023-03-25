import React, { useState, useEffect } from 'react';
import Card from './availablecards.jsx';
import '../styles/style.css';

export default function Info(){
    const [pokemon, setPokemon] = useState();
    const [index, getPokemon] = useState(0);

    const loadPage = () => {
        getAPIData()
        .then(
            response => {
                response.forEach((item) => {
                    fetch(item)
                    .then(handleFetch)
                    .then(handleResponse)
                    .catch((err) => {
                        console.log(err.message);
                    });
                })
            }
        );
    }

    const getAPIData = async () => {
        getPokemon(index+15);
        const url = "https://pokeapi.co/api/v2/pokemon?limit=15&offset=" + index;
        const response = await fetch(url);
        const responseJSON = await response.json();


        const pokemonData = [];
        responseJSON.results.forEach((item) => {
            pokemonData.push(item.url);
        });

        return pokemonData;
    };

    const handleFetch = (response) => {
        return response.json();
    }

    const handleResponse = (response) => {
        const name = response.forms.map((item) => {return item.name});
        const image = response.sprites.back_default;
        const ability = response.abilities.map((item) => {return item.ability.name});
        const cardInfo = <Card name={name} url={image} ability={ability}/>
        setPokemon(pokemon => [...pokemon, cardInfo]);
    }

    useEffect(() => {
        setPokemon([]);

        getAPIData()
        .then(
            response => {
                response.forEach((item) => {
                    fetch(item)
                    .then(handleFetch)
                    .then(handleResponse)
                    .catch((err) => {
                        console.log(err.message);
                    });
                })
            }
        );
    }, [])

    return (
        <>
            <div className="availableCards">
                {pokemon}    
            </div>   
            <div className="buttonParent">
                <button className="load" onClick={loadPage}>Load more Pokemon</button> 
            </div>
        </>
    );
}