import PromptWrapper from "@/app/_components/prompt_wrapper";
import ColorContextProvider from "@/app/_components/color_context";
import Footer from "@/app/_components/Footer/footer";
import ColorPicker from "@/components/next-iro/colorPicker";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col  justify-between p-24">
        <div className="w-full">
            <ColorContextProvider>
                <div className="w-full flex flex-col items-center justify-between p-24">
                    <h1>Pick a color</h1>
                    <ColorPicker/>
                </div>
                <PromptWrapper />
            </ColorContextProvider>
        </div>
        <div>
            <Footer />
        </div>
    </main>
  );
}
