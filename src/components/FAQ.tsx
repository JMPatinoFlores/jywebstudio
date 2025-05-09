"use client";

import { data } from "@/constants/data";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuChevronDown } from "react-icons/lu";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const message =
        "¡Hola! Quiero una página web pero quisiera aclarar algunas dudas.";
    const faqs = [
        {
            category: "Proceso de Desarrollo",
            questions: [
                {
                    question:
                        "¿Cuál es el proceso de desarrollo de una landing page?",
                    answer: "Nuestro proceso incluye 4 fases: 1) Consulta y planificación inicial, 2) Diseño y aprobación, 3) Desarrollo y programación, 4) Pruebas y lanzamiento. Mantenemos una comunicación constante durante todo el proceso.",
                },
                {
                    question:
                        "¿Cuánto tiempo toma desarrollar una landing page?",
                    answer: "El tiempo de desarrollo varía según el paquete elegido: 1-2 días hábiles para el paquete 'presencia express', 3-5 días para el 'presencia estratégica', y 7-10 días para el 'presencia profesional'. Estos plazos comienzan después de recibir todos los materiales necesarios.",
                },
                {
                    question: "¿Qué necesito proporcionar para comenzar?",
                    answer: "Necesitaremos tu contenido (textos, imágenes, logo), preferencias de diseño, y cualquier material de marca existente. También es útil tener ejemplos de sitios que te gusten como referencia.",
                },
            ],
        },
        {
            category: "Características y Tecnología",
            questions: [
                {
                    question: "¿Las landing pages son responsivas?",
                    answer: "Sí, todas nuestras landing pages son 100% responsivas y se adaptan perfectamente a todos los dispositivos: computadoras, tablets y móviles.",
                },
                {
                    question: "¿Puedo actualizar el contenido por mi cuenta?",
                    answer: "Dependiendo del paquete elegido, podemos implementar un sistema de gestión de contenido sencillo. También ofrecemos capacitación para que puedas realizar actualizaciones básicas.",
                },
                {
                    question: "¿Qué tecnologías utilizan?",
                    answer: "Utilizamos tecnologías modernas y optimizadas como Next.js y Tailwind CSS, e integraciones modernas, asegurando un rendimiento óptimo y tiempos de carga rápidos.",
                },
            ],
        },
        {
            category: "Precios y Pagos",
            questions: [
                {
                    question: "¿Qué formas de pago aceptan?",
                    answer: "Aceptamos transferencias bancarias, tarjetas de crédito/débito y PayPal. Típicamente requerimos un 50% de anticipo para comenzar y el resto al finalizar el proyecto.",
                },
                {
                    question: "¿Hay costos adicionales?",
                    answer: "Los precios de los paquetes incluyen todo lo especificado. Características adicionales, como integraciones especiales o funcionalidades personalizadas, se cotizarán por separado.",
                },
                {
                    question: "¿Ofrecen garantía?",
                    answer: "Sí, ofrecemos una garantía de satisfacción. Si no estás conforme con el resultado, trabajaremos en revisiones hasta que el proyecto cumpla con tus expectativas dentro de los términos acordados.",
                },
            ],
        },
        {
            category: "Soporte y Mantenimiento",
            questions: [
                {
                    question: "¿Qué incluye el soporte post-entrega?",
                    answer: "Incluimos un período de soporte gratuito después de la entrega (varía según el paquete) para ajustes menores. También ofrecemos planes de mantenimiento semanal opcionales.",
                },
                {
                    question: "¿Puedo solicitar cambios después de la entrega?",
                    answer: "Sí, puedes solicitar cambios después de la entrega. Los cambios menores durante el período de garantía son gratuitos, y para modificaciones mayores proporcionamos tarifas competitivas.",
                },
                {
                    question: "¿Ofrecen hosting y dominio?",
                    answer: "El hosting es gratuito con Vercel. Podemos asesorarte en la selección y configuración de dominio o si quieres otro proveedor de hosting. También ofrecemos recomendaciones de proveedores confiables según tus necesidades.",
                },
            ],
        },
    ];
    return (
        <section id="faq" className="py-20 relative">
            <div className="absolute -top-40 left-0 w-96 h-96 bg-[#c0fd3d] rounded-full filter blur-[150px] opacity-10"></div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Preguntas{" "}
                        <span className="text-[#c0fd3d]">Frecuentes</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Encuentra respuestas a las preguntas más comunes sobre
                        nuestros servicios de desarrollo de landing pages.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4">
                            <h3 className="text-xl font-bold mb-6 text-[#008cff]">
                                {category.category}
                            </h3>
                            {category.questions.map((faq, index) => {
                                const actualIndex = categoryIndex * 100 + index; // Unique index for each question
                                const isOpen = openIndex === actualIndex;
                                return (
                                    <div
                                        key={index}
                                        className="bg-[#121c27] rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
                                    >
                                        <button
                                            onClick={() =>
                                                setOpenIndex(
                                                    isOpen ? null : actualIndex
                                                )
                                            }
                                            className="w-full px-6 py-4 flex items-center justify-between text-left"
                                        >
                                            <span className="font-medium">
                                                {faq.question}
                                            </span>
                                            <LuChevronDown
                                                className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                                                    isOpen
                                                        ? "transform rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                        <div
                                            className={`px-6 transition-all duration-200 ease-in-out ${
                                                isOpen
                                                    ? "pb-4 opacity-100"
                                                    : "h-0 opacity-0 overflow-hidden"
                                            }`}
                                        >
                                            <p className="text-gray-400">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center flex items-center flex-col justify-center">
                    <p className="text-gray-400 mb-6">
                        ¿No encuentras la respuesta que buscas?
                    </p>
                    <Link
                        href={`${data.whatsapp}${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border border-green text-[#c0fd3d] hover:bg-green hover:text-[#030712] px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center space-x-2 hover:shadow-lg shadow-green/50"
                    >
                        <p>Contáctanos</p>
                        <FaWhatsapp />
                    </Link>
                </div>
            </div>
        </section>
    );
}
