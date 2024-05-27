"use client"
import ColorPicker from "@/components/next-iro/colorPicker"
export default function Home() {
  const handleColorChange = (color: string) =>{
    console.log("selected color: ",color);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Pick a color</h1>
         <ColorPicker onColorChange={handleColorChange}/>
    </main>
  );
}
