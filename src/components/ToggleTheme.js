import React from 'react'
import { BsSun, BsMoon } from "react-icons/bs";
import useDarkmode from "./../hooks/useDarkmode";


export default function ToggleTheme() {
    const [colorTheme, setTheme] = useDarkmode();
    return (
        <div onClick={() => setTheme(colorTheme)} className="fixed right-6 top-10">
            {colorTheme === 'light' ?
                <BsMoon className="text-white w-6 h-6" />
                :
                <BsSun className="text-gray-800 w-6 h-6" />
            }
        </div >
    )
}
