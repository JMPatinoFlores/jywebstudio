import Link from "next/link";
import { LuCheck } from "react-icons/lu";

export default function Pricing() {
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
            idealFor:
                "Consultorios, talleres, servicios independientes y pequeños negocios",
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
                "Personas que venden citas, talleres, cursos o productos simples",
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
            idealFor:
                "Negocios que buscan vender cursos, productos o servicios de forma automatizada",
            highlighted: false,
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Precios simples y transparentes
                    </h2>
                    <p className="text-xl text-gray-600">
                        Elige el plan perfecto para las necesidades de tu
                        negocio. Sin cargos ocultos.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-105 ${
                                pkg.highlighted
                                    ? "border-2 border-[#f4d47a] relative"
                                    : ""
                            }`}
                        >
                            {pkg.highlighted && (
                                <div className="bg-[#f4d47a] text-white text-center py-1 text-sm font-bold">
                                    POPULAR
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">
                                    {pkg.title}
                                </h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-extrabold">
                                        ${pkg.price} MXN
                                    </span>
                                    <span className="ml-2 text-gray-600">
                                        una-vez
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    {pkg.idealFor}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start"
                                        >
                                            <div className="h-5 w-5 text-green-500 mr-2 mt-0.5">
                                                <LuCheck size={20} />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="#"
                                    className={`block w-full py-3 px-4 rounded-full text-center font-medium ${
                                        pkg.highlighted
                                            ? "button-gold"
                                            : "border border-[#b8944a] text-[#b8944a] hover:bg-[#b8944a]/10"
                                    } transition-colors`}
                                >
                                    Contáctanos
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
