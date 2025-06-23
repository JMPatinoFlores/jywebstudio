import { data } from "@/constants/data";
import Link from "next/link";
import { LuCheck } from "react-icons/lu";

export function Pricing() {
    // const message =
    //     "¡Hola! Quiero agendar una consulta para obtener mi página web.";
    const packages = [
        {
            id: "express",
            title: "Paquete Presencia Express",
            price: 1500,
            deliveryTime: "1 a 2 días hábiles",
            features: [
                "Página profesional de una sección",
                "Incluye: nombre del negocio, frase destacada, hasta 3 imágenes, horarios, botón de llamada a la acción",
                "Diseño responsive, optimizado para todo tipo de dispositivos",
                "Hosting gratuito en Vercel",
                "Botón de WhatsApp y/o redes sociales",
                "1 ajuste menor post-entrega (si necesitas un pequeño cambio)",
            ],
            color: "#008cff",
            highlighted: false,
            link: "https://buy.stripe.com/cNiaEY6Pt7nngvs57g4F200",
        },
        {
            id: "estrategica",
            title: "Paquete Presencia Estratégica",
            price: 3500,
            deliveryTime: "3 a 5 días hábiles",
            features: [
                "Hasta 4 secciones personalizadas: Inicio, servicios, galería, etc.",
                "Diseño optimizado con scroll suave y navegación anclada",
                "Nombre, logo y descripción del negocio, junto con una llamada a la acción efectiva",
                "Galería visual (hasta 6 imágenes), horarios de atención y ubicación",
                "Botón flotante de WhatsApp y enlaces a redes sociales integrados",
                "Elige entre: formulario de contacto funcional o sistema de reservas",
                "Ubicación con mapa embebido",
                "SEO básico",
                "2 ajustes incluidos para personalizar tu web a tu gusto",
            ],
            color: "#c0fd3d",
            highlighted: true,
            link: "https://buy.stripe.com/bJe28sgq30YZ1Ay1V44F201",
        },
        {
            id: "profesional",
            title: "Paquete Presencia Profesional",
            price: 5800,
            deliveryTime: "7 a 10 días hábiles",
            features: [
                "Todo lo del Paquete Presencia Estratégica",
                "Mejora visual personalizada: paleta de colores, tipografía y logo básico incluido",
                "Hasta 6 secciones (incl. FAQ y Testimonios)",
                "Galería interactiva (carrusel o lightbox)",
                "Llamadas a la acción distribuidas",
                "Formulario de contacto funcional + sistema de reservas integrado",
                "Animaciones sutiles",
                "Mejoras de visibilidad en Google (etiquetas, títulos, estructura optimizada)",
                "Soporte post-entrega de 7 días",
            ],
            color: "#ff3131",
            highlighted: false,
            link: "https://buy.stripe.com/9B6cN67Tx9vvenk0R04F202",
        },
    ];

    return (
        <section id="pricing" className="py-20 relative">
            <div className="absolute -top-40 right-0 w-80 h-80 bg-orange rounded-full filter blur-[150px] opacity-10 -z-10"></div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Simplemente,{" "}
                        <span className="text-orange">Precios</span>{" "}
                        Transparentes
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Elige el plan perfecto para tu proyecto. Sin costos
                        ocultos, solo resultados.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`
                bg-[#121c27] rounded-xl p-8 relative overflow-hidden border border-gray-800
                ${
                    pkg.highlighted
                        ? "transform md:-translate-y-4 shadow-lg shadow-green/10"
                        : ""
                }
              `}
                        >
                            {pkg.highlighted && (
                                <div className="absolute top-0 left-0 w-full bg-green text-dark text-center py-1 font-medium">
                                    POPULAR
                                </div>
                            )}
                            <div
                                style={{
                                    height: pkg.highlighted ? "2rem" : "0",
                                }}
                            ></div>

                            <h3 className="text-2xl font-bold mb-2">
                                {pkg.title}
                            </h3>
                            <div className="flex items-end mb-2">
                                <span
                                    className="text-4xl font-bold"
                                    style={{
                                        color: pkg.color,
                                    }}
                                >
                                    ${pkg.price}
                                </span>
                                <span className="ml-2 text-gray-400 mb-1">
                                    MXN
                                </span>
                            </div>
                            <p className="text-gray-400 mb-2">
                                Entrega en {pkg.deliveryTime}
                            </p>
                            <Link
                                href={pkg.link}
                                target="_blank"
                                className="block w-full py-3 rounded-full font-medium mb-8 transition-colors text-center"
                                style={{
                                    backgroundColor: pkg.highlighted
                                        ? pkg.color
                                        : "transparent",
                                    color: pkg.highlighted
                                        ? "#030712"
                                        : pkg.color,
                                    border: pkg.highlighted
                                        ? "none"
                                        : `1px solid ${pkg.color}`,
                                }}
                            >
                                Elegir Plan
                            </Link>
                            <ul className="space-y-4">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="h-5 w-5 text-green-500 mr-3 shrink-0">
                                            <LuCheck size={20} />
                                        </div>
                                        <span className="text-gray-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-surface rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        ¿Necesitas una solución personalizada?
                    </h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        Nuestro equipo puede crear un paquete adaptado a tus
                        necesidades específicas.
                    </p>
                    <Link
                        href={`${data.calendly}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border border-cian text-cian hover:text-dark hover:bg-cian hover:bg-opacity-10 px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg shadow-cian/50"
                    >
                        Programar una Consulta
                    </Link>
                </div>
            </div>
        </section>
    );
}
