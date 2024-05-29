"use client"
import iro from "@jaames/iro";
import React , {useContext , useEffect , useRef} from "react";
import {ColorContext} from "@/app/_components/color_context";


const ColorPicker: React.FC = () => {
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const colorPickerInstanceRef = useRef<iro.ColorPicker | null>(null); // Store the color picker instance
    const state = useContext(ColorContext);

    useEffect(() => {
        if (!colorPickerRef.current) return;
        let colorPickerInstance: iro.ColorPicker
        const handleColorChange = (color: { hexString: string }) => {
            state?.handleColorSelection(color.hexString);
            console.log(color.hexString);
        };
        if(!colorPickerInstanceRef.current){
            colorPickerInstanceRef.current = iro.ColorPicker(colorPickerRef.current , {
                width: 300 ,
                color: "#f00"
            });
        }

        colorPickerInstanceRef.current.on('color:change', handleColorChange);
        return () => {
            colorPickerInstanceRef.current?.off('color:change', handleColorChange);
        };
    }, [state, state?.handleColorSelection]);

    return <div ref={colorPickerRef}></div>;
};

export default ColorPicker;

