import React from "react"
import { useEffect, useState } from "react"
import Card from "./Card"

const URL_SEARCH = "https://pokeapi.co/api/v2/pokemon/"
//const URL_LIST = "https://pokeapi.co/api/v2/pokemon?limit=152"

const App = () => {

    const [pokemon, setPokemon] = useState([]);

    const searchPokedex = async (name) => {
        const response = await fetch(`${URL_SEARCH}${name}`)
        const data = await response.json();
        setPokemon(data)
    }

    useEffect(() => {
        searchPokedex("poliwrath")
    }, []);

    return (
        <>
        <h1 className="bg-black text-red-600">Pokedex</h1>
        <div className="flex">
          <Card pokemon={pokemon} />
          <Card pokemon={pokemon} />
          <Card pokemon={pokemon} />
        </div>
        </>
    );
}

export default App;
