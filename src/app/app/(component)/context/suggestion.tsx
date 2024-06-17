'use client'

import React , {createContext , useContext , useState} from "react";


export type SuggestionContextType = {
    suggestion: string | null,
    handleSelectSuggestion: (value: string) => void,
    show: boolean,
    toggleShow: () => void
}
export const SuggestionContext = createContext<SuggestionContextType>({} as SuggestionContextType);


export const useSuggestionContext = () => useContext(SuggestionContext);

export function SuggestionContextProvider({
                                                 children
                                             }: {
                                                 children: React.ReactNode
                                             }

){
    const [ suggestion, SetSuggestion ] = useState<string| null>(null);
    const [show, setShow] = useState<boolean>(true)
    const handleSelectSuggestion = (value : string) => {
        SetSuggestion(value)
    }
    const toggleShow = () => {
        setShow(!show)
    }
    return(
        <SuggestionContext.Provider value={{suggestion: suggestion, handleSelectSuggestion, toggleShow, show: show}}>
            { children }
        </SuggestionContext.Provider>
    )

}

