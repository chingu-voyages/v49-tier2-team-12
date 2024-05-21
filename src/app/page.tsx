"use client"
import ColorPicker from "@/components/next-iro/colorPicker"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <ColorPicker onColorChange={() => {}}/>
    </main>
  );
}
