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
            icon: LuRocket,
            title: "Carga Rápida",
            description:
                "El código optimizado garantiza que tu página de destino se cargue rápidamente.",
        },
        {
            icon: LuSmartphone,
            title: "100% Responsive",
            description:
                "Se ve perfectas en cualquier dispositivo, desde computadoras hasta smartphones.",
        },
        {
            icon: LuHandshake,
            title: "Atracción efectiva",
            description:
                "Diseño estratégico que guía a los visitantes hacia tu objetivo principal.",
        },
        {
            icon: LuPlugZap,
            title: "Integraciones Modernas",
            description:
                "Conecta herramientas como WhatsApp, formularios de contacto, Google Maps y más.",
        },
        {
            icon: LuPenTool,
            title: "Diseño personalizado",
            description:
                "Diseñado para adaptarse a tu identidad de marca y objetivos de negocio.",
        },
        {
            icon: LuShieldCheck,
            title: "SEO Optimizado",
            description:
                "Estructura pensada para mejorar tu posicionamiento en buscadores.",
        },
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-center mb-6">
                        Todo lo que Necesitas para una Página de Alta Calidad
                    </h2>
                    <p className="text-xl text-gray-600">
                        Nuestras páginas están diseñadas con estrategias
                        probadas para atraer visitantes e impulsar la acción.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 border border-[#f4d47a] rounded-2xl"
                            >
                                <div className="text-white bg-gold rounded-full p-3 text-4xl h-14 w-14 flex items-center justify-center mb-4">
                                    <Icon />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">
                                    {feature.title}
                                </h2>
                                <p className="text-gray-600">
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
