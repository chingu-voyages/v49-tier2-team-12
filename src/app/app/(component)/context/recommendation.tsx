"use client"
import React, { createContext, useContext, useState } from 'react';
import {useColorContext} from "@/app/_components/color_context";

export interface IRecommendation {
    selectedColor: SelectedColor;
    context: string;
    compatibleColors: CompatibleColor[];
}

export interface SelectedColor {
    name: string;
    code: string;
    description?: string
}

export interface CompatibleColor {
    name: string;
    code: string;
    description?: string;
}
interface IColorContext {
    context: string;
    isLoading: boolean;
    error: string | null;
    recommendation: IRecommendation | null;
    visions: IColorVisionSimulation | null
    askColorRecommendation: (color: string) => Promise<void>
    askVisionDeficiency: (color: string) => Promise<void>
    setContext: React.Dispatch<React.SetStateAction<string>>;
}

export interface IVisionDeficiency {
    type: string;
    name: string;
    code: string;
    description?: string;
}

export interface IColorVisionSimulation {
    normalVision: SelectedColor;
    visionDeficiencies: IVisionDeficiency[];
}
const initialContext = {
    context: '',
    isLoading: false,
    error: null,
    recommendation: null,
    visions: null

};

export const RecommendationContext = createContext<IColorContext>({} as IColorContext);

export const ColorRecommendationProvider= ({ children }: { children: React.ReactNode}) => {
    const [context, setContext] = useState<string>(initialContext.context);
    const [isLoading, setIsLoading] = useState<boolean>(initialContext.isLoading);
    const [error, setError] = useState<string | null>(initialContext.error);
    const [recommendation, setRecommendation] = useState<IRecommendation | null>(initialContext.recommendation);
    const [vision, setVision] = useState<IColorVisionSimulation | null>(initialContext.visions);
    const {selectedColor} = useColorContext();
    const askColorRecommendationToAi = async (color: string) => {
        setIsLoading(true);
        setError(null);
        console.log(color)
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: `Identify the language in which the prompt is written and answer in that language. If you cannot identify, then write your answer in English. Suggest color recommendations and compatible colors based on the context: ${context}, and the selected color : ${color}`} )
            });

            if (!response.ok) {
                throw new Error("Failed to fetch color recommendation");
            }

            const data = await response.json();
            const parsedData: IRecommendation = JSON.parse(data.data.message.content);
            setRecommendation(parsedData);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }
    const askiVisionDeficiency = async (color: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/chat-color-vision', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ colorHex: color})
            });

            if (!response.ok) {
                throw new Error("Failed to fetch color vision simulation");
            }

            const data = await response.json();
            const parsedData: IColorVisionSimulation = JSON.parse(data.data.message.content);
            setVision(parsedData);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <RecommendationContext.Provider
            value={{
                context,
                isLoading,
                error,
                recommendation,
                visions: vision,
                askColorRecommendation: askColorRecommendationToAi,
                askVisionDeficiency: askiVisionDeficiency,
                setContext
            }}
        >
            {children}
        </RecommendationContext.Provider>
    );
};

export const useColorRecommendationContext = () => useContext(RecommendationContext);
