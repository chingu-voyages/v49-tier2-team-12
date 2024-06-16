"use client"
import iro from "@jaames/iro";
import React , {useContext , useEffect , useRef, useState} from "react";
import {ColorContext , useColorContext} from "@/app/_components/color_context";


const isValid = (hex:string) => {
    const regEx = /^#([0-9A-F]{3}){1,2}$/i;
    return regEx.test(hex);

}
const   ColorPicker: React.FC = () => {
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const colorPickerInstanceRef = useRef<iro.ColorPicker | null>(null); // Store the color picker instance
    const {selectedColor, handleColorSelection} = useColorContext()
    const [hexInput, setHexInput] = useState(selectedColor || "#f00");


    useEffect(() => {
        if (!colorPickerRef.current) return;

        
        const handleColorChange = (color: { hexString: string }) => {
            handleColorSelection(color.hexString);
            setHexInput(color.hexString);
        };
        if(!colorPickerInstanceRef.current){
            colorPickerInstanceRef.current = iro.ColorPicker(colorPickerRef.current , {
                width: 300 ,
                color: selectedColor || "#f00",
                layout: [
                    {
                        component: iro.ui.Wheel,
                        options: {

                        }
                    },
                    {
                        component: iro.ui.Slider,
                        options: {}
                    },
                ]
            });
        }

        colorPickerInstanceRef.current.on('color:change', handleColorChange);
        return () => {
            colorPickerInstanceRef.current?.off('color:change', handleColorChange);
        };
    }, [handleColorSelection, selectedColor]);

    const handleHexInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newHex = event.target.value;
        setHexInput(newHex);

        if(isValid(newHex) && colorPickerInstanceRef.current){
            colorPickerInstanceRef.current.color.hexString = newHex;
        }
    }

    return (
        <div className="w-full h-full max-w-sm  bg-white shadow py-2 rounded-lg px-12 ">
            <div className="flex flex-col items-center justify-center p-4">
                <div ref={colorPickerRef} className="rounded-lg py-6"></div>
                <div className="flex items-center justify-center gap-3 ">
                    <span className="text-xl text-gray-800 flex-1">Hex: </span>
                    <div className="text-gray-700 font-medium flex-grow">
                        <input
                            type="text"
                            value={hexInput}
                            onChange={handleHexInputChange}
                            maxLength={7}
                            className="text-center p-2 outline-0 focus:outline-0 bg-gray-50 border border-gray-200 rounded-md" >
                        </input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;

