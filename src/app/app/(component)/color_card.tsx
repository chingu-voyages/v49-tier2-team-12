import React from "react";


type ColorCardProps = {
    code: string,
    description: string,
    name: string
}

export default function ColorCard({code, description, name}: ColorCardProps) {
    return(
        <div key={code} className="flex flex-col items-center p-3 border border-gray-200 rounded-md bg-gray-50 ">
            <div className="w-full h-16 rounded-md mb-2 shadow" style={{ backgroundColor: code }}></div>
            <div className="text-center">
                <p className="text-lg font-medium">{name}</p>
                <p className="text-sm text-gray-600">{code}</p>
                <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
        </div>
    )
}
