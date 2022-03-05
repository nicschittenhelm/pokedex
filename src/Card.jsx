import React from "react";

const Card = ({pokemon}) => {
    return (
        <div className="relative bg-blue-500 w-64 h-72 rounded-md drop-shadow-md p-2 m-5">
            <h2 className="text-3xl text-white capitalize font-bold tracking-wide">{pokemon.name}</h2>
            <p>{pokemon.id}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="absolute w-full -bottom-10 -right-10 rendering-pixelated"/>
        </div>
    )
}

export default Card