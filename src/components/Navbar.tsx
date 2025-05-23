"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { data } from "@/constants/data";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="w-full fixed bg-dark top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="#" className="flex items-center">
                        <Image
                            src="/logogreen.png"
                            alt="J&Y logo"
                            width={50}
                            height={50}
                        />
                        <h1 className="text-xl font-bold text-green">
                            {data.empresa}
                        </h1>
                    </Link>
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link
                            href="#hero"
                            className="hover:text-green transition duration-300 underline-green"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="#features"
                            className="hover:text-green transition duration-300 underline-green"
                        >
                            Servicios
                        </Link>
                        <Link
                            href="#portfolio"
                            className="hover:text-green transition duration-300 underline-green"
                        >
                            Portafolio
                        </Link>
                        <Link
                            href="#faq"
                            className="hover:text-green transition duration-300 underline-green"
                        >
                            Preguntas Frecuentes
                        </Link>
                        <Link
                            href="#contact"
                            className="hover:text-green transition duration-300 underline-green"
                        >
                            Contacto
                        </Link>
                        <Link
                            href="#pricing"
                            className="bg-green text-dark rounded-full px-6 py-3 font-medium hover:bg-[#b0f427] transition-all hover:shadow-lg shadow-green/50"
                        >
                            Ver Planes
                        </Link>
                    </nav>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 focus:outline-none flex items-center"
                        >
                            {isMenuOpen ? (
                                <IoClose size={24} />
                            ) : (
                                <LuMenu size={24} />
                            )}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-3 text-right">
                            <Link href="#hero">Inicio</Link>
                            <Link href="#services">Servicios</Link>
                            <Link href="#portfolio">Portafolio</Link>
                            <Link href="#faq">Preguntas Frecuentes</Link>
                            <Link href="#contact">Contacto</Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
