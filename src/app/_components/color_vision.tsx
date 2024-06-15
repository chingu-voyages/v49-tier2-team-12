"use client";
import React, { useContext, useState } from "react";
import ThreeDotLoader from "@/app/_components/three_dot_loader";
import { ColorContext } from "@/app/_components/color_context";

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

export interface SelectedColor {
    name: string;
    code: string;
    description?: string;
}

export default function ColorVisionSimulator() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [simulation, setSimulation] = useState<IColorVisionSimulation | null>(null);
    const state = useContext(ColorContext);

    const simulateColorVision = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/chat-color-vision', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ colorHex: state?.selectedColor })
            });

            if (!response.ok) {
                throw new Error("Failed to fetch color vision simulation");
            }

            const data = await response.json();
            const parsedData: IColorVisionSimulation = JSON.parse(data.data.message.content);
            setSimulation(parsedData);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col justify-between gap-3 mb-5">
            <div className="w-full lg:w-2/5 m-auto border border-slate-800 rounded-lg shadow">
                <button
                    onClick={simulateColorVision}
                    className="w-full hover:text-white hover:bg-gray-700 h-12 text-gray-950 bg-yellow-300 py-2 rounded-sm"
                    disabled={isLoading}
                >
                    {isLoading ? <ThreeDotLoader /> : 'Simulate Color Vision'}
                </button>
                {error && <div className="text-red-600 pl-2">{error}</div>}
            </div>

            {simulation ? (
                <div className="w-full text-black hover:text-slate-400 p-4 border border-slate-800 rounded-lg shadow dark:border-gray-700 dark:hover:bg-gray-700">
                    <h1 className="text-2xl font-bold mb-2">Normal Vision:</h1>
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full mr-3" style={{ backgroundColor: simulation?.normalVision?.code }}></div>
                        <div>
                            <p className="text-sm text-gray-500 mt-1">{simulation?.normalVision?.description}</p>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Vision Deficiencies:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {simulation?.visionDeficiencies?.map((deficiency: IVisionDeficiency, index: number) => (
                            <div key={`${deficiency.code}-${index}`} className="flex flex-col items-center p-3 border border-gray-200 rounded-md bg-gray-50">
                                <div className="text-center">
                                    <p className="text-lg font-medium mb-2">{deficiency.type}</p>
                                </div>
                                <div className="w-full h-16 rounded-md mb-2" style={{ backgroundColor: deficiency.code }}></div>
                                <div className="text-center">
                                    <p className="text-lg font-medium">{deficiency.name}</p>
                                    <p className="text-sm text-gray-600 uppercase">{deficiency.code}</p>
                                    {deficiency.description && <p className="text-sm text-gray-500 mt-1">{deficiency.description}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex-1 min-h-80 p-3 bg-white text-sm text-gray-400 hover:text-slate-400 border border-slate-800 rounded-lg shadow dark:border-gray-700 dark:hover:bg-gray-700">
                    Simulation results will be displayed here.
                </div>
            )}
        </div>
    );
}
