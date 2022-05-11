import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import ToggleTheme from "./components/ToggleTheme";


const URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_POKEMON = 898; //898 max
const OFFSET = 24;
let currMaxPokemon = 1;

const App = () => {

    const [pokemon, setPokemon] = useState("");
    const [loading, setLoading] = useState(true);

    let newPokemon = [];

    const loadPokemon = async () => {

        if (currMaxPokemon + OFFSET <= MAX_POKEMON) {
            for (let i = currMaxPokemon; i < currMaxPokemon + OFFSET; i++) {
                await axios.get(`${URL}${i}`).then(({ data }) => {
                    newPokemon.push(data)
                });
            }
        } else if (currMaxPokemon + OFFSET > MAX_POKEMON) {
            for (let i = currMaxPokemon; i <= MAX_POKEMON; i++) {
                await axios.get(`${URL}${i}`).then(({ data }) => {
                    newPokemon.push(data)
                });
            }
        }

        setPokemon((oldPokemon) => [...oldPokemon, ...newPokemon]);
        setLoading(false);
    };

    const handleScroll = (e) => {
        if ((e.target.documentElement.scrollTop + window.innerHeight >= e.target.documentElement.scrollHeight) && (currMaxPokemon + OFFSET <= MAX_POKEMON)) {
            currMaxPokemon += OFFSET;
            loadPokemon()
        }
    }

    useEffect(() => {
        loadPokemon();
        window.addEventListener("scroll", handleScroll);
    }, []);

    return loading ? (
        <div className="w-full h-full min-h-full overflow-hidden bg-white dark:bg-gray-800 transition duration-300">

            <ToggleTheme />
            <div className="flex flex-col flex-1 min-h-screen justify-center items-center">
                <svg
                    className="w-24 md:w-32 fill-gray-800 dark:fill-white animate-spin-slow transition duration-300"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 980 978.94"
                >
                    <path
                        d="M770,1224.85H732c-1.49-1-3.21-.74-4.85-.82-43.27-1.91-85.66-9.09-126.64-23.08-151.15-51.57-254.79-152.44-311.12-301.58-14.9-39.48-23.16-80.65-26.63-122.76-.55-6.76-.06-13.62-1.76-20.28v-43a58.81,58.81,0,0,0,.89-5.86,461,461,0,0,1,17.86-106.37q47-160.89,181.91-260.55C529.06,290.81,604.73,261,687.76,250a479.9,479.9,0,0,1,103.69-2.35c37.6,3.17,74.47,9.93,110.19,22q208.55,70.45,299,271.14c21.87,48.51,34.17,99.72,38.6,152.8.58,6.92.1,13.95,1.8,20.77v42c-.3,2.1-.78,4.2-.88,6.31A464.49,464.49,0,0,1,1222.35,869q-43.32,149.69-164.66,247.69Q941,1210.57,791.31,1223.07C784.21,1223.67,777,1223.05,770,1224.85ZM438.72,766.6h-96c-7.34,0-7.35,0-6.51,7.5a455.59,455.59,0,0,0,7.62,48.7q32.9,148.47,153,241.88c65.33,50.8,139.8,79.07,222.48,85.42,48.25,3.71,96,.07,142.34-13.67,136.22-40.33,229.87-127.25,281-259.63,12.92-33.47,19.88-68.48,23.33-104.17.33-3.46.83-6.17-4.62-6.16q-98,.3-196,0c-3.42,0-4.7,1.17-5.18,4.31-.71,4.59-1.53,9.17-2.63,13.68-27.08,111-135,180.24-247.43,158.68-85.94-16.48-153.58-85.58-168.15-171.85-.58-3.44-1.83-4.87-5.73-4.85C503.71,766.68,471.21,766.6,438.72,766.6Zm165.37-31.32C604.13,815.92,670.26,882,751,882s146.87-66,146.94-146.66S831.91,588.73,751,588.69,604.05,654.66,604.09,735.28Z"
                        transform="translate(-261 -245.91)"
                    />
                </svg>
                <h1 className="text-red-600 text-center mt-4 md:mt-10 text-md md:text-2xl font-bold">
                    Pokédex
                </h1>
                <p className="text-xs md:text-lg text-gray-800 dark:text-white transition duration-300">loading ...</p>
            </div>

        </div>
    ) : (
        <div className="w-full h-full min-h-full pb-48 overflow-hidden bg-white dark:bg-gray-800 transition duration-300">

            <ToggleTheme />
            <h1 className="text-red-600 dark:text-white text-center mt-24 h-32 text-6xl lg:text-8xl font-bold">Pokédex</h1>
            <div className=" flex flex-row min-h-screen justify-center items-center">
                <div className="rounded-md drop-shadow-xl xl:w-[1150px] lg:w-[900px] md:w-[600px] flex flex-wrap justify-center">
                    {pokemon.map((p) => (
                        <Card pokemon={p} key={p.id} />
                    ))}
                </div>


            </div>

        </div>
    );
};

export default App;
