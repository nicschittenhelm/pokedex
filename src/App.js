import React from "react"
import { useEffect, useState } from "react"
import Card from "./Card"

const URL = "https://pokeapi.co/api/v2/pokemon/"

const App = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const fillPokedex = async () => {
        setLoading(true);
        let pokedex = [];
        for (let i = 1; i <= 151; i++) {
            pokedex.push(await getPokemonData(i));
        }
        setPokemon(pokedex);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const response = await fetch(`${URL}${id}`);
        const data = await response.json();
        return data;
    }
    
    useEffect(() => {
        fillPokedex();
    }, []);

    return (
        loading ? <p>loading ...</p> : (
        <>
        <h1 className="text-red-600 text-center my-10 text-8xl font-bold">Pokédex</h1>
        <div className="flex flex-row min-h-screen justify-center items-center">
            <div className="rounded-md drop-shadow-xl bg-white w-[900px] flex flex-wrap justify-center">
                {pokemon.map(p => (
                <Card pokemon={p} />
                ))}
            </div>
        </div>
        </>
        )
    );
}

export default App;
