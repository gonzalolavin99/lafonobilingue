import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Testimonios y FAQ como datos tipados (Content Layer API de Astro 5).
// Cada item del .json tiene un "id" único; el resto lo valida este esquema Zod.
const bilingue = z.object({ es: z.string(), en: z.string() });

const testimonios = defineCollection({
  loader: file('src/content/testimonios.json'),
  schema: z.object({
    texto: bilingue,
    autor: bilingue,
  }),
});

const faq = defineCollection({
  loader: file('src/content/faq.json'),
  schema: z.object({
    orden: z.number(),
    pregunta: bilingue,
    respuesta: bilingue,
  }),
});

export const collections = { testimonios, faq };
