"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "../../../../public/Logo.png"
import Link from "next/link";
import {neueRemanGt} from "@/app/fonts/font";
import {Button} from "@/app/_components/Buttons/Buttons";
import {Pen} from "@/app/_components/icons/pen";
import {usePathname} from "next/navigation";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const  pathname = usePathname();
    console.log(pathname)
    return (
        <nav className="w-full z-50 backdrop-blur shadow-sm text-gray-800 border-b-1">
            <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={Logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
                    <h2 className={`${neueRemanGt.className} text-xl`}>ColorMind</h2>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        {
                            pathname !='/' && (
                                <div className="flex">
                                    <li>
                                        <Link
                                            href="/app"
                                            className={`${pathname === "/app" ? "text-blue-600 border-b-2 border-blue-500 ": ""} block py-2 px-3 hover:text-blue-600`}
                                            aria-current="page"
                                        >
                                            Color recommendation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/app/color-vision"
                                            className={`${pathname == "/app/color-vision" ? "text-blue-600 border-b-2 border-blue-500": ""} block py-2 px-3 rounded hover:text-blue-600`}
                                            aria-current="page"
                                        >
                                            Color vision
                                        </Link>
                                    </li>
                                </div>

                            )
                        }
                        {
                            pathname == "/" && (
                                <Link href={"/app"} >
                                    <Button label="Ai Color Generator" style="px-6 flex items-center justify-center gap-2 __className_a82057" >
                                <span className="w-5 text-white ">
                                     <Pen />
                                </span>
                                    </Button>
                                </Link>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
