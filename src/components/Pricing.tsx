import Link from "next/link";
import { LuCheck } from "react-icons/lu";

export function Pricing() {
    const packages = [
        {
            id: "basic",
            title: "Paquete Básico",
            price: 3500,
            deliveryTime: "5 a 7 días hábiles",
            features: [
                "Página de bienvenida profesional",
                "Hasta 3 secciones (ejemplo: Quiénes somos, Servicios, Contacto)",
                "Formulario de contacto funcional (EmailJS)",
                "Mapa de ubicación",
                "Botón flotante de WhatsApp",
                "Integración de redes sociales",
                "Galería de hasta 6 fotos",
                "Diseño responsive adaptado a móviles",
            ],
            idealFor: "Perfecto para pequeñas empresas y nuevas empresas.",
            color: "#008cff",
            highlighted: false,
        },
        {
            id: "intermediate",
            title: "Paquete Intermedio",
            price: 5500,
            deliveryTime: "7 a 10 días hábiles",
            features: [
                "Todo lo incluido en el Paquete Básico",
                "Página adicional de servicios o productos",
                "Galería expandida (hasta 10 fotos o productos)",
                "Carrito de compras sencillo (sin backend, con LocalStorage)",
                "Botón de pago directo (Stripe o PayPal) opcional",
                "Formulario de reservaciones (opcional)",
            ],
            idealFor:
                "Ideal para empresas en crecimiento que buscan resultados.",
            color: "#c0fd3d",
            highlighted: true,
        },
        {
            id: "advanced",
            title: "Paquete Avanzado",
            price: 7500,
            deliveryTime: "10 a 15 días hábiles",
            features: [
                "Todo lo incluido en el Paquete Intermedio",
                "Sección de cursos o catálogo de productos",
                "Carrito de compras funcional",
                "Integración opcional con Stripe o PayPal (pago adicional)",
                "Sistema de reservas conectado a Calendario",
                "Actualizaciones menores gratuitas por 15 días",
            ],
            idealFor: "Para empresas que necesitan soluciones integrales.",
            color: "#ff3131",
            highlighted: false,
        },
    ];

    return (
        <section className="py-20 relative">
            <div className="absolute -top-40 right-0 w-80 h-80 bg-[#ff6700] rounded-full filter blur-[150px] opacity-10"></div>
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
                                <div className="absolute top-0 left-0 w-full bg-green text-[#030712] text-center py-1 font-medium">
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
                                href="#"
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
                        href="#"
                        className="bg-transparent border border-cian text-[#00ffff] hover:text-[#030712] hover:bg-cian hover:bg-opacity-10 px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg shadow-cian/50"
                    >
                        Programar una Consulta
                    </Link>
                </div>
            </div>
        </section>
    );
}
