import React , {PropsWithChildren} from "react";


type ButtonProps = {
    label : string,
    style?: string
} & PropsWithChildren
export function Button({label, style, children}: ButtonProps) {
    return(
        <button  className={`${style} inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-full transition-colors duration-300 `}>
            { children }
            { label }
        </button>
    )

}
