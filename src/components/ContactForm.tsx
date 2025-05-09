"use client";

import { data } from "@/constants/data";
import Link from "next/link";
import { LuCalendar, LuClock, LuMail, LuPhone } from "react-icons/lu";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export function ContactForm() {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        Swal.fire({
            title: "¿Confirmar envío?",
            showDenyButton: true,
            showCancelButton: true,
            denyButtonColor: "#ff3131",
            confirmButtonColor: "#008cff",
            confirmButtonText: "Sí, enviar",
            denyButtonText: "No, no enviar",
            cancelButtonText: "Cancelar",
            icon: "question",
            background: "#121c27",
            color: "#ffffff",
        }).then((response) => {
            if (response.isConfirmed && form.current) {
                emailjs
                    .sendForm(
                        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                        form.current,
                        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                    )
                    .then(() => {
                        Swal.fire({
                            title: "Tus datos han sido enviados",
                            text: "Te contactaremos pronto",
                            icon: "success",
                            background: "#121c27",
                            color: "#ffffff",
                            confirmButtonColor: "#008cff",
                        });
                        form.current?.reset();
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        Swal.fire("Ocurrió un error", "", "error");
                    });
            } else if (response.isDenied) {
                Swal.fire({
                    title: "No se enviaron tus datos",
                    icon: "warning",
                    background: "#121c27",
                    color: "#ffffff",
                    confirmButtonColor: "#008cff",
                });
            }
        });
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute -top-40 right-20 w-96 h-96 bg-pink rounded-full filter blur-[150px] opacity-10"></div>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ¿Listo Para{" "}
                            <span className="text-pink">Atraer</span> Más
                            Clientes?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Completa el formulario y uno de nuestros expertos te
                            contactará en un plazo de 24 horas para hablar sobre
                            tu proyecto.
                        </p>
                        <div className="space-y-6 mb-8">
                            {[
                                {
                                    icon: (
                                        <LuPhone className="w-5 h-5 text-pink" />
                                    ),
                                    title: "Llámanos",
                                    detail: data.telefono,
                                },
                                {
                                    icon: (
                                        <LuMail className="w-5 h-5 text-green" />
                                    ),
                                    title: "Envíanos un correo",
                                    detail: data.correo,
                                },
                                {
                                    icon: (
                                        <LuClock className="w-5 h-5 text-yellow" />
                                    ),
                                    title: "Horario de atención",
                                    detail: "Lunes a Viernes: 2:00 PM - 9:00 PM CST Sábados: 10:00 AM - 9:00 PM CST",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="bg-surface p-3 rounded-lg mr-4">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-surface p-6 rounded-xl border border-gray-800">
                            <div className="flex items-center mb-4">
                                <LuCalendar className="w-5 h-5 text-blue mr-3" />
                                <h4 className="font-semibold">
                                    ¿Prefieres agendar directamente?
                                </h4>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Reserva una consulta de 30 minutos con uno de
                                nuestros expertos.
                            </p>
                            <Link
                                href={`${data.calendly}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue text-white py-3 w-full flex justify-center rounded-full font-medium transition-all hover:shadow-lg shadow-blue/50"
                            >
                                Agendar Una Llamada
                            </Link>
                        </div>
                    </div>
                    <div className="bg-surface p-8 rounded-xl border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-green rounded-full filter blur-[80px] opacity-10"></div>
                        <h3 className="text-2xl font-bold mb-6">Contáctanos</h3>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2 text-gray-400"
                                    >
                                        Nombre Completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-dark border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                                        placeholder="Rick Sánchez"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2 text-gray-400"
                                    >
                                        Correo Electrónico *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-dark border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                                        placeholder="rick@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium mb-2 text-gray-400"
                                >
                                    Nombre de Empresa o Negocio *
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full bg-dark border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                                    placeholder="Tu negocio"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="project"
                                    className="block text-sm font-medium mb-2 text-gray-400"
                                >
                                    Detalles del Proyecto *
                                </label>
                                <textarea
                                    id="project"
                                    name="project"
                                    rows={5}
                                    className="w-full bg-dark border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                                    placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2 text-gray-400">
                                    Presupuesto
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {[
                                        "$1K - $2K MXN",
                                        "$2K - $5K MXN",
                                        "$5K - $10K MXN",
                                        "$10K+ MXN",
                                    ].map((budget, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <input
                                                type="radio"
                                                id={`budget-${index}`}
                                                name="budget"
                                                value={budget}
                                                className="hidden peer"
                                            />
                                            <label
                                                htmlFor={`budget-${index}`}
                                                className="w-full text-center bg-dark border border-gray-800 rounded-lg px-3 py-2 cursor-pointer peer-checked:border-green peer-checked:text-green hover:bg-surface transition-colors"
                                            >
                                                {budget}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red text-white py-3 rounded-full font-medium transition-all hover:shadow-lg shadow-red/50"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
