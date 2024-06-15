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

    return (
        <div className="flex flex-col lg:flex-row pb-20 pt-16 -z-10 ">
            <div className="lg:w-1/2 flex flex-col items-start justify-center">
                <div className="mb-10">
                    <h2 className="text-gray-700 text-xl __className_f8e921">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-lg border border-blue-600">Step 1</span> Pick a color from the wheel or add your own color hexadecimal code
                    </h2>
                </div>
                <div className="flex flex-col items-center justify-center mx-auto rounded-lg box-shadow p-4">
                    <div className="text-gray-700 font-bold text-3xl mb-2">Selected Color: {" "}</div>
                    <div className="text-3xl text-gray-700 font-medium border-2 border-black w-full max-w-xs">
                      <input  type="text" value={hexInput} onChange={handleHexInputChange} className="w-full text-center" >
                      </input>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center p-4">
                <div ref={colorPickerRef} className="rounded-lg box-shadow py-12 px-20"></div>
            </div>
        </div>
    );
};

export default ColorPicker;

