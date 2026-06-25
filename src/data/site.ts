// =============================================================
// ⚙️  CONFIGURACIÓN DEL SITIO  —  EDITA SOLO ESTO
// (ex-bloque CONFIG del index.html, ahora tipado)
// =============================================================

export interface Video {
  url?: string;
  src?: string;
  poster?: string;
  titulo: { es: string; en: string };
}

export interface SiteConfig {
  whatsapp: string;
  instagram: string;
  horarios: Record<string, string[]>;
  videos: Video[];
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
    { url: "https://www.instagram.com/reel/DZaTcGiRsH6/", titulo: { es: "Baby signs", en: "Baby signs" } },
    { url: "https://www.instagram.com/reel/DXUhW6WEVcv/", titulo: { es: "Ejercicios para respiradores orales", en: "Exercises for mouth breathers" } },
    { url: "https://www.instagram.com/reel/DWHm2kiD2nC/", titulo: { es: "Consejos", en: "Tips" } },
  ],
};

// Helpers de WhatsApp / enlaces base
export const waBase = `https://wa.me/${site.whatsapp}`;
export const waMsg = (txt: string) => `${waBase}?text=${encodeURIComponent(txt)}`;
export const igUrl = `https://instagram.com/${site.instagram}`;
