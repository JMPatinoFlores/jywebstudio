import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function CTASection() {
    return (
        <section className="bg-gold py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    ¿Está listo para transformar su negocio con una página de
                    destino de alta conversión?
                </h2>
                <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
                    Únase a cientos de empresas que han mejorado su presencia en
                    línea y aumentado las conversiones con nuestras páginas de
                    destino profesionales.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="#"
                        className="px-8 py-4 bg-white text-[#b8944a] rounded-full hover:bg-[#b8944a] hover:text-white transition-colors text-lg font-medium flex items-center mx-auto sm:mx-0 space-x-2"
                    >
                        Get Started Now
                        <div className="ml-2">
                            <LuArrowRight size={20} />
                        </div>
                    </Link>
                    <Link
                        href="#"
                        className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-[#b8944a] hover:text-white hover:border-[#b8944a] transition-colors text-lg font-medium mx-auto sm:mx-0"
                    >
                        Schedule a Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
}
