"use client"
import {Pen} from "@/app/_components/icons/pen";
import React , {useEffect , useState} from "react";
import {useSuggestionContext} from "@/app/app/(component)/context/suggestion";
import {useColorRecommendationContext} from "@/app/app/(component)/context/recommendation";
import {useColorContext} from "@/app/_components/color_context";

export default function Prompt() {
    const {suggestion} = useSuggestionContext();
    const [context, setContext] = useState<string>();
    const { selectedColor } = useColorContext()
    const {askColorRecommendation, isLoading} = useColorRecommendationContext()
    const askColorRecommendationToAi = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await askColorRecommendation(selectedColor!, context!)
    }
    useEffect(() => {
        if(suggestion){
            setContext(suggestion)
        }
    } , [suggestion]);
    return(
       <div className="w-full ">
           <form onSubmit={askColorRecommendationToAi} className="w-full flex flex-col gap-6 lg:flex-row  justify-center items-center">
               <textarea
                   value={context}
                   minLength={1}
                   onChange={(e) => setContext(e.target.value)}
                   className="w-full flex-1 p-3 pt-6 rounded-lg outline-0 focus:outline-0  text-gray-950 bg-gray-50 "
                   placeholder="Describe the context in which you intend to use the selected color."
               />
               <button
                   type={"submit"}
                   className="px-6 py-3 disabled:bg-gray-400 rounded-full flex items-center justify-center gap-2 bg-blue-500 text-white self-end md:self-center "
                   disabled={!context?.trim() || isLoading}
               >
               <span className="w-5  ">
                   <Pen />
               </span>
                   <span>
                   Generate
               </span>
               </button>
           </form>
       </div>
    )
}
