import React from "react";


type ButtonProps = {
    label : string,
    style?: string
}
export function Button({label, style}: ButtonProps) {
    return(
        <button  className={`${style} inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-full transition-colors duration-300 `}>
            { label }
        </button>
    )

}
