import SuggestionCard from "@/app/app/(component)/suggestion-card";
import {useColorRecommendationContext} from "@/app/app/(component)/context/recommendation";
import {useSuggestionContext} from "@/app/app/(component)/context/suggestion";

const suggestions = [
    {
        "context": "Interior Design",
        "description": "I am painting my living room and want a color that feels cozy and inviting.",
        "bgColor": "bg-[#FFDAB9]"  // Peach Puff
    },
    {
        "context": "Fashion and Apparel",
        "description": "I need a color for a summer dress that will be trendy and fresh.",
        "bgColor": "bg-[#E6E6FA]"  // Lavender
    },
    {
        "context": "Branding and Marketing",
        "description": "I am designing a logo for a tech startup and need a color that conveys innovation and reliability.",
        "bgColor": "bg-[#AFEEEE]"  // Pale Turquoise
    },
    {
        "context": "Event Planning",
        "description": "I am planning a wedding and need a color theme that feels romantic and elegant.",
        "bgColor": "bg-[#FFF0F5]"  // Lavender Blush
    }
]



export default function Suggestion() {
    const {show, toggleShow} = useSuggestionContext();
    const {isLoading} = useColorRecommendationContext()
    return(
        <div className="w-full">
            <div className="w-full flex justify-between">
                <div className="flex items-center mb-2 gap-2">
                <span className="text-orange-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                    <path d="M9 18h6"/>
                    <path d="M10 22h4"/>
                </svg>
                </span>
                    <h3 className=" text-gray-700 ">
                        Suggestions
                    </h3>
                </div>
                <button onClick={toggleShow}>
                    { !show ? "Hide" : "Show"}
                </button>
            </div>
            <div className="flex flex-wrap md:grid md:grid-cols-2 gap-3">
                {
                    show || !isLoading && suggestions.map(suggestion => {
                        return(
                            <SuggestionCard
                                key={suggestion.context}
                                context={suggestion.context}
                                description={suggestion.description}
                                bgColor={suggestion.bgColor}
                            />
                        )
                    })
                }
            </div>
        </div>

    )
}
