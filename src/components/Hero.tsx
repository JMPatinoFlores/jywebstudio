import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function Hero() {
    return (
        <section className="py-16 md:py-24 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Texto */}
                    <div className="lg:w-1/2 space-y-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Impulsa tu Negocio al Siguiente Nivel{" "}
                            <span className="text-gold">
                                Convierte Visitantes en Clientes.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Creamos landing pages de alta calidad para pequeñas
                            y medianas empresas que buscan generar más clientes
                            potenciales, ventas y crecimiento.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#"
                                className="button-gold rounded-full px-6 py-3 flex items-center text-lg font-medium justify-center"
                            >
                                COMPRAR AHORA
                                <span className="ml-2">
                                    <LuArrowRight size={20} />
                                </span>
                            </Link>
                            <Link
                                href="#"
                                className="text-gold text-lg font-medium border border-[#f4d47a] px-6 py-3 rounded-full text-center"
                            >
                                VER DEMOS
                            </Link>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-full h-full bg-gold rounded-3xl transform rotate-3"></div>
                            <Image
                                src="/pcimage.jpg"
                                alt="Mockup de páginas web"
                                width={700}
                                height={700}
                                className="relative rounded-3xl shadow-xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
