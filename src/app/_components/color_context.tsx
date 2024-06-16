'use client'

import React , {createContext , useContext , useState} from "react";

export type ColorContextType = {
    selectedColor: string | null,
    handleColorSelection: (value: string) => void
}
export const ColorContext = createContext<ColorContextType>({} as ColorContextType);

interface ISelectedColor {
    selectedColor: string | null,
}
export default function ColorContextProvider({
                                                 children
                                             }: {
    children: React.ReactNode
                                             }

){
    const [ selectedColor, SetSelectedColor ] = useState<string| null>("#C0C0C0" );
    const handleColorSelection = (value : string) => {
        SetSelectedColor(value)
    }
  return(
      <ColorContext.Provider value={{selectedColor: selectedColor, handleColorSelection}}>
          { children }
      </ColorContext.Provider>
  )

}

export const useColorContext = () => useContext<ColorContextType>(ColorContext)
