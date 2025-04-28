"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-[#fffff0] shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="#" className="flex items-center">
                        <Image
                            src="/3.png"
                            alt="J&Y logo"
                            width={50}
                            height={50}
                        />
                        <h1 className="text-3xl text-gold font-bold">
                            J&Y Web Studio
                        </h1>
                    </Link>
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link
                            href="#"
                            className="hover:text-[#f4d47a] transition duration-300 underline-gold"
                        >
                            Inicio
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-[#f4d47a] transition duration-300 underline-gold"
                        >
                            Servicios
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-[#f4d47a] transition duration-300 underline-gold"
                        >
                            Portafolio
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-[#f4d47a] transition duration-300 underline-gold"
                        >
                            Contacto
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-[#f4d47a] transition duration-300 underline-gold"
                        >
                            Preguntas Frecuentes
                        </Link>
                        <Link
                            href="#"
                            className="button-gold rounded-full px-6 py-3"
                        >
                            Comprar
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
                        <div className="flex flex-col space-y-3">
                            <Link href="#">Inicio</Link>
                            <Link href="#">Servicios</Link>
                            <Link href="#">Portafolio</Link>
                            <Link href="#">Contacto</Link>
                            <Link href="#">Preguntas Frecuentes</Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
