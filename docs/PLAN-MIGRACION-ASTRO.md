# 🚀 Plan de migración a Astro — La fono bilingüe

> Documento de trabajo. Rama: `astro-migration`. Objetivo doble:
> **(1)** aprender Astro migrando algo que ya entiendes, y
> **(2)** dejar el proyecto listo para los pendientes de fase 2 (inglés, blog, más páginas, SEO).
>
> `main` (prod en `lafonobilingue.vercel.app`) **no se toca** hasta que esto funcione completo.

---

## 0. Por qué Astro (y por qué ahora)

El sitio hoy es una landing de una sola página, sin build ni dependencias. Para **lo que la web necesita hoy**, Astro es sobre-ingeniería. Lo migramos por el **futuro** y por **aprender**.

Mira los pendientes de fase 2: casi todos son justo lo que Astro hace bien.

| Pendiente fase 2 | Con HTML actual | Con Astro |
|---|---|---|
| Versión inglés (ES/EN) | manual, duplicar todo | **i18n nativo** (`astro:i18n`) |
| Blog / artículos | inviable | **Content Collections** (markdown tipado) |
| Más páginas | copiar/pegar `<head>`, nav, footer | **componentes + layouts** reutilizables |
| SEO / imágenes optimizadas | a mano | **`<Image>`** + integraciones SEO |
| Testimonios / FAQ | en `CONFIG` (ya ok) | **colecciones de datos tipadas** |

**Idea clave:** tu `CONFIG` actual ya es "un Astro pobre hecho a mano". Migrar es **formalizar** lo que ya intuiste: separar *datos* de *presentación*.

---

## 1. Cómo funciona Astro (lo mínimo para entender el plan)

- **Componentes `.astro`**: HTML + un bloque de script "frontmatter" arriba (entre `---`) que corre **en build, en el servidor**, no en el navegador. Sirve para traer datos y armar el HTML.
- **Islands (islas)**: por defecto Astro manda **cero JavaScript** al navegador. El JS solo se "hidrata" donde tú lo pidas. Nuestra web casi no necesita JS de cliente → ideal.
- **Layouts**: plantillas que envuelven páginas (el `<head>`, nav y footer comunes viven una sola vez).
- **`src/pages/`**: cada archivo = una ruta. `index.astro` → `/`.
- **`public/`**: archivos servidos tal cual desde la raíz (`/og.png`). Aquí van favicon, og, imágenes que no se optimizan.
- **`src/assets/`**: imágenes que SÍ pasan por el optimizador (`<Image>`).
- **Content Collections**: carpetas de `.md`/`.json` con un **esquema tipado** (Zod). Perfecto para blog, FAQ, testimonios.
- **i18n**: Astro enruta `/` (es) y `/en/` (inglés) y te da helpers para los textos.

---

## 2. Estado actual (post-reordenamiento)

```
sitio-fono/
├── index.html              # HTML + CSS + JS + CONFIG (todo junto, 772 líneas)
├── README.md
├── assets/
│   ├── favicon.svg
│   └── img/
│       ├── fran.jpg
│       ├── decoracion.jpg
│       ├── og.png
│       └── originales/      # .jfif originales (gitignored)
├── tools/
│   └── make_og.py
└── docs/
    └── PLAN-MIGRACION-ASTRO.md   # este archivo
```

Secciones del `index.html` que se vuelven **componentes**:
`Nav`, `Hero`, `Modalidades`, `Sobre`, `Banner`, `ComoFunciona`, `Horarios`, `Videos`, `Testimonios`, `FAQ`, `Agendar`, `Footer`, `FabWhatsApp`.

Datos del bloque `CONFIG` que se vuelven **archivos de datos**:
`whatsapp`, `instagram`, `horarios`, `videos`, `pasos`, `testimonios`, `faq`.

---

## 3. Estructura objetivo en Astro

```
sitio-fono/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── og.png                  # se sigue sirviendo en /og.png (no romper Open Graph)
├── src/
│   ├── assets/
│   │   ├── fran.jpg            # optimizada con <Image>
│   │   └── decoracion.jpg
│   ├── data/
│   │   └── site.ts            # ex-CONFIG: whatsapp, instagram, horarios, pasos
│   ├── content/
│   │   ├── config.ts          # esquemas Zod (tipado)
│   │   ├── testimonios/       # 1 archivo por testimonio (o un .json)
│   │   └── faq/               # 1 archivo por pregunta (o un .json)
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Modalidades.astro
│   │   ├── Sobre.astro
│   │   ├── Banner.astro
│   │   ├── ComoFunciona.astro
│   │   ├── Horarios.astro
│   │   ├── Videos.astro
│   │   ├── Testimonios.astro
│   │   ├── Faq.astro
│   │   ├── Agendar.astro
│   │   ├── Footer.astro
│   │   └── FabWhatsApp.astro
│   ├── layouts/
│   │   └── Base.astro          # <head>, fuentes, SEO/OG, nav + footer
│   ├── styles/
│   │   └── global.css          # el <style> actual extraído tal cual
│   └── pages/
│       └── index.astro         # arma la página llamando a los componentes
└── tools/
    └── make_og.py
```

---

## 4. Plan paso a paso (incremental y verificable)

> Cada paso debe dejar el sitio **visualmente idéntico** al actual. Vamos de a poco y comparamos.

### Paso 1 — Andamiaje Astro (sin tocar el diseño aún)
```bash
npm create astro@latest    # plantilla "Empty", TypeScript: Strict
npm run dev                 # http://localhost:4321
```
- Decisión: empezamos con plantilla vacía para entender cada pieza (no una "ya hecha").
- Resultado: un "Hello world" en Astro corriendo en local.

### Paso 2 — Estilos globales
- Copiar el `<style>` completo del `index.html` a `src/styles/global.css`.
- Importarlo en `src/layouts/Base.astro`.
- ✅ Aprendizaje: cómo Astro maneja CSS global vs CSS por componente (scoped).

### Paso 3 — Layout base (`Base.astro`)
- Mover el `<head>`: fuentes Google, meta tags, **Open Graph/Twitter** (mantener `og.png` en `/og.png`).
- `<slot />` donde irá el contenido de cada página.
- ✅ Aprendizaje: layouts, `<slot/>`, props (`title`, `description`).

### Paso 4 — Datos: ex-`CONFIG` → `src/data/site.ts`
```ts
export const site = {
  whatsapp: "56998844138",
  instagram: "flga.franvadiaz",
  horarios: { Lunes: ["13:00 – 14:00", "15:00 – 17:00"], /* ... */ },
  pasos: [ /* ... */ ],
};
```
- ✅ Aprendizaje: importar datos tipados en componentes (autocompletado, errores en build).

### Paso 5 — Componentizar (1 sección a la vez)
Orden sugerido (de más simple a más complejo):
1. `Banner`, `Footer`, `FabWhatsApp` (casi HTML puro).
2. `Hero`, `Modalidades`, `Sobre` (HTML + datos).
3. `Horarios`, `ComoFunciona` (reemplazan el `.forEach` de JS por `.map()` en el frontmatter).
4. `Agendar` (el form → WhatsApp; este SÍ necesita un poco de JS de cliente).
- ✅ Aprendizaje clave: lo que antes generabas con `insertAdjacentHTML` en el navegador, ahora se genera en build con `{items.map(...)}`. Cero JS enviado.

### Paso 6 — Content Collections (FAQ + Testimonios)
- `src/content/config.ts` con esquemas Zod:
```ts
import { defineCollection, z } from 'astro:content';
const faq = defineCollection({
  type: 'data',
  schema: z.object({ pregunta: z.string(), respuesta: z.string(), orden: z.number() }),
});
const testimonios = defineCollection({
  type: 'data',
  schema: z.object({ texto: z.string(), autor: z.string() }),
});
export const collections = { faq, testimonios };
```
- Cada FAQ/testimonio como `.json` o `.md`. El acordeón FAQ necesita un mínimo de JS (island).
- ✅ Aprendizaje: contenido tipado, `getCollection()`, validación en build.

### Paso 7 — Imágenes optimizadas
- `fran.jpg` y `decoracion.jpg` → `src/assets/` y usar `<Image>` (`astro:assets`).
- ✅ Aprendizaje: `<Image>` genera tamaños/`webp`, lazy-load y evita layout shift.
- `og.png` y `favicon.svg` se quedan en `public/` (se sirven tal cual).

### Paso 8 — Verificación contra el original
- Comparar lado a lado con la versión estática (misma paleta, mismas secciones, responsive).
- `npm run build && npm run preview` → revisar que el HTML final sea correcto y rápido.

---

## 5. Fase 2 (lo que se desbloquea, opcional, después de migrar)

- **i18n ES/EN**: configurar `i18n` en `astro.config.mjs`, mover textos a `src/data/i18n/es.ts` y `en.ts`, crear `/en/`. Toggle de idioma en el nav.
- **Blog**: nueva collection `blog` (`type: 'content'`, markdown), página `src/pages/blog/[slug].astro` + índice.
- **Más páginas**: `precios.astro`, `areas.astro` reutilizando `Base.astro`.
- **SEO**: integración (`@astrojs/sitemap`) + canonical + OG por página.
- **Analytics**: Vercel Analytics o Plausible.

---

## 6. Deploy (Vercel) — sin romper prod

- Vercel detecta Astro solo (build `astro build`, output `dist/`).
- **Estrategia segura:**
  1. Trabajamos todo en la rama `astro-migration`.
  2. Vercel genera una **preview URL** automática por cada push a la rama → probamos ahí.
  3. `lafonobilingue.vercel.app` (prod) sigue sirviendo `main` intacto.
  4. Solo cuando la preview esté 100% ✅ → merge a `main` → Vercel publica Astro en prod.
- Mantener `og.png` accesible en `/og.png` para no romper las tarjetas de previsualización ya compartidas.

---

## 7. Riesgos y cómo los mitigamos

| Riesgo | Mitigación |
|---|---|
| Romper prod | Todo en rama aparte + preview de Vercel. Merge solo si funciona. |
| Perder el look actual | Migrar el CSS **tal cual** primero; refactor estético después. |
| Sobre-ingeniería | No añadir librerías que no necesitamos. Astro puro, casi sin JS de cliente. |
| Open Graph roto | `og.png` se queda en `/og.png`; URLs absolutas intactas. |
| Curva de aprendizaje | Ir sección por sección, verificando en cada paso. |

---

## 8. Checklist de la migración

- [ ] Paso 1 — Andamiaje Astro corriendo en local
- [ ] Paso 2 — `global.css` importado
- [ ] Paso 3 — `Base.astro` con `<head>` + SEO/OG
- [ ] Paso 4 — `src/data/site.ts` (ex-CONFIG)
- [ ] Paso 5 — Todas las secciones como componentes
- [ ] Paso 6 — Collections FAQ + Testimonios
- [ ] Paso 7 — Imágenes con `<Image>`
- [ ] Paso 8 — Verificado contra el original (visual + build)
- [ ] Deploy preview en Vercel revisado
- [ ] Merge a `main` (¡le damos! 🎉)
