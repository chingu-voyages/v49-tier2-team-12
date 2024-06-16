import PromptWrapper from "@/app/_components/prompt_wrapper";
import ColorContextProvider from "@/app/_components/color_context";
import Footer from "@/app/_components/Footer/footer";
import ColorPicker from "@/components/next-iro/colorPicker";
import Header from "./_components/Header/header";
import HeroSection from "./_components/Hero-Section/heroSection";

export default function Home() {
  const handleColorChange = (color: string) =>{
    console.log("selected color: ",handleColorChange);
  }
  return (
    <section className="w-full flex justify-center items-start pt-24  min-h-screen bg-color-2">
        <HeroSection/>
    </section>
  );
}
