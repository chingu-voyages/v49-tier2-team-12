"use client"
import iro from "@jaames/iro";
import React, { useRef, useEffect, useState } from "react";

interface ColorPickerProps {
    onColorChange: (color:string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({onColorChange}) => {
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const [selectedColor, setSelectedColor] = useState<string>("#000000");
    useEffect(() =>{
        if (!colorPickerRef.current) return;
        const colorPicker = iro.ColorPicker(colorPickerRef.current, {
            width: 300,
            color: "#f00"
        });
        const handleColorChange = (color: {hexString: string}) =>{
            setSelectedColor(color.hexString);
            onColorChange(color.hexString)
            console.log(color.hexString)
        }
       colorPicker.on('color:change', handleColorChange);
    return () => {
        colorPicker.off('color:change',handleColorChange);
    }
}, [onColorChange]);
return( 
         <><div ref={colorPickerRef}></div>
         <div>Selected Color:{selectedColor}</div>
         </>
);
};
export default ColorPicker;
