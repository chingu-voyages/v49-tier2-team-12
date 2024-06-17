
"use client"
import {Pen} from "@/app/_components/icons/pen";
import React , {useEffect , useState} from "react";
import {useColorRecommendationContext} from "@/app/app/(component)/context/recommendation";
import {useColorContext} from "@/app/_components/color_context";

export default function Vision() {
    const { selectedColor } = useColorContext()
    const {askVisionDeficiency, isLoading} = useColorRecommendationContext()
    const askColorRecommendationToAi = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await askVisionDeficiency(selectedColor!)
    }
    return(
        <div className="w-full ">
            <form onSubmit={askColorRecommendationToAi} className="w-full flex flex-col gap-6 lg:flex-row  justify-end items-center">
                <button
                    type={"submit"}
                    className="px-6 py-3 disabled:bg-gray-400 rounded-full flex items-center justify-center gap-2 bg-blue-500 text-white self-end md:self-center "
                    disabled={isLoading}
                >
               <span className="w-5  ">
                   <Pen />
               </span>
                    <span>
                   Simulate vision
               </span>
                </button>
            </form>
        </div>
    )
}
