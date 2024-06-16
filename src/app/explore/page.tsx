import ColorContextProvider from "@/app/_components/color_context";
import ColorPicker from "@/components/next-iro/colorPicker";
import PromptWrapper from "@/app/_components/prompt_wrapper";
import ColorVisionSimulator from "@/app/_components/color_vision";

export default function ExplorePage() {
    return(
        <div className="w-full py-20 bg-color-2">
            <div className="max-w-screen-xl mx-auto p-3">
                <ColorContextProvider>
                    <ColorPicker/>
                    <div className="lg:w-1/2 flex flex-col items-start justify-center">
                        <div className="mb-10 flex flex-col lg:flex-row">
                            <div className="lg:w-1/6">
                                <h2 className="text-xl __className_f8e921">
                                    <span className="bg-blue-500 text-white px-4 py-1 rounded-lg border border-blue-600">Step 2</span>
                                </h2>
                            </div>
                            <div className="lg:w-5/6">
                                <h2 className="text-gray-700 text-xl __className_f8e921">
                                    Write the context and explain in details how you want to use the selected color
                                </h2>
                            </div>
                        </div>
                    </div>
                    <PromptWrapper />
                    <div className="lg:w-1/2 flex flex-col items-start justify-center">
                        <div className="mb-10 flex flex-col lg:flex-row">
                            <div className="lg:w-1/6">
                                <h2 className="text-xl __className_f8e921">
                                    <span className="bg-blue-500 text-white px-4 py-1 rounded-lg border border-blue-600">Step 3</span>
                                </h2>
                            </div>
                            <div className="lg:w-5/6">
                                <h2 className="text-gray-700 text-xl __className_f8e921">
                                    Check how the selected color might look like for users with vision deficiencies
                                </h2>
                            </div>
                        </div>
                    </div>
                    <ColorVisionSimulator />
                </ColorContextProvider>
            </div>
        </div>
    )
}
