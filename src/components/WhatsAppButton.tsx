import { data } from "@/constants/data";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const FloatingWhatsApp = () => {
    const message = "¡Hola! Quiero una página web.";

    const whatsappUrl = `${data.whatsapp}${encodeURIComponent(message)}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-green/80 p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            aria-label="Enviar mensaje en WhatsApp"
        >
            <FaWhatsapp className="text-white md:text-4xl text-xl" />
        </Link>
    );
};
