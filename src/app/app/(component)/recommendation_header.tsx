import React from "react";
import {SelectedColor} from "@/app/app/(component)/context/recommendation";
import Color_pallette from "@/app/app/(component)/color_pallette";



type RecommendationHeader = {
    code: string,
    name: string,
    colors: SelectedColor[]
}
export default function RecommendationHeader({ code, name, colors}: RecommendationHeader) {
    return(
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-3" style={{ backgroundColor: code }}></div>
                <div>
                    <p className="text-xl">{name}</p>
                    <p className="text-sm text-gray-600 uppercase">{code}</p>
                </div>
            </div>
            <Color_pallette colors={colors} />
        </div>
    )
}
