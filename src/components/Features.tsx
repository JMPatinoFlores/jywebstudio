import { FaWhatsapp } from "react-icons/fa";
import {
    LuDollarSign,
    LuHandshake,
    LuRocket,
    LuShieldCheck,
    LuSmartphone,
} from "react-icons/lu";

export default function Features() {
    const features = [
        {
            icon: <LuHandshake className="h-8 w-8 text-pink" />,
            title: "Atracción Efectiva",
            description:
                "Diseño enfocado en guiar a tus clientes a comprar o contactarte (no solo a 'ver').",
        },
        {
            icon: <LuShieldCheck className="h-8 w-8 text-orange" />,
            title: "Visibilidad",
            description:
                "Aparece en Google y atrae clientes sin pagar publicidad.",
        },
        {
            icon: <LuRocket className="h-8 w-8 text-yellow" />,
            title: "Carga Rápida",
            description:
                "Velocidad optimizada para no perder clientes impacientes.",
        },
        {
            icon: <FaWhatsapp className="h-8 w-8 text-green" />,
            title: "Contacto Directo",
            description:
                "Botón de WhatsApp integrado para que te contacten al instante.",
        },
        {
            icon: <LuSmartphone className="h-8 w-8 text-blue" />,
            title: "Diseño móvil",
            description:
                "El 80% de tus clientes navega desde celular: tu página se verá impecable.",
        },
        {
            icon: <LuDollarSign className="h-8 w-8 text-cian" />,
            title: "Precio Accesible",
            description:
                "Landing page profesional desde $1,500 (sin costos ocultos).",
        },
    ];

    return (
        <section id="features" className="relative py-16 md:py-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green to-transparent opacity-30"></div>
            <div className="absolute -top-40 right-20 w-80 h-80 bg-purple rounded-full filter blur-[150px] opacity-10"></div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Todo Lo Que Necesitas{" "}
                        <span className="text-green">Para Captar Clientes</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        No solo una página bonita: una herramienta que convierte
                        visitantes en clientes.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-surface p-6 rounded-xl hover:shadow-lg hover:shadow-green/10 transition-all"
                            >
                                <div className="p-3 inline-block rounded-lg mb-4 border border-gray-800">
                                    {feature.icon}
                                </div>
                                <h2 className="text-xl font-semibold mb-3">
                                    {feature.title}
                                </h2>
                                <p className="text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
