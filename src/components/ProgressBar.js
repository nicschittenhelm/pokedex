import React from "react";

export const ProgressBar = ({ name, value }) => {
    return (
        <div className="my-1 md:w-auto w-1/2">
            <h3 className="capitalize text-white md:text-xl text-md font-semibold -mb-2">{name}</h3>
            <div className="flex items-center w-full md:w-auto">

                <div className="h-2 w-2/3 md:w-72 bg-gray-800/[0.4] overflow-hidden">
                    <div className="h-2 bg-white" style={{ width: `${value}%` }}></div>
                </div>
                <p className="text-white ml-2 text-xl font-semibold">{value}</p>

            </div>
        </div>
    );
};

export default ProgressBar;
