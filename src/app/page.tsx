import PromptWrapper from "@/app/_components/prompt_wrapper";
import ColorContextProvider from "@/app/_components/color_context";
import Footer from "@/app/_components/Footer/footer";
import ColorPicker from "@/components/next-iro/colorPicker";

export default function Home() {
  const handleColorChange = (color: string) =>{
    console.log("selected color: ",color);
  }
  return (
    <main className="w-full flex min-h-screen flex-col justify-between">
        <div className="w-full py-20">
          <div className="max-w-screen-xl mx-auto p-3">
              <ColorContextProvider>
                  <ColorPicker/>
                  <div className="mb-10">
                    <h2 className="text-gray-700 text-xl">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-md border border-green-600">Step 2</span> Write the context in which you want to use the selected color. You will find color recommendations and compatible colors.
                    </h2>
                  </div>
                  <PromptWrapper />
              </ColorContextProvider>
          </div>
        </div>
        <div>
            <Footer />
        </div>
    </main>
  );
}
