import {
    LuHandshake,
    LuPenTool,
    LuPlugZap,
    LuRocket,
    LuShieldCheck,
    LuSmartphone,
} from "react-icons/lu";

export default function Features() {
    const features = [
        {
            icon: <LuRocket className="h-8 w-8 text-yellow" />,
            title: "Carga Rápida",
            description:
                "El código optimizado garantiza que tu página de destino se cargue rápidamente.",
        },
        {
            icon: <LuSmartphone className="h-8 w-8 text-blue" />,
            title: "100% Responsive",
            description:
                "Se ve perfectas en cualquier dispositivo, desde computadoras hasta smartphones.",
        },
        {
            icon: <LuHandshake className="h-8 w-8 text-pink" />,
            title: "Atracción efectiva",
            description:
                "Diseño estratégico que guía a los visitantes hacia tu objetivo principal.",
        },
        {
            icon: <LuPlugZap className="h-8 w-8 text-green" />,
            title: "Integraciones Modernas",
            description:
                "Conecta herramientas como WhatsApp, formularios de contacto, Google Maps y más.",
        },
        {
            icon: <LuPenTool className="h-8 w-8 text-cian" />,
            title: "Diseño personalizado",
            description:
                "Diseñado para adaptarse a tu identidad de marca y objetivos de negocio.",
        },
        {
            icon: <LuShieldCheck className="h-8 w-8 text-orange" />,
            title: "SEO Optimizado",
            description:
                "Estructura pensada para mejorar tu posicionamiento en buscadores.",
        },
    ];

    return (
        <section id="features" className="relative py-16 md:py-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green to-transparent opacity-30"></div>
            <div className="absolute -top-40 right-20 w-80 h-80 bg-purple rounded-full filter blur-[150px] opacity-10"></div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Todo Lo Que Necesitas Para{" "}
                        <span className="text-green">
                            Una Página De Alta Calidad
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        Nuestras páginas están diseñadas con estrategias
                        probadas para atraer visitantes e impulsar la acción.
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
