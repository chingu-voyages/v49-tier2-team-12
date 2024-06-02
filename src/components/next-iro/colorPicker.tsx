"use client"
import iro from "@jaames/iro";
import React , {useContext , useEffect , useRef, useState} from "react";
import {ColorContext} from "@/app/_components/color_context";


const isValid = (hex:string) => {
    const regEx = /^#([0-9A-F]{3}){1,2}$/i;
    return regEx.test(hex);

}
const ColorPicker: React.FC = () => {
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const colorPickerInstanceRef = useRef<iro.ColorPicker | null>(null); // Store the color picker instance
    const state = useContext(ColorContext);
    const [hexInput, setHexInput] = useState(state?.selectedColor || "#f00");


    useEffect(() => {
        if (!colorPickerRef.current) return;

        
        const handleColorChange = (color: { hexString: string }) => {
            state?.handleColorSelection(color.hexString);
            setHexInput(color.hexString);
            console.log(color.hexString);
        };
        if(!colorPickerInstanceRef.current){
            colorPickerInstanceRef.current = iro.ColorPicker(colorPickerRef.current , {
                width: 300 ,
                color: state?.selectedColor || "#f00",
            });
        }

        colorPickerInstanceRef.current.on('color:change', handleColorChange);
        return () => {
            colorPickerInstanceRef.current?.off('color:change', handleColorChange);
        };
    }, [state, state?.handleColorSelection]);

    const handleHexInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newHex = event.target.value;
        setHexInput(newHex);

        if(isValid(newHex) && colorPickerInstanceRef.current){
            colorPickerInstanceRef.current.color.hexString = newHex;
        }
    }

    return( 
        <>
            <div ref={colorPickerRef}></div>
            <div className="mb-5 border-2 border-black">Selected Color: {" "}
             <input  type="text" value={hexInput} onChange={handleHexInputChange} >
             </input>
            </div>
        </>
);
};

export default ColorPicker;

