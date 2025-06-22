import { data } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

export function Footer() {
    const message = "¡Hola! Quiero una página web.";
    const whatsappUrl = `${data.whatsapp}${encodeURIComponent(message)}`;

    return (
        <footer className="bg-surface pt-8 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-center items-center text-center mb-12">
                    <div>
                        <Link
                            href="#hero"
                            className="flex items-center justify-center mb-2 space-x-2"
                        >
                            <Image
                                src={data.logo || ""}
                                alt="J&Y Logo"
                                width={50}
                                height={50}
                            />
                            <h1 className="text-2xl font-bold text-green">
                                {data.empresa}
                            </h1>
                        </Link>
                        <p className="text-gray-400 mb-6 text-center max-w-lg">
                            Creamos páginas efectivas y optimizadas para que tu
                            negocio crezca y tenga éxito en el mundo digital.
                        </p>
                        <div className="flex space-x-12 items-center justify-center my-6">
                            <Link
                                href="#features"
                                className="hover:text-green transition-colors"
                            >
                                Servicios
                            </Link>
                            <Link
                                href="#portfolio"
                                className="hover:text-green transition-colors"
                            >
                                Demos
                            </Link>
                            <Link
                                href="#faq"
                                className="hover:text-green transition-colors"
                            >
                                FAQs
                            </Link>
                            <Link
                                href="#contact"
                                className="hover:text-green transition-colors"
                            >
                                Contacto
                            </Link>
                        </div>
                        <div className="flex space-x-4 items-center justify-center">
                            <a
                                href={data.redes.facebook}
                                target="_blank"
                                aria-label="Ir a Facebook"
                                rel="noopener noreferrer"
                                className="bg-dark p-2 rounded-full hover:bg-green hover:text-dark transition-colors"
                            >
                                <LuFacebook className="w-5 h-5" />
                            </a>
                            <a
                                href={data.redes.tiktok}
                                target="_blank"
                                aria-label="Ir a Tiktok"
                                rel="noopener noreferrer"
                                className="bg-dark p-2 rounded-full hover:bg-green hover:text-dark transition-colors"
                            >
                                <FaTiktok className="w-5 h-5" />
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                aria-label="Ir a WhatsApp"
                                rel="noopener noreferrer"
                                className="bg-dark p-2 rounded-full hover:bg-green hover:text-dark transition-colors"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 mt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-center items-center">
                    <p>
                        © {new Date().getFullYear()} J&Y Web Studio. Todos los
                        derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
