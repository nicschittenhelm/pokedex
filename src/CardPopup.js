import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoSparkles, IoSparklesOutline } from "react-icons/io5";



export default function CardPopup( { open, close, pokemonData, typeColors }) {

  const [isShiny, setIsShiny] = useState(false);

  if (!open) return null;

  let colorA = "#FF0000";
  let colorB = "#0000FF";

  if (pokemonData.types.length === 2) {
      colorA = typeColors[pokemonData.types[0].type.name];
      colorB = typeColors[pokemonData.types[1].type.name];
  } else {
      colorA = typeColors[pokemonData.types[0].type.name];
      colorB = "#FFFFFF"
  }

  return ReactDOM.createPortal(
      <>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/[0.6]"/>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 md:h-[800px] md:w-[600px] h-[600px] w-[350px] rounded-md p-2" style={{background:`linear-gradient(150deg, ${colorA} 0%, ${colorB} 100%)`}}>
          <button onClick={(e) => {e.stopPropagation(); close(); setIsShiny(false)}} className="float-right relative z-50"><AiOutlineCloseCircle className="w-12 h-12 drop-shadow-md text-white"/></button>
          <h2 className="text-6xl text-white capitalize font-bold drop-shadow">{pokemonData.name}</h2>

          {pokemonData.types.map(p => (
            <p className="text-white text-2xl drop-shadow capitalize" key={p.type.name}>{p.type.name}</p>
          ))}

          <button onClick={() => {isShiny ? setIsShiny(false) : setIsShiny(true)}} className="absolute z-50 left-8 bottom-8 ">
          {isShiny ?
          <>
            <IoSparklesOutline className="absolute w-12 h-12 drop-shadow-md text-white blur animate-pulse"/>
            <IoSparklesOutline className="absolute w-12 h-12 drop-shadow-md text-white blur-sm animate-pulse"/>
            <IoSparklesOutline className="relative w-12 h-12 drop-shadow-md text-white "/>
          </>
          :
          <IoSparkles className="w-12 h-12 drop-shadow-md text-white"/>
          }
          </button>
          
          {isShiny ? 
          <img src={pokemonData.sprites.front_shiny} alt={pokemonData.name} className="absolute w-full md:bottom-[-150px] md:right-[-175px] bottom-[-50px] right-[-80px] rendering-pixelated"/>
          :
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className="absolute w-full md:bottom-[-150px] md:right-[-175px] bottom-[-50px] right-[-80px] rendering-pixelated"/>
          }

        </div>
      </>,
      document.getElementById('portal')
  )
}

// useState causes infinite loop, needs fix :,(