import React , {useEffect , useState} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {SelectedColor} from "@/app/_components/prompt_wrapper";


interface ColorPaletteProps {
    colors: SelectedColor[]
}

const ColorPalette = ({ colors }: ColorPaletteProps) => {
    const [copy, setCopy] = useState<boolean>(false)
    const colorsJson = colors.map(color => ({
        code: color.code,
        name: color.name
        })
    )
    useEffect(() => {
        setCopy(false)
    } , [colors]);
    return (
        <div className="flex flex-wrap gap-4 p-4 bg-white shadow rounded-lg" >
            {colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center  justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110 ">
                    <div
                        className="w-12 h-12 rounded-lg shadow"
                        style={{ backgroundColor: color.code }}
                    ></div>
                </div>
            ))}
            <div className="flex items-center justify-center">
                <CopyToClipboard
                    text={JSON.stringify(colorsJson)}
                    onCopy={() => {
                        setCopy(true)
                    }}

                >
                    {
                        copy ? (
                            <span className="text-green-500 text-sm flex  justify-center items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                                    <path d="m9 14 2 2 4-4"/>
                                </svg>
                                <p>copied!</p>
                            </span>
                        ): (
                            <button className="p-3 text-blue-300 hover:text-blue-700 bg-gray-200 hover:bg-opacity-50 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy">
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                                </svg>
                            </button>
                        )
                    }
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default ColorPalette;

