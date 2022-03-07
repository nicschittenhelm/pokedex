import React from "react";
import { useEffect, useState } from "react"

var typeColors = {
    'normal' : '#A8A77A',
    'fire' : '#EE8130',
    'water' : '#6390F0',
    'electric' : '#F7D02C',
    'grass' : '#7AC74C',
    'ice' : '#96D9D6',
    'fighting' : '#C22E28',
    'poison' : '#A33EA1',
    'ground' : '#E2BF65',
    'flying' : '#A98FF3',
    'psychic' : '#F95587',
    'bug' : '#A6B91A',
    'rock' : '#B6A136',
    'ghost' : '#735797',
    'dragon' : '#6F35FC',
    'dark' : '#705746',
    'steel' : '#B7B7CE',
    'fairy' : '#D685AD',
};


const Card = ({pokemon}) => {


    let colorA = "#FF0000";
    let colorB = "#0000FF";

    //console.log(typeColors[pokemon.types[0].type.name]);

    if (pokemon.types.length == 2) {
        colorA = typeColors[pokemon.types[0].type.name];
        colorB = typeColors[pokemon.types[1].type.name];
    } else {
        colorA = "rgba(0,0,0,0)"
        colorB = typeColors[pokemon.types[0].type.name];
    }
    
    //console.log(pokemon.types[1].type.name)
    console.log(" ")

    return (
        <div className="bg-black h-80 w-60 rounded-md drop-shadow-xl p-2 m-5" style={{background:`linear-gradient(150deg, ${colorA} 0%, ${colorB} 100%)`}}>
            <h2 className="text-3xl text-white capitalize font-bold drop-shadow">{pokemon.name}</h2>
            
                {pokemon.types.map(p => (
                    <p className="text-white drop-shadow capitalize" key={p.type.name}>{p.type.name}</p>
                ))}


            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="absolute w-full -bottom-10 -right-10 rendering-pixelated"/>
        </div>
    )
}

export default Card

