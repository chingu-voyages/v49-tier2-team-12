import Vision from "@/app/app/color-vision/(component)/vision";
import ColorContextProvider from "@/app/_components/color_context";
import {ColorRecommendationProvider} from "@/app/app/(component)/context/recommendation";
import ColorChoose from "@/app/app/(component)/colorpicker_modal";
import Prompt from "@/app/app/(component)/prompt";
import React from "react";
import VisionResult from "@/app/app/color-vision/(component)/vison_result";
import SearchingIndicator from "@/app/app/(component)/searching_indicator";
import Step from "@/app/app/(component)/step";

export default function ColorVision() {
    return(
        <div className="py-6 w-full min-h-screen max-w-screen-xl m-auto text-gray-700">
            <ColorRecommendationProvider>
                <ColorContextProvider>
                    <div className="w-full flex-col flex   sm:flex-row items-center justify-between rounded-lg gap-3 mb-6 bg-gray-50 border border-b-gray-200 py-2 px-6">
                        <div>
                            <Step title={"Step 1 "} description={"Choose a color you want to simulate for visions deficiencies"} />
                            <Step title={"Step 2 "} description={"Click the simulate button"} />
                        </div>
                        <ColorChoose />
                        <Vision />
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
