import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "J&Y Web Studio | Páginas Web Profesionales para PYMES",
    description:
        "Diseñamos landing pages modernas, rápidas y optimizadas para pequeñas y medianas empresas. Aumenta tu presencia en línea y consigue más clientes con J&Y Web Studio.",
    keywords:
        "páginas web para empresas, diseño web profesional, landing pages, sitios web para pymes, diseño web moderno, páginas web económicas, J&Y Web Studio",
    openGraph: {
        title: "J&Y Web Studio | Diseño Web Profesional para tu Negocio",
        description:
            "Creamos páginas web efectivas y a medida para pequeñas empresas. Tu negocio merece presencia digital de calidad. ¡Conócenos!",
        url: "https://jywebstudio.vercel.app",
        siteName: "J&Y Web Studio",
        type: "website",
        images: [
            {
                url: "https://jywebstudio.vercel.app/jyweb-og-image.png",
                width: 1200,
                height: 630,
                alt: "J&Y Web Studio - Diseño Web Profesional",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${quicksand.className} antialiased`}>
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
