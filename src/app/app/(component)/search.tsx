"use client"
import React from "react";
import Suggestion from "@/app/app/(component)/suggestion";
import ColorChoose from "@/app/app/(component)/colorpicker_modal";
import Prompt from "@/app/app/(component)/prompt";
import {SuggestionContextProvider} from "@/app/app/(component)/context/suggestion";
import SearchingIndicator from "@/app/app/(component)/searching_indicator";



export default function Search() {
    return(
        <SuggestionContextProvider>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full self-start px-3 lg:px-12 py-6 bg-white shadow rounded-lg">
                    <div className="w-full flex  items-center justify-center  rounded-lg gap-3 mb-6 bg-gray-50 border border-b-gray-200 py-2 px-6">
                        <ColorChoose />
                        <Prompt />
                    </div>
                    <Suggestion/>
                </div>
                <div className="py-5">
                    <SearchingIndicator />
                </div>
            </div>
        </SuggestionContextProvider>

    )
}
