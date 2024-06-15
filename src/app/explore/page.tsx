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
                    <div className="mb-10">
                        <h2 className="text-gray-700 text-xl __className_f8e921">
                            <span className="bg-blue-500 text-white px-2 py-1 rounded-lg border border-blue-600">Step 2</span> Write the context and explain how you want to use the selected color
                        </h2>
                    </div>
                    <PromptWrapper />
                    <div className="mb-10">
                        <h2 className="text-gray-700 text-xl __className_f8e921">
                            <span className="bg-blue-500 text-white px-2 py-1 rounded-lg border border-blue-600">Step 3</span> Check how the selected color might look like for users with vision deficiencies
                        </h2>
                    </div>
                    <ColorVisionSimulator />
                </ColorContextProvider>
            </div>
        </div>
    )
}
