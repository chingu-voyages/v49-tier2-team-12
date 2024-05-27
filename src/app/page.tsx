import PromptWrapper from "@/app/_components/prompt_wrapper";
import Footer from "@/app/_components/Footer/footer"

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col  justify-between p-4">
        <div className="w-full">
            <PromptWrapper />
        </div>
        <div>
          <Footer />
        </div>
    </main>
  );
}
