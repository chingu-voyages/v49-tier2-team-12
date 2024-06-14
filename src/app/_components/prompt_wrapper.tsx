"use client"
import React , {useContext , useState} from "react";
import ThreeDotLoader from "@/app/_components/three_dot_loader";
import {ColorContext} from "@/app/_components/color_context";

export interface IRecommendation {
    selectedColor: SelectedColor;
    context: string;
    compatibleColors: CompatibleColor[];
}

export interface SelectedColor {
    name: string;
    code: string;
}

export interface CompatibleColor {
    name: string;
    code: string;
    description?: string;
}

export default function PromptWrapper() {
    const [context, setContext] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [recommendation, setRecommendation] = useState<IRecommendation | null>(null);
    const state = useContext(ColorContext);


    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContext(event.target.value);
        setError(null);
    }

    const askColorRecommendationToAi = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: `Identify the language in which the prompt is written and answer in that language. If you cannot identify, then write your answer in English. Suggest color recommendations and compatible colors based on the context: ${context}, and the selected color : ${state?.selectedColor}`} )
            });

            if (!response.ok) {
                throw new Error("Failed to fetch color recommendation");
            }

            const data = await response.json();
            const parsedData: IRecommendation = JSON.parse(data.data.message.content);
            setRecommendation(parsedData);
            localStorage.setItem("history",JSON.stringify({context:context , selectedColor: state?.selectedColor}))
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between gap-3 mb-5">
            <div className="w-full lg:w-2/5 min-h-80 border border-slate-800 rounded-lg shadow ">
                <form onSubmit={askColorRecommendationToAi} className=" w-full flex  flex-col gap-3 mb-4">
                <textarea
                    name="context"
                    value={context}
                    // className="w-full text-gray-950 outline-none focus:outline-none rounded-sm p-2 resize-vertical border border-gray-300"
                    className="block min-h-56 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Type your message here"
                    onChange={handleTextareaChange}
                />
                    <button type="submit"
                            className="w-full hover:text-white hover:bg-gray-700 h-12 text-gray-950 bg-yellow-300 py-2 rounded-sm">
                        {isLoading ? <ThreeDotLoader /> : 'Ask Ai'}
                    </button>
                    {error && <div className="text-red-600 pl-2">{error}</div>}
                </form>
            </div>

            {
                recommendation ?
                    <div
                        // className="w-1/2 text-black p-4 border border-gray-300 rounded-sm  shadow-sm"
                        className="lg:w-3/5 text-black hover:text-slate-400 p-4 border border-slate-800 rounded-lg shadow border-gray-700 hover:bg-gray-700"
                    >
                        <h1 className="text-2xl font-bold mb-2">Selected Color:</h1>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full mr-3" style={{ backgroundColor: recommendation?.selectedColor?.code }}></div>
                            <div>
                                <p className="text-xl">{recommendation?.selectedColor?.name}</p>
                                <p className="text-sm text-gray-600">{recommendation?.selectedColor?.code}</p>
                            </div>
                        </div>
                        <p className="text-lg mb-4"><strong>Context:</strong> {recommendation?.context}</p>
                        <h2 className="text-xl font-semibold mb-2">Color Recommendations:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {
                                recommendation?.compatibleColors?.map((color: CompatibleColor) => (
                                    <div key={color.code} className="flex flex-col items-center p-3 border border-gray-200 rounded-md bg-gray-50">
                                        <div className="w-full h-16 rounded-md mb-2" style={{ backgroundColor: color.code }}></div>
                                        <div className="text-center">
                                            <p className="text-lg font-medium">{color.name}</p>
                                            <p className="text-sm text-gray-600">{color.code}</p>
                                            {color.description && <p className="text-sm text-gray-500 mt-1">{color.description}</p>}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> :
                    <div
                        className="flex-1 min-h-80 p-3 bg-white text-sm text-gray-400 hover:text-slate-400 border border-slate-800 rounded-lg shadow border-gray-700 hover:bg-gray-700">
                        Ai response goes here
                    </div>
            }
        </div>
    )
}
