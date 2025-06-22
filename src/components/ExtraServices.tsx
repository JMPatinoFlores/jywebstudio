import Link from "next/link";
import {
    LuArrowRight,
    LuCirclePlus,
    LuDownload,
    LuFileText,
} from "react-icons/lu";

export function ExtraServices() {
    return (
        <section className="py-20 relative">
            <div className="absolute -top-40 right-20 w-80 h-80 bg-orange rounded-full filter blur-[150px] opacity-10 -z-10"></div>
            <div className="container mx-auto px-4">
                <div className="bg-surface rounded-xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange rounded-full filter blur-[150px] opacity-5 -z-10"></div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Servicios{" "}
                                <span className="text-orange">Adicionales</span>
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Además de nuestros paquetes principales,
                                ofrecemos servicios complementarios para
                                potenciar tu página web y maximizar su
                                rendimiento.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        title: "Funciones Extra",
                                        description:
                                            "Formularios, sistemas de reservas, herramientas de marketing",
                                    },
                                    {
                                        title: "Secciones Extra",
                                        description:
                                            "Secciones adicionales y personalizadas",
                                    },
                                    {
                                        title: "Personalización y Soporte",
                                        description:
                                            "Rediseño de logo, paleta de colores, animaciones, soporte extendido",
                                    },
                                    {
                                        title: "Servicios Premium",
                                        description:
                                            "Conexión con pasarela de pagos, formulario avanzado, version editable",
                                    },
                                ].map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <LuCirclePlus className="w-5 h-5 text-orange mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium text-white">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/servicios-adicionales.pdf"
                                    target="_blank"
                                    className="bg-surface border border-orange text-orange px-6 py-3 rounded-full font-medium inline-flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
                                >
                                    <LuFileText className="w-5 h-5 mr-2" />
                                    Ver Catálogo Completo
                                </Link>
                                <Link
                                    href="#contact"
                                    className="bg-transparent border border-gray-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center hover:border-white transition-colors"
                                >
                                    Solicitar Información
                                    <LuArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-[#030712] rounded-xl p-8 border border-gray-800">
                                <div className="flex items-center mb-6">
                                    <LuDownload className="w-8 h-8 text-orange mr-4" />
                                    <div>
                                        <h3 className="font-bold text-xl">
                                            Catálogo de Servicios 2025
                                        </h3>
                                        <p className="text-gray-400">
                                            PDF - 146 KB
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="bg-surface rounded-lg p-4">
                                        <h4 className="font-medium mb-2">
                                            Incluye:
                                        </h4>
                                        <ul className="text-gray-400 text-sm space-y-2">
                                            <li>
                                                • Lista completa de
                                                integraciones disponibles
                                            </li>
                                            <li>
                                                • Detalles de planes de
                                                mantenimiento
                                            </li>
                                            <li>
                                                • Precios de servicios
                                                adicionales
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <Link
                                    href="/servicios-adicionales.pdf"
                                    download
                                    className="bg-orange text-white w-full py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-orange/90 transition-colors"
                                >
                                    <LuDownload className="w-5 h-5 mr-2" />
                                    Descargar Catálogo
                                </Link>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange rounded-full filter blur-[50px] opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
