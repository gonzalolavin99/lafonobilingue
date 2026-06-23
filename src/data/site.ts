// =============================================================
// ⚙️  CONFIGURACIÓN DEL SITIO  —  EDITA SOLO ESTO
// (ex-bloque CONFIG del index.html, ahora tipado)
// =============================================================

export interface Paso {
  titulo: string;
  texto: string;
}

export interface Video {
  url?: string;
  src?: string;
  poster?: string;
  titulo: string;
}

export interface SiteConfig {
  whatsapp: string;
  instagram: string;
  horarios: Record<string, string[]>;
  videos: Video[];
  pasos: Paso[];
}

export const site: SiteConfig = {
  // 📱 WhatsApp en formato internacional, SIN +, espacios ni guiones. Ej Chile: 56912345678
  whatsapp: "56998844138",

  // 📸 Usuario de Instagram (sin @)
  instagram: "flga.franvadiaz",

  // 🗓️ Horarios de atención (deja [] en un día para marcarlo como cerrado)
  horarios: {
    "Lunes":     ["13:00 – 14:00", "15:00 – 17:00"],
    "Martes":    ["13:00 – 14:00", "15:00 – 17:00"],
    "Miércoles": ["12:00 – 13:00", "15:00 – 18:00"],
    "Jueves":    ["09:00 – 13:00", "15:00 – 19:00"],
    "Viernes":   ["13:00 – 18:00"],
    "Sábado":    ["08:00 – 10:00"],
    "Domingo":   [],
  },

  // 🎬 Videos. Dos formas (puedes mezclarlas):
  //   1) Video propio: { src: "/videos/baby-signs.mp4", poster: "/videos/baby-signs.jpg", titulo: "Baby signs" }
  //   2) Instagram:    { url: "https://www.instagram.com/reel/CXXXXXX/", titulo: "..." }
  videos: [
    { url: "https://www.instagram.com/reel/DZaTcGiRsH6/", titulo: "Baby signs" },
    { url: "https://www.instagram.com/reel/DXUhW6WEVcv/", titulo: "Ejercicios para respiradores orales" },
    { url: "https://www.instagram.com/reel/DWHm2kiD2nC/", titulo: "Consejos" },
  ],

  // 🪜 Pasos de "Cómo funciona"
  pasos: [
    { titulo: "Me escribes",        texto: "Me cuentas por WhatsApp qué necesitas. Sin compromiso y resuelvo tus primeras dudas." },
    { titulo: "Evaluación inicial", texto: "Nos conocemos y evalúo el lenguaje, el habla y la comunicación para saber desde dónde partimos." },
    { titulo: "Plan personalizado", texto: "Diseño un plan a la medida, con objetivos claros y realistas para tu familia." },
    { titulo: "Sesiones",           texto: "Trabajamos juntos sesión a sesión, lúdico y cercano, y vamos viendo los avances." },
  ],
};

// Helpers de WhatsApp (equivalentes a waBase / waMsg del index.html)
export const saludo = "¡Hola Fran! 👋 Vi tu página web y me gustaría agendar una sesión.";
export const waBase = `https://wa.me/${site.whatsapp}`;
export const waMsg = (txt: string) => `${waBase}?text=${encodeURIComponent(txt)}`;
export const igUrl = `https://instagram.com/${site.instagram}`;
