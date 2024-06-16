import Vision from "@/app/app/color-vision/(component)/vision";
import ColorContextProvider from "@/app/_components/color_context";
import {ColorRecommendationProvider} from "@/app/app/(component)/context/recommendation";
import ColorChoose from "@/app/app/(component)/colorpicker_modal";
import React from "react";
import VisionResult from "@/app/app/color-vision/(component)/vison_result";
import SearchingIndicator from "@/app/app/(component)/searching_indicator";
import Step from "@/app/app/(component)/step";

export default function ColorVision() {
    return(
        <div className="py-6 w-full min-h-screen max-w-screen-xl m-auto text-gray-700">
            <ColorRecommendationProvider>
                <ColorContextProvider>
                    <div className="w-full flex-col px-6 flex flex-wrap justify-start bg-white shadow items-start gap-3 py-6 mb-6">
                        <h3 className="flex gap-3 font-bold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-route">
                                <circle cx="6" cy="19" r="3"/>
                                <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
                                <circle cx="18" cy="5" r="3"/>
                            </svg>
                            Guidelines
                        </h3>
                        <p className="text-xl"> Check how the selected color might look like for users with vision deficiencies</p>
                        <Step title={"Step 1 "} description={"Choose a color you want to simulate for visions deficiencies"} />
                        <Step title={"Step 2 "} description={"Click the simulate button"} />
                    </div>
                    <div className="w-full flex-col  items-center justify-between rounded-lg gap-3 mb-6 bg-gray-50 border border-b-gray-200 py-2 px-6">
                        <div className="w-full flex-col flex   sm:flex-row items-center justify-between rounded-lg gap-3 mb-6  py-2 px-6">
                            <ColorChoose />
                            <Vision />
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center py-5">
                        <SearchingIndicator />
                    </div>
                    <div className="w-full flex flex-col lg:flex-row items-center justify-between rounded-lg gap-3 mb-6 bg-gray-50 border border-b-gray-200 py-2 px-6">
                        <VisionResult />
                    </div>

                </ColorContextProvider>
            </ColorRecommendationProvider>

        </div>
    )
}
