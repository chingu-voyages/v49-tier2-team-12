import iro from "@jaames/iro";
import React, { useRef, useEffect } from "react";

interface ColorPickerProps {
    onColorChange: (color:string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({onColorChange}) => {
    const colorPickerRef = useRef<HTMLDivElement>(null);
    useEffect(() =>{
        if (!colorPickerRef.current) return;
        const colorPicker = new iro.ColorPicker(colorPickerRef.current, {
            width: 300,
            color: "#f00"
        });
       colorPicker.on('color:change', (color: { hexString: string; }) => {
        onColorChange(color.hexString);
        console.log(color.hexString)
    }
    );
    return () => {
        colorPicker.off('color:change');
    }
}, [onColorChange]);
return <div ref={colorPickerRef}></div>
};
export default ColorPicker;
