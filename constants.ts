import React from 'react';
import type { Service, Product, ContactInfo, SocialLink } from './types';
import { CameraIcon, SparklesIcon, PaintBrushIcon, CubeTransparentIcon, MapPinIcon, ClockIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon } from './components/icons/FeatureIcons';
import { WhatsAppIcon } from './components/icons/SocialIcons';
import { InstagramIcon, GlobeIcon } from './components/icons/SocialIcons';

export const ABOUT_US_TEXT = "Somos una empresa especializada en servicios creativos y artísticos que combina expresión visual, arte corporal y productos personalizados de alta calidad. Nuestro enfoque integral nos permite ofrecer soluciones creativas completas para nuestros clientes.";

export const SERVICES_DATA: Service[] = [
  {
    title: "PRODUCCIÓN AUDIOVISUAL",
    icon: CameraIcon,
    imageUrl: "https://images.unsplash.com/photo-1574717547378-575b7454a424?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Filmación profesional para eventos, comerciales y proyectos artísticos.",
      "Fotografía comercial, artística y de retrato.",
      "Cobertura completa de eventos especiales.",
      "Post-producción y edición.",
    ],
  },
  {
    title: "ARTE CORPORAL",
    icon: PaintBrushIcon,
    imageUrl: "https://images.unsplash.com/photo-1622227945628-9d8f71842e4d?q=80&w=1974&auto=format&fit=crop",
    items: [
      "Tatuajes personalizados con diseños únicos.",
      "Consultoría artística y desarrollo de conceptos.",
      "Técnicas profesionales con altos estándares de seguridad e higiene.",
      "Seguimiento post-procedimiento incluido.",
    ],
  },
  {
    title: "PRODUCTOS PERSONALIZADOS",
    icon: SparklesIcon,
    imageUrl: "https://images.unsplash.com/photo-1593030103050-435a64528d7b?q=80&w=2070&auto=format&fit=crop",
    items: [
      "Diseños gráficos exclusivos para marcas y particulares.",
      "Ropa personalizada con bordado y estampado premium.",
      "Grillz artesanales con diseños únicos y materiales de calidad.",
      "Cuadros en Oleo.",
    ],
  },
];

export const AVAILABLE_PRODUCTS: Product[] = [
    { name: "GRILLZ", icon: SparklesIcon },
    { name: "CUADROS EN OLEO", icon: PaintBrushIcon },
    { name: "ROPA", icon: CubeTransparentIcon },
];

export const CONTACT_INFO: ContactInfo[] = [
    { type: 'location', value: 'BOGOTA D.C', icon: MapPinIcon },
    { type: 'hours', value: '24 Horas', icon: ClockIcon },
    { type: 'whatsapp', value: '3046199264', href: 'https://wa.me/573046199264', icon: WhatsAppIcon },
    { type: 'email', value: 'gabriel0130leuro@gmail.com', href: 'mailto:gabriel0130leuro@gmail.com', icon: EnvelopeIcon },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Instagram', href: 'https://www.instagram.com/expansssion?utm_source=ig_web_button_share_sheet&igsh=MTh2MjgwOHU5dmVsdA==', icon: InstagramIcon },
    { name: 'Portfolio', href: 'https://sites.google.com/view/expansssion/home', icon: GlobeIcon }
];

export const QUOTE_PROCESS = {
    title: "PROCESO DE COTIZACIÓN",
    description: "Para obtener una cotización personalizada, contáctanos con:",
    steps: [
        "Descripción detallada del proyecto.",
        "Fechas tentativas.",
        "Presupuesto aproximado.",
        "Referencias visuales (si aplica).",
    ],
    footer: "Respondemos todas las consultas en un máximo de 24 horas."
};