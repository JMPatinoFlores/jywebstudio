export const data = {
    nombre: process.env.NEXT_PUBLIC_CLIENT_NAME,
    empresa: process.env.NEXT_PUBLIC_CLIENT_BRAND,
    logo: process.env.NEXT_PUBLIC_CLIENT_LOGO,
    direccion: process.env.NEXT_PUBLIC_CLIENT_DIRECTION,
    mapa: process.env.NEXT_PUBLIC_CLIENT_MAP,
    telefono: process.env.NEXT_PUBLIC_CLIENT_PHONE,
    correo: process.env.NEXT_PUBLIC_CLIENT_MAIL,
    redes: {
        facebook: process.env.NEXT_PUBLIC_CLIENT_FACEBOOK,
        twitter: process.env.NEXT_PUBLIC_CLIENT_TWITTER,
        instagram: process.env.NEXT_PUBLIC_CLIENT_INSTAGRAM,
        tiktok: process.env.NEXT_PUBLIC_CLIENT_TIKTOK,
    },
    whatsapp: process.env.NEXT_PUBLIC_CLIENT_WHATSAPP,
    calendly: process.env.NEXT_PUBLIC_CLIENT_CALENDLY,
};
