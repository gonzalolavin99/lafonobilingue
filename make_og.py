# -*- coding: utf-8 -*-
"""Genera og.png (1200x630) para la tarjeta de previsualizacion al compartir el link."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

W, H = 1200, 630
base = os.path.dirname(os.path.abspath(__file__))

# --- Paleta pastel ---
CELESTE = (191, 227, 242)
CELESTE_SOFT = (227, 243, 251)
ROSADO = (247, 207, 224)
ROSADO_SOFT = (253, 230, 240)
CREMA = (255, 253, 251)
TINTA = (74, 67, 88)
TINTA_SOFT = (138, 131, 152)
BLANCO = (255, 255, 255)

# --- Fondo: degradado diagonal celeste -> crema -> rosado ---
bg = Image.new("RGB", (W, H), CREMA)
top = Image.new("RGB", (W, H), CELESTE_SOFT)
bot = Image.new("RGB", (W, H), ROSADO_SOFT)
mask = Image.new("L", (W, H))
md = mask.load()
for y in range(H):
    for x in range(0, W, 1):
        # diagonal gradient
        t = (x / W * 0.5 + y / H * 0.5)
        md[x, y] = int(max(0, min(255, t * 255)))
bg = Image.composite(bot, top, mask)
# suaviza hacia crema en el centro-izquierda
overlay = Image.new("RGB", (W, H), CREMA)
omask = Image.new("L", (W, H), 0)
od = ImageDraw.Draw(omask)
od.ellipse([-300, 120, 760, 720], fill=120)
omask = omask.filter(ImageFilter.GaussianBlur(160))
bg = Image.composite(overlay, bg, omask)

draw = ImageDraw.Draw(bg)

# --- Fuentes (Windows) ---
def font(path, size):
    return ImageFont.truetype(os.path.join("C:/Windows/Fonts", path), size)

try:
    f_eyebrow = font("ariblk.ttf", 26)
except Exception:
    f_eyebrow = font("arialbd.ttf", 26)
f_name = font("georgiab.ttf", 84)
f_name2 = font("georgiaz.ttf", 84)  # italic bold
f_role = font("arial.ttf", 36)
f_tag = font("georgiai.ttf", 40)

# --- Foto de Fran en circulo ---
photo_path = os.path.join(base, "fran.jpg")
PHOTO_D = 430
cx, cy = 920, 300  # centro del circulo
if os.path.exists(photo_path):
    ph = Image.open(photo_path).convert("RGB")
    # recorte cuadrado centrado en la parte superior (donde esta la cara)
    pw, phh = ph.size
    side = min(pw, phh)
    left = (pw - side) // 2
    topc = 0  # tomar desde arriba para no cortar la cara
    ph = ph.crop((left, topc, left + side, topc + side)).resize((PHOTO_D, PHOTO_D), Image.LANCZOS)
    cmask = Image.new("L", (PHOTO_D, PHOTO_D), 0)
    ImageDraw.Draw(cmask).ellipse([0, 0, PHOTO_D, PHOTO_D], fill=255)
    # anillo blanco detras
    draw.ellipse([cx - PHOTO_D//2 - 12, cy - PHOTO_D//2 - 12,
                  cx + PHOTO_D//2 + 12, cy + PHOTO_D//2 + 12], fill=BLANCO)
    bg.paste(ph, (cx - PHOTO_D//2, cy - PHOTO_D//2), cmask)

# --- Texto (izquierda) ---
x0 = 90
draw.text((x0, 150), "FONOAUDIÓLOGA BILINGÜE", font=f_eyebrow, fill=TINTA_SOFT)
draw.text((x0, 205), "Francisca", font=f_name, fill=TINTA)
draw.text((x0, 300), "Valenzuela", font=f_name2, fill=(124, 150, 200))
draw.text((x0, 415), "Lenguaje y comunicación", font=f_role, fill=TINTA)
draw.text((x0, 458), "infantil · español e inglés", font=f_role, fill=TINTA)
draw.text((x0, 525), "la fono bilingüe", font=f_tag, fill=(216, 120, 165))

bg.save(os.path.join(base, "og.png"), "PNG")
print("OK og.png", bg.size)
