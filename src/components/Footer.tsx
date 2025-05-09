import { data } from "@/constants/data";
import Image from "next/image";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

export function Footer() {
    const message = "¡Hola! Quiero una página web.";
    const whatsappUrl = `${data.whatsapp}${encodeURIComponent(message)}`;

    return (
        <footer className="bg-surface pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-6 space-x-2">
                            <Image
                                src={data.logo || ""}
                                alt="J&Y Logo"
                                width={50}
                                height={50}
                            />
                            <h1 className="text-2xl font-bold">
                                {data.empresa}
                            </h1>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Creamos páginas efectivas y optimizadas para que tu
                            negocio crezca y tenga éxito en el mundo digital.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href={data.redes.facebook}
                                target="_blank"
                                aria-label="Ir a Facebook"
                                rel="noopener noreferrer"
                                className="bg-[#030712] p-2 rounded-lg hover:bg-[#c0fd3d] hover:text-[#030712] transition-colors"
                            >
                                <LuFacebook className="w-5 h-5" />
                            </a>
                            <a
                                href={data.redes.tiktok}
                                target="_blank"
                                aria-label="Ir a Tiktok"
                                rel="noopener noreferrer"
                                className="bg-[#030712] p-2 rounded-lg hover:bg-[#c0fd3d] hover:text-[#030712] transition-colors"
                            >
                                <FaTiktok className="w-5 h-5" />
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                aria-label="Ir a WhatsApp"
                                rel="noopener noreferrer"
                                className="bg-[#030712] p-2 rounded-lg hover:bg-[#c0fd3d] hover:text-[#030712] transition-colors"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            {["About Us", "Our Work"].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-[#c0fd3d] transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4">
                            {[
                                "Landing Page Design",
                                "Conversion Optimization",
                                "SEO Services",
                                "Web Development",
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-[#c0fd3d] transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-6">Help</h3>
                        <ul className="space-y-4">
                            {["FAQs", "Contact Us"].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-[#c0fd3d] transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
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
