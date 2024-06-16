"use client"
import {useSuggestionContext} from "@/app/app/(component)/context/suggestion";

type SuggestionCard = {
    context: string,
    description: string,
    bgColor: string
}
export default function SuggestionCard({context, description, bgColor}: SuggestionCard) {
    const { handleSelectSuggestion } = useSuggestionContext()
    return(
        <div
            onClick={() => handleSelectSuggestion(description)}
            className={`p-6 flex flex-col justify-center gap-2 ${bgColor} rounded-lg hover:border hover:border-2-white transition-all duration-200 cursor-pointer box-border` }>
            <div className="bg-white p-2 px-3 w-fit rounded-full">
                <h3 className="text-sm">{context}</h3>
            </div>
            <p className="w-full text-gray-700 text-sm"> { description }</p>
        </div>
    )
}
