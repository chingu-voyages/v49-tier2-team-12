import Search from "@/app/app/(component)/search";
import {ColorRecommendationProvider} from "@/app/app/(component)/context/recommendation";
import Result from "@/app/app/(component)/result";
import ColorContextProvider from "@/app/_components/color_context";


export default function AppPage() {
    return(
        <div className="w-full py-6 min-h-screen bg-gray-50 max-w-screen-xl m-auto">
              <div className="w-full m-auto  text-black">
                  <div className="w-full flex flex-col justify-center items-start gap-3">
                          <ColorRecommendationProvider>
                              <ColorContextProvider>
                                 <Search />
                                 <Result />
                              </ColorContextProvider>
                          </ColorRecommendationProvider>
                  </div>
              </div>
        </div>
    )
}
