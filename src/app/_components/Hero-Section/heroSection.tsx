import React, { useState } from 'react';
import Hero from "../../../../public/Designer.png"
import Image from 'next/image'
import {montserrat } from "@/app/fonts/font";
import Link from "next/link";
import {Button} from "@/app/_components/Buttons/Buttons";

const heroSection: React.FC = () => {

    return (
        <div className="max-w-screen-xl  flex flex-col md:flex-row  text-gray-700 items-center justify-center pb-8 px-12  py-6">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-12 md:mb-0 mb-12">
              <span className="text-xl font-light">Illuminate Your Creativity</span>
              <h1 className={`${montserrat.className} text-3xl lg:text-6xl  font-extrabold mb-4`}> AI-Powered Color Discovery</h1>
              <p className="text-lg font-normal mb-8">Discover the ideal color for your next project with our powerful color picker tool. Explore millions of shades, get color inspiration, and seamlessly integrate your choices.</p>
              <Link href={"/app"}>
                 <Button label="Start picking colors" />
              </Link>
            </div>
            <aside className="w-full flex justify-center  lg:w-1/2 pl-0 lg:pl-12 md:mb-0 mb-12 order-first md:order-last">
                    <Image
                        src={Hero}
                        alt="Color Picker Hero"
                        style={{maxWidth: "450px"}}
                        className="w-full rounded-full shadow-lg "
                    />
            </aside>
        </div>
    );
};

export default heroSection;
