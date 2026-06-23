# 🌸 La fono bilingüe — Sitio web de Francisca Valenzuela

Landing page de **Francisca Valenzuela Díaz**, fonoaudióloga bilingüe (español–inglés).
Pensada para el bio de Instagram: que la gente la conozca, vea sus horarios, sus videos
y agende directo por WhatsApp.

🔗 **En vivo:** https://lafonobilingue.vercel.app
📸 **Instagram:** [@flga.franvadiaz](https://instagram.com/flga.franvadiaz)

---

## 🧩 Cómo está hecho (importante)

> **Rama `astro-migration`:** el sitio se migró a **[Astro](https://astro.build)**.
> La versión estática original quedó como referencia en `docs/index-original.html`.

Ahora es un proyecto **Astro**: componentes `.astro`, datos tipados y cero (casi) JS en
el navegador. El sitio sigue viéndose idéntico.

**Comandos:**

```bash
npm install        # instala dependencias (una vez)
npm run dev        # servidor local en http://localhost:4321
npm run build      # genera el sitio estático en dist/
npm run preview    # previsualiza el build de producción
```

**Dónde editar el contenido:**

- Textos generales, **WhatsApp, Instagram, horarios, pasos y videos** → `src/data/site.ts`
  (es el ex-bloque `CONFIG`, ahora tipado).
- **Testimonios** → `src/content/testimonios.json`
- **FAQ** → `src/content/faq.json`
- **Estructura/diseño** → componentes en `src/components/` y estilos en `src/styles/global.css`.

---

## 📁 Archivos

| Ruta | Qué es |
|---|---|
| `src/pages/index.astro` | Página principal: ensambla los componentes |
| `src/layouts/Base.astro` | `<head>`, fuentes y SEO/Open Graph |
| `src/components/` | Cada sección (Hero, Modalidades, FAQ, …) |
| `src/data/site.ts` | Ex-`CONFIG`: WhatsApp, Instagram, horarios, pasos, videos |
| `src/content/faq.json` · `testimonios.json` | Contenido tipado (Content Collections) |
| `src/content.config.ts` | Esquemas Zod de las colecciones |
| `src/assets/fran.jpg` | Foto optimizada con `<Image>` |
| `src/styles/global.css` | Todos los estilos del sitio |
| `public/` | `favicon.svg`, `og.png`, `decoracion.jpg` (se sirven tal cual) |
| `tools/make_og.py` | Script para regenerar `og.png` (Python + Pillow) |
| `docs/PLAN-MIGRACION-ASTRO.md` | Plan completo de la migración |
| `docs/index-original.html` | Versión estática original (referencia) |

---

## 🚀 Deploy (Vercel)

El proyecto está en Vercel (cuenta de Gonzalo), nombre de proyecto **`lafonobilingue`**.
Vercel **detecta Astro solo** (build `astro build`, output `dist/`).

Flujo seguro con ramas:

- Cada push a la rama `astro-migration` genera una **preview URL** automática en Vercel
  para probar sin tocar producción.
- `lafonobilingue.vercel.app` (prod) sigue sirviendo `main` hasta que hagamos el merge.
- Cuando la preview esté 100% ✅ → merge a `main` → Vercel publica Astro en prod.

La URL pública `lafonobilingue.vercel.app` se mantiene siempre igual.

---

## ✅ Lo que YA está hecho

- [x] Diseño completo: paleta celeste/rosado pastel, elegante con toque Gen Z, responsive.
- [x] Secciones: Hero, Modalidades (domicilio / consulta / videollamada), Sobre mí,
      Banner de marca, Horarios, Videos, Agendar, Footer.
- [x] Info real de Francisca (nombre, formación UNAB, especialidades, bio).
- [x] Fotos reales de ella (perfil + decoración).
- [x] **Agendamiento por WhatsApp**: el formulario arma el mensaje y abre WhatsApp con
      todos los datos → a Francisca le llega la notificación al instante.
- [x] **Horarios reales** cargados (Lun–Sáb; Domingo cerrado).
- [x] **3 reels de Instagram** embebidos (Baby signs · Respiradores orales · Consejos).
- [x] **Carga diferida de los reels**: los videos solo se cargan al hacer clic →
      la página abre mucho más rápido en celular.
- [x] **Tarjeta de previsualización (Open Graph)**: al compartir el link en WhatsApp/redes
      sale la foto + nombre + título, no un recuadro en blanco.
- [x] **Favicon** con la marca.
- [x] Publicado en Vercel con URL propia: `lafonobilingue.vercel.app`.
- [x] **"Cómo funciona" en 4 pasos** (Me escribes → Evaluación inicial → Plan personalizado → Sesiones).
- [x] **Testimonios** — 3 tarjetas con estrellas. *Info de ejemplo: falta que Francisca pase los textos reales (editar `CONFIG.testimonios`).*
- [x] **Preguntas frecuentes (FAQ)** — acordeón plegable con 6 preguntas. *Info de ejemplo: ajustar respuestas con datos reales (editar `CONFIG.faq`).*

- [x] **Migración a Astro** (rama `astro-migration`): componentes reutilizables, datos
      tipados (`src/data/site.ts`), Content Collections (FAQ + testimonios) e imágenes
      optimizadas con `<Image>`.

> El contenido se edita en `src/data/site.ts` (config general) y en
> `src/content/*.json` (testimonios y FAQ). El diseño vive en `src/components/`.

---

## 📋 Lo que QUEREMOS hacer (pendiente)

### Opcionales / fase 2
- Valores / precios (o "consultar").
- Sección de áreas que trata (retraso del lenguaje, dislalias, frenillo/respirador oral…).
- Versión en inglés (toggle ES/EN) para clientes expat/online.
- Dominio propio (ej. `lafonobilingue.cl`).
- Analytics para ver visitas.

---

## 💬 Para continuar con Claude en otro PC

1. Clonar el repo: `git clone <URL-del-repo>`
2. Abrir la carpeta con Claude Code.
3. `npm install` y luego `npm run dev` para levantar el sitio en local.
4. Editar contenido en `src/data/site.ts` o `src/content/*.json`; el diseño en `src/components/`.
5. Para publicar: push a la rama (preview de Vercel) o merge a `main` (producción).
