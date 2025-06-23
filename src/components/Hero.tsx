import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function Hero() {
    return (
        <section id="hero" className=" md:py-24 relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-green rounded-full filter blur-[150px] opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
                            <span className="text-green">Atrae Clientes</span>{" "}
                            Sin Complicaciones
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
                            Creamos la página web perfecta para que tu negocio
                            <span className="font-bold">
                                {" "}
                                luzca confiable, muestre tus servicios
                            </span>{" "}
                            y te contacten fácil.{" "}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#pricing"
                                className="bg-green text-black rounded-full px-8 py-3 flex items-center text-lg font-medium justify-center hover:bg-[#b0f427] transition-all hover:shadow-lg shadow-green/50"
                            >
                                Quiero Mi Página Web
                                <span className="ml-2">
                                    <LuArrowRight size={20} />
                                </span>
                            </Link>
                            <Link
                                href="#portfolio"
                                className="text-white hover:text-green border border-white hover:border-green px-8 py-3 rounded-full text-center font-medium text-lg transition-all hover:shadow-lg shadow-green/50"
                            >
                                Ver Ejemplos Reales
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                            Entrega rápida · Diseño responsivo · Sin tecnicismos
                        </p>
                    </div>

                    {/* Imagen */}
                    <div className="lg:w-1/2">
                        <Image
                            src="/mainmockup.png"
                            alt="Mockup de páginas web"
                            width={700}
                            height={700}
                            className=" w-full drop-shadow-xl drop-shadow-green/40"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
