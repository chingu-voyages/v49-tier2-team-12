import React, { useState } from 'react';
import Logo from "../../../../public/heroSection1.jpg"
import Image from 'next/image'

const heroSection: React.FC = () => {

    return (
        <div className="flex flex-col md:flex-row  text-gray-700 items-center justify-between pb-8">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12 md:mb-0 mb-12">
          <h1 className="text-4xl  font-bold mb-4">Discover the Perfect Palette</h1>
          <p className="text-lg mb-8">Discover the ideal color for your next project with our powerful color picker tool. Explore millions of shades, get color inspiration, and seamlessly integrate your choices.</p>
          <a href="" className="animate-bounce hover:animate-none inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ">Start Picking Colors</a>
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-12 md:mb-0 mb-12 order-first md:order-last">
                <Image
                    src={Logo}
                    alt="Color Picker Hero"
                    className="w-full rounded-lg shadow-lg"
                    
                />
        </div>
      </div>
    );
};

export default heroSection;