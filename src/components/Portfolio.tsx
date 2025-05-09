import { demos } from "@/constants/demos";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 relative">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ff3131] rounded-full filter blur-[150px] opacity-10"></div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Nuestras{" "}
                        <span className="text-cian">Demos Destacadas</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Estas demos están pensadas para inspirarte y mostrarte
                        lo que podemos construir juntos, sin importar en qué
                        etapa esté tu negocio.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {demos.map((demo, index) => (
                        <div
                            key={index}
                            className="bg-surface rounded-2xl pr-2"
                        >
                            <Image
                                src={demo.image}
                                alt={demo.description}
                                width={500}
                                height={500}
                            />
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {demo.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full"
                                            style={{
                                                backgroundColor: `${demo.color}15`,
                                                color: demo.color,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    {demo.title}
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    {demo.description}
                                </p>
                                <Link
                                    href={demo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                                    style={{
                                        backgroundColor: "transparent",
                                        color: demo.color,
                                        border: `1px solid ${demo.color}`,
                                    }}
                                >
                                    {" "}
                                    <p>Ver Demo</p>
                                    <LuArrowUpRight size={22} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
