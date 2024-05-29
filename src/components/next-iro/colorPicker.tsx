"use client"
import iro from "@jaames/iro";
import React , {useRef , useEffect , useContext} from "react";
import {ColorContext} from "@/app/_components/color_context";



const ColorPicker = () => {
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const state = useContext(ColorContext);
    useEffect(() =>{
        if (!colorPickerRef.current) return;
        const colorPicker = iro.ColorPicker(colorPickerRef.current, {
            width: 300,
            color: "#f00"
        });
       colorPicker.on('color:change', (color: { hexString: string; }) => {
        state?.handleColorSelection(color.hexString);
        console.log(color.hexString)
    }
    );
    return () => {
        colorPicker.off('color:change',(color: { hexString: string; }) => {
                state?.handleColorSelection(color.hexString);
                console.log(color.hexString)
            }
        );
    }
}, [state,state?.handleColorSelection]);
return <div ref={colorPickerRef}></div>
};
export default ColorPicker;
