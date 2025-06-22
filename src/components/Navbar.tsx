"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { data } from "@/constants/data";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            event.target instanceof Node &&
            !menuRef.current.contains(event.target)
        ) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="w-full fixed bg-dark top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2 md:py-4">
                    <Link href="#hero" className="flex items-center">
                        <Image
                            src="/logogreen.png"
                            alt="J&Y logo"
                            width={50}
                            height={50}
                            className="md:w-16 w-10"
                        />
                        <h1 className="truncate text-xl font-bold text-green hidden lg:flex">
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
                            href="#pricing"
                            className="hover:text-green transition duration-300 underline-green"
                        >
                            Planes
                        </Link>
                        <Link
                            href="#faq"
                            className="hover:text-green transition duration-300 underline-green truncate"
                        >
                            Preguntas Frecuentes
                        </Link>
                        <Link
                            href="#contact"
                            className="bg-green text-dark rounded-full truncate px-6 py-3 font-medium hover:bg-[#b0f427] transition-all hover:shadow-lg shadow-green/50"
                        >
                            Cotiza Tu Página
                        </Link>
                    </nav>
                    <div className="md:hidden" ref={menuRef}>
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
                    <div className="md:hidden pb-2" ref={menuRef}>
                        <div className="flex flex-col space-y-3 text-center">
                            <Link
                                href="#hero"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Inicio
                            </Link>
                            <Link
                                href="#services"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Servicios
                            </Link>
                            <Link
                                href="#portfolio"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Portafolio
                            </Link>
                            <Link
                                href="#pricing"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Planes
                            </Link>
                            <Link
                                href="#faq"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Preguntas Frecuentes
                            </Link>
                            <Link
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Cotizar Ahora
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
