import Search from "@/app/app/(component)/search";
import {ColorRecommendationProvider} from "@/app/app/(component)/context/recommendation";
import Result from "@/app/app/(component)/result";
import ColorContextProvider from "@/app/_components/color_context";
import Step from "@/app/app/(component)/step";
import React from "react";


export default function AppPage() {
    return(
        <div className="w-full py-6 min-h-screen bg-gray-50 max-w-screen-xl m-auto">
              <div className="w-full m-auto  text-black">
                  <div className="w-full flex flex-col justify-center items-start gap-3">
                          <ColorRecommendationProvider>
                              <ColorContextProvider>
                                  <div className="w-full flex-col px-6 flex flex-wrap justify-start bg-white shadow items-start gap-3 py-6 mb-6">
                                      <h3 className="flex gap-3 font-bold text-xl">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route">
                                              <circle cx="6" cy="19" r="3"/>
                                              <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
                                              <circle cx="18" cy="5" r="3"/>
                                          </svg>
                                          Guidelines
                                      </h3>
                                      <p className="text-xl">Get color recommendations based on selected color</p>
                                      <Step title={"Step 1 "} description={"Choose a color  by clicking the square  to get colors recommendations based on it "} />
                                      <Step title={"Step 2 "} description={"Click the generate button to start processing"} />
                                  </div>
                                 <Search />
                                 <Result />
                              </ColorContextProvider>
                          </ColorRecommendationProvider>
                  </div>
              </div>
        </div>
    )
}
