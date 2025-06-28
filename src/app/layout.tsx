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
    title: "J&Y Web Studio | Páginas Web Profesionales para PYMES y Emprendedores",
    description:
        "Creamos tu página web profesional desde $1,500 - Atrae clientes, muestra tus servicios y aumenta tu presencia online. Diseño rápido, moderno y sin complicaciones.",
    keywords: [
        "páginas web económicas",
        "diseño web para negocios",
        "crear página web profesional",
        "sitio web para pymes",
        "presencia online",
        "página web emprendedores",
        "diseño web rápido",
        "páginas web en México",
        "landing page para negocios",
        "J&Y Web Studio",
    ],
    metadataBase: new URL("https://www.jywebstudio.com"),
    openGraph: {
        title: "Tu Página Web Profesional Lista en 7 Días | J&Y Web Studio",
        description:
            "Diseñamos páginas web efectivas para que tu negocio destaque en internet. Sin mensualidades ni complicaciones técnicas. ¡Cotiza hoy!",
        url: "https://www.jywebstudio.com",
        siteName: "J&Y Web Studio",
        type: "website",
        images: [
            {
                url: "https://www.jywebstudio.com/jyweb-og-image.png",
                width: 1200,
                height: 630,
                alt: "Ejemplo de página web profesional para negocios - J&Y Web Studio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Páginas Web Profesionales Desde $1,500 | J&Y Web Studio",
        description:
            "Diseño web rápido y económico para PYMES. Atrae más clientes con una presencia online profesional.",
        images: ["https://www.jywebstudio.com/jyweb-twitter-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "J&Y Web Studio",
        image: "https://www.jywebstudio.com/logo.png",
        description:
            "Desarrollo de páginas web profesionales para pequeñas empresas y emprendedores",
        telephone: "+525652147607",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Trabajo remoto",
            addressCountry: "MX",
        },
        email: "jywebstudio@hotmail.com",
        serviceType: "Desarrollo web para PYMES",
        offers: [
            {
                "@type": "Service",
                name: "Landing Page Express",
                price: "1500",
                priceCurrency: "MXN",
                description:
                    "Página web de una sección con diseño móvil y SEO básico",
                deliveryLeadTime: "P1D",
            },
            {
                "@type": "Service",
                name: "Landing Page Básica",
                price: "3500",
                priceCurrency: "MXN",
                description:
                    "Página web de 4 secciones con galería visual y diseño optimizado",
                deliveryLeadTime: "P3D",
            },
            {
                "@type": "Service",
                name: "Landing Page Profesional",
                price: "5800",
                priceCurrency: "MXN",
                description:
                    "Página web de 6 secciones con mejora visual personalizada, animaciones y SEO optimizado",
                deliveryLeadTime: "P7D",
            },
        ],
        areaServed: ["México", "América Latina"],
        availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: "https://www.jywebstudio.com",
        },
    };
    return (
        <html lang="es">
            <head>
                <link rel="canonical" href="https://www.jywebstudio.com/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                    }}
                />
            </head>
            <body className={`${quicksand.className} antialiased`}>
                <Navbar />
                <main className="flex-1 pt-24 md:pt-0">{children}</main>
                <Footer />
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
