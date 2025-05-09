import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function Hero() {
    return (
        <section id="hero" className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-green rounded-full filter blur-[150px] opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Texto */}
                    <div className="lg:w-1/2 space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
                            <span className="text-green">
                                Convierte Visitantes
                            </span>{" "}
                            en Clientes.
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
                            Creamos sitios de alta calidad para pequeñas y
                            medianas empresas que quieren más clientes, ventas y
                            crecimiento.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#contact"
                                className="bg-green text-black rounded-full px-8 py-3 flex items-center text-lg font-medium justify-center hover:bg-[#b0f427] transition-all hover:shadow-lg shadow-green/50"
                            >
                                Obtén Tu Página Ahora
                                <span className="ml-2">
                                    <LuArrowRight size={20} />
                                </span>
                            </Link>
                            <Link
                                href="#portfolio"
                                className="text-white hover:text-green border border-white hover:border-green px-8 py-3 rounded-full text-center font-medium text-lg transition-all hover:shadow-lg shadow-green/50"
                            >
                                Ver Demos
                            </Link>
                        </div>
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
