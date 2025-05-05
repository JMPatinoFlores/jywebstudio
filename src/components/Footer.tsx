import Image from "next/image";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { LuFacebook, LuLinkedin } from "react-icons/lu";

export function Footer() {
    return (
        <footer className="bg-surface pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-6 space-x-2">
                            <Image
                                src="/logogreen.png"
                                alt="J&Y Logo"
                                width={50}
                                height={50}
                            />
                            <h1 className="text-2xl font-bold">
                                J&Y Web Studio
                            </h1>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Creamos páginas efectivas y optimizadas para que tu
                            negocio crezca y tenga éxito en el mundo digital.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="bg-[#030712] p-2 rounded-lg hover:bg-[#c0fd3d] hover:text-[#030712] transition-colors"
                            >
                                <LuFacebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="bg-[#030712] p-2 rounded-lg hover:bg-[#c0fd3d] hover:text-[#030712] transition-colors"
                            >
                                <FaTiktok className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="bg-[#030712] p-2 rounded-lg hover:bg-[#c0fd3d] hover:text-[#030712] transition-colors"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="bg-[#030712] p-2 rounded-lg hover:bg-[#c0fd3d] hover:text-[#030712] transition-colors"
                            >
                                <LuLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            {[
                                "About Us",
                                "Our Work",
                                "Team",
                                "Careers",
                                "Blog",
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
                        <h3 className="font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4">
                            {[
                                "Landing Page Design",
                                "Conversion Optimization",
                                "A/B Testing",
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
                            {[
                                "FAQs",
                                "Contact Us",
                                "Privacy Policy",
                                "Terms of Service",
                                "Refund Policy",
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
                </div>
                <div className="border-t border-gray-800 pt-8 mt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>
                        © {new Date().getFullYear()} J&Y Web Studio. Todos los
                        derechos reservados.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <a
                            href="#"
                            className="hover:text-[#c0fd3d] transition-colors mr-6"
                        >
                            Política de Privacidad
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#c0fd3d] transition-colors"
                        >
                            Términos del Servicio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
