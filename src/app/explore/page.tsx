import ColorContextProvider from "@/app/_components/color_context";
import ColorPicker from "@/components/next-iro/colorPicker";
import PromptWrapper from "@/app/_components/prompt_wrapper";

export default function ExplorePage() {
    return(
        <div className="w-full py-20">
            <div className="max-w-screen-xl mx-auto p-3">
                <ColorContextProvider>
                    <ColorPicker/>
                    <div className="mb-10">
                        <h2 className="text-gray-700 text-xl">
                            <span className="bg-green-500 text-white px-2 py-1 rounded-md border border-green-600">Step 2</span> Write the context and explain how you want to use the selected color.
                        </h2>
                    </div>
                    <PromptWrapper />
                </ColorContextProvider>
            </div>
        </div>
    )
}
