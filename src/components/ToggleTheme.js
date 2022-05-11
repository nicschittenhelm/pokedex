import React from 'react'
import { BsSun, BsMoon } from "react-icons/bs";
import useDarkmode from "./../hooks/useDarkmode";


export default function ToggleTheme() {
    const [colorTheme, setTheme] = useDarkmode();
    return (
        <div onClick={() => setTheme(colorTheme)} className="fixed right-6 top-10 z-50 bg-white dark:bg-gray-800 transition duration-300 p-2 rounded-full">
            {colorTheme === 'light' ?
                <BsMoon className="text-white w-6 h-6" />
                :
                <BsSun className="text-gray-800 w-6 h-6" />
            }
        </div >
    )
}
