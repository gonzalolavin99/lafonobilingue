# 🌸 La fono bilingüe — Sitio web de Francisca Valenzuela

Landing page de **Francisca Valenzuela Díaz**, fonoaudióloga bilingüe (español–inglés).
Pensada para el bio de Instagram: que la gente la conozca, vea sus horarios, sus videos
y agende directo por WhatsApp.

🔗 **En vivo:** https://lafonobilingue.vercel.app
📸 **Instagram:** [@flga.franvadiaz](https://instagram.com/flga.franvadiaz)

---

## 🧩 Cómo está hecho (importante)

Es un sitio **estático de un solo archivo**: todo vive en [`index.html`](index.html)
(HTML + CSS + JavaScript juntos). **No hay framework, ni build, ni dependencias.**

- Para verlo en local: abre `index.html` en el navegador (doble clic), o levanta un
  servidor simple: `python -m http.server 4321` y entra a `http://localhost:4321`.
- Para editar textos, horarios, WhatsApp, Instagram o los videos: cambia el bloque
  **`CONFIG`** que está al inicio del `<script>`, casi al final de `index.html`. Está
  comentado y es lo único que normalmente hay que tocar.

```js
const CONFIG = {
  whatsapp: "56998844138",        // número en formato internacional, sin +
  instagram: "flga.franvadiaz",    // usuario sin @
  horarios: { ... },               // bloques por día ([] = cerrado)
  videos: [ ... ]                  // enlaces de reels de Instagram
};
```

---

## 📁 Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | El sitio completo (HTML + CSS + JS) |
| `fran.jpg` | Foto de perfil de Francisca (hero y "Sobre mí") |
| `decoracion.jpg` | Foto de fondo del banner "la fono bilingüe" |
| `og.png` | Imagen de previsualización al compartir el link (1200×630) |
| `favicon.svg` | Ícono de la pestaña del navegador |
| `make_og.py` | Script para regenerar `og.png` (requiere Python + Pillow) |

---

## 🚀 Deploy (Vercel)

El proyecto está en Vercel (cuenta de Gonzalo), nombre de proyecto **`lafonobilingue`**.
Cada cambio se publica con:

```bash
vercel deploy . --prod
```

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

---

## 📋 Lo que QUEREMOS hacer (pendiente)

> Las secciones nuevas se llenarían primero con **info de ejemplo** y luego Francisca
> la ajusta con datos reales.

1. **Preguntas frecuentes (FAQ)** — acordeón plegable que responda lo más preguntado:
   - ¿Desde qué edad atiende?
   - ¿Cuánto dura una sesión?
   - ¿Cómo es la primera evaluación? ¿Entrega informe?
   - ¿Hace boleta / sirve para reembolso de Isapre?
   - ¿Qué zonas cubre a domicilio?
2. **"Cómo funciona" en 3–4 pasos** — *1. Me escribes → 2. Evaluación inicial →
   3. Plan personalizado → 4. Sesiones*. Para bajar la ansiedad de "no sé cómo empezar".
3. **Testimonios** — 2–3 frases cortas de mamás/papás (con inicial, ej: "M., mamá de Tomás").
   Falta que Francisca pase los textos reales.

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
3. Pedirle lo que quieras (ej: "agrega la sección de Preguntas Frecuentes con info de
   ejemplo"). El sitio es un solo archivo, así que es fácil de editar.
4. Para publicar los cambios hay que tener acceso a la cuenta de Vercel de Gonzalo
   (`vercel deploy . --prod`).
