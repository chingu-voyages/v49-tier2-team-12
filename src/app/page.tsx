import PromptWrapper from "@/app/_components/prompt_wrapper";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col  justify-between p-24">
        <div className="w-full">
            <PromptWrapper />
        </div>
    </main>
  );
}
