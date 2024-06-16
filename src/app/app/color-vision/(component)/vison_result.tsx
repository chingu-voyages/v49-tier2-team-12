"use client"
import React from "react";
import {IVisionDeficiency} from "@/app/_components/color_vision";
import {useColorRecommendationContext} from "@/app/app/(component)/context/recommendation";

export default function VisionResult() {
    const {visions: simulation} = useColorRecommendationContext()
    return(
        <React.Fragment>
            {
                simulation? (
                    <div className="w-full text-gray-700 p-6 rounded-lg ">
                        <h1 className="text-xl font-medium py-6 ">Normal Vision</h1>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full mr-3" style={{ backgroundColor: simulation.normalVision?.code }}></div>
                            <div>
                                <p className=" text-gray-500 mt-1">{simulation.normalVision?.description}</p>
                            </div>
                        </div>
                        <h2 className="text-xl font-medium mb-2 py-6 ">Vision Deficiencies:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {simulation.visionDeficiencies?.map((deficiency: IVisionDeficiency, index: number) => (
                                <div key={`${deficiency.code}-${index}`} className="flex flex-col items-center p-3 border border-gray-200 rounded-md ">
                                    <div className="text-center">
                                        <p className="text-lg font-bold mb-2 ">{deficiency.type}</p>
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
                ): (
                    <div className="w-full min-h-80 flex justify-center items-center p-3 bg-white text-sm text-gray-400 hover:text-slate-400 rounded-lg ">
                        Simulation results will be displayed here.
                    </div>
                )
            }

        </React.Fragment>

    )
}
