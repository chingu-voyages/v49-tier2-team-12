"use client"
import {useColorRecommendationContext} from "@/app/app/(component)/context/recommendation";
import React from "react";
import {CompatibleColor} from "@/app/_components/prompt_wrapper";
import RecommendationHeader from "@/app/app/(component)/recommendation_header";
import ColorCard from "@/app/app/(component)/color_card";


export default function ColorRecommendationResult() {
    const {recommendation} = useColorRecommendationContext()
    return(
        <div className="w-full">
            {
                recommendation && (
                    <div
                        className="text-black p-6 bg-white shadow rounded-lg "
                    >
                        <RecommendationHeader code={recommendation.selectedColor.code} name={recommendation.selectedColor.name}  colors={recommendation.compatibleColors}/>
                        <p className="text-2xl mb-4 py-6" > <span  className="font-bold">Context: </span>:  {recommendation?.context}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {
                                recommendation?.compatibleColors?.map((color: CompatibleColor) => (
                                    <ColorCard key={color.code} code={color.code} description={color.description!} name={color.name} />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}
