"use client"
import ColorPicker from "@/components/next-iro/colorPicker"
import PromptWrapper from "@/app/_components/prompt_wrapper";
import Footer from "@/app/_components/Footer/footer"
        
export default function Home() {
  const handleColorChange = (color: string) =>{
    console.log("selected color: ",color);
  }
  return (
    <main className="w-full flex min-h-screen flex-col justify-between p-4">
      <div className="flex flex-col items-center justify-between p-24">
        <h1>Pick a color</h1>
        <ColorPicker onColorChange={handleColorChange}/>
      </div>
      <div className="w-full">
        <PromptWrapper />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
