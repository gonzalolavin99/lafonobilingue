// =============================================================
// 📄 CONTENIDO DE LAS PÁGINAS "ÁREAS" Y "PRECIOS"  (bilingüe)
// Edita aquí los textos, áreas y valores.
// ⚠️ PRECIOS: son valores REFERENCIALES de ejemplo. Reemplázalos
//    por los reales antes de publicar en producción.
// =============================================================
import type { Lang } from '../i18n/ui';

type Bi = Record<Lang, string>;
type BiList = Record<Lang, string[]>;

export interface AreaItem {
  ico: string;
  titulo: Bi;
  desc: Bi;
  publico: Bi; // a quién va dirigido
}

export interface PlanItem {
  nombre: Bi;
  precio: string;   // ⚠️ valor referencial — edítalo
  periodo: Bi;
  detalle: Bi;
  incluye: BiList;
  destacado?: boolean;
}

// ---------- ÁREAS QUE TRATA ----------
export const areas: AreaItem[] = [
  {
    ico: '🗣️',
    titulo: { es: 'Desarrollo del lenguaje', en: 'Language development' },
    desc: {
      es: 'Estimulación y terapia para niñas y niños con retraso o trastorno del lenguaje: comprensión, vocabulario, gramática y uso social del lenguaje.',
      en: 'Stimulation and therapy for children with language delay or disorder: comprehension, vocabulary, grammar and social use of language.',
    },
    publico: { es: 'Niñas y niños', en: 'Children' },
  },
  {
    ico: '👅',
    titulo: { es: 'Motricidad orofacial y terapia miofuncional', en: 'Orofacial motricity & myofunctional therapy' },
    desc: {
      es: 'Trabajo de la musculatura de la cara, labios y lengua para mejorar el habla, la masticación y el equilibrio orofacial.',
      en: 'Work on the muscles of the face, lips and tongue to improve speech, chewing and orofacial balance.',
    },
    publico: { es: 'Niños y adultos', en: 'Kids & adults' },
  },
  {
    ico: '🍽️',
    titulo: { es: 'Deglución y alimentación', en: 'Swallowing & feeding' },
    desc: {
      es: 'Evaluación e intervención de dificultades para tragar y de la alimentación, en distintas etapas de la vida.',
      en: 'Assessment and intervention for swallowing and feeding difficulties, across different life stages.',
    },
    publico: { es: 'Niños y adultos', en: 'Kids & adults' },
  },
  {
    ico: '👄',
    titulo: { es: 'Frenillo lingual y respiración oral', en: 'Tongue-tie & mouth breathing' },
    desc: {
      es: 'Abordaje de frenillo lingual corto y de hábitos de respiración oral, con ejercicios para una función adecuada.',
      en: 'Management of short lingual frenulum and mouth-breathing habits, with exercises for proper function.',
    },
    publico: { es: 'Niños y adultos', en: 'Kids & adults' },
  },
  {
    ico: '📖',
    titulo: { es: 'Dislexia y lectoescritura', en: 'Dyslexia & literacy' },
    desc: {
      es: 'Apoyo en dificultades de lectura y escritura, fortaleciendo conciencia fonológica y comprensión.',
      en: 'Support for reading and writing difficulties, strengthening phonological awareness and comprehension.',
    },
    publico: { es: 'Niñas y niños', en: 'Children' },
  },
  {
    ico: '🧸',
    titulo: { es: 'Estimulación temprana', en: 'Early stimulation' },
    desc: {
      es: 'Acompañamiento del desarrollo comunicativo en los primeros años, con juego y participación de la familia.',
      en: 'Support for communicative development in the early years, through play and family involvement.',
    },
    publico: { es: 'Primera infancia', en: 'Early childhood' },
  },
  {
    ico: '🧠',
    titulo: { es: 'Lenguaje y habla en adultos', en: 'Adult language & speech' },
    desc: {
      es: 'Rehabilitación de lenguaje y habla de origen neurológico, como afasia o disartria (por ejemplo, tras un ACV).',
      en: 'Rehabilitation of neurological language and speech, such as aphasia or dysarthria (for example, after a stroke).',
    },
    publico: { es: 'Adultos', en: 'Adults' },
  },
  {
    ico: '🌎',
    titulo: { es: 'Pronunciación en inglés', en: 'English pronunciation' },
    desc: {
      es: 'Trabajo de pronunciación y claridad en inglés, ideal para quienes estudian, trabajan o viven en contextos bilingües.',
      en: 'Work on pronunciation and clarity in English, ideal for those who study, work or live in bilingual contexts.',
    },
    publico: { es: 'Jóvenes y adultos', en: 'Teens & adults' },
  },
];

// ---------- PRECIOS (valores referenciales — EDITAR) ----------
export const planes: PlanItem[] = [
  {
    nombre: { es: 'Evaluación inicial', en: 'Initial assessment' },
    precio: '$35.000',
    periodo: { es: 'sesión única', en: 'single session' },
    detalle: {
      es: 'Primera sesión para conocernos, evaluar y definir un plan a tu medida.',
      en: 'First session to get to know each other, assess and define a tailored plan.',
    },
    incluye: {
      es: ['Anamnesis y evaluación', 'Plan de objetivos', 'Recomendaciones iniciales'],
      en: ['History & assessment', 'Goal plan', 'Initial recommendations'],
    },
  },
  {
    nombre: { es: 'Sesión individual', en: 'Individual session' },
    precio: '$30.000',
    periodo: { es: 'por sesión', en: 'per session' },
    detalle: {
      es: 'Sesión de terapia de ~45 min, presencial u online, con material personalizado.',
      en: '~45 min therapy session, in person or online, with personalized materials.',
    },
    incluye: {
      es: ['45 min de terapia', 'Material personalizado', 'Pauta para la casa'],
      en: ['45 min of therapy', 'Personalized materials', 'Home practice guide'],
    },
    destacado: true,
  },
  {
    nombre: { es: 'Plan mensual', en: 'Monthly plan' },
    precio: '$108.000',
    periodo: { es: '4 sesiones / mes', en: '4 sessions / month' },
    detalle: {
      es: 'Cuatro sesiones al mes con seguimiento continuo. Mejor valor para avances sostenidos.',
      en: 'Four sessions per month with continuous follow-up. Best value for steady progress.',
    },
    incluye: {
      es: ['4 sesiones de terapia', 'Seguimiento de avances', 'Coordinación con la familia'],
      en: ['4 therapy sessions', 'Progress tracking', 'Coordination with the family'],
    },
  },
];

// ---------- TEXTOS DE CADA PÁGINA ----------
export const areasPage = {
  eyebrow: { es: 'En qué te puedo ayudar', en: 'How I can help' },
  title: { es: 'Áreas que trato', en: 'Areas I work with' },
  lead: {
    es: 'Atiendo principalmente a niñas y niños, y también a adultos, en español e inglés. Estas son las áreas en las que te puedo acompañar.',
    en: 'I mainly see children, and also adults, in Spanish and English. These are the areas where I can support you.',
  },
  publicoLabel: { es: 'Para', en: 'For' },
  cta: { es: '¿Tu caso encaja aquí? Conversemos', en: 'Does your case fit here? Let\'s talk' },
  ctaBtn: { es: '💬 Escríbeme por WhatsApp', en: '💬 Message me on WhatsApp' },
};

export const preciosPage = {
  eyebrow: { es: 'Inversión', en: 'Investment' },
  title: { es: 'Precios', en: 'Pricing' },
  lead: {
    es: 'Planes pensados para acompañarte según tus necesidades. Los valores son referenciales; confirmamos todo por WhatsApp.',
    en: 'Plans designed to support you according to your needs. Prices are referential; we confirm everything via WhatsApp.',
  },
  popular: { es: 'Más elegido', en: 'Most chosen' },
  incluyeLabel: { es: 'Incluye', en: 'Includes' },
  ctaBtn: { es: '💬 Agendar por WhatsApp', en: '💬 Book via WhatsApp' },
  nota: {
    es: 'Emito boleta de honorarios para reembolso en Isapre o seguro complementario, según tu plan. ¿Dudas sobre valores o convenios? Escríbeme.',
    en: 'I issue a professional invoice for reimbursement with your health insurer, depending on your plan. Questions about prices? Message me.',
  },
};
