---
theme: seriph
layout: image
image: /portada.png
class: prep-ambiente prep-cover text-center
title: Introducción a la creación de redes neuronales
info: |
  ## Introducción a la creación de redes neuronales
  Presentación didáctica basada en el capítulo 3, «Artificial Neural Networks»,
  de *Developing AI Applications: An Introduction* (Metin Karatas, Rheinwerk Publishing, 2024).
drawings:
  persist: false
transition: slide-left
mdc: true
colorSchema: light
hideInToc: true
themeConfig:
  primary: '#005187'
---

<div class="prep-eyebrow">Redes neuronales artificiales</div>

<div style="font-size: 38px; line-height: 1.15; font-weight: 800; font-family: 'Poppins', sans-serif; color: #0a3357; text-align: left;">
  Introducción a la creación<br>de redes neuronales
</div>

<div class="prep-subtitle" style="text-align: left;">De la neurona al modelo · Python, TensorFlow y Google Colab</div>

<div style="margin-top: 1.2rem; font-size: 0.78rem; color: #3f6a94; text-align: left; max-width: 520px;">
  Basado en el capítulo 3 de <i>Developing AI Applications</i><br>Metin Karatas · Rheinwerk Publishing, 2024
</div>

<div @click="$slidev.nav.next" class="prep-nav-hint mt-10 py-1">
  Presiona espacio para avanzar <carbon:arrow-right />
</div>

<div class="abs-bl m-10">
  <img src="/logos/footer-logos.png" class="h-16 prep-logos" />
</div>

---
hideInToc: true
class: prep-ambiente
---

<div class="prep-eyebrow">Créditos</div>

# Sobre esta presentación

<div class="libro mt-6">
  <div class="tapa">
    <div class="tt">Developing AI Applications</div>
    <div class="aa">Metin Karatas<br>Rheinwerk Publishing · 2024</div>
  </div>
  <div>
    <div class="frase" style="margin-top:0">
      Los conceptos, ejemplos, números y código vienen del <b>capítulo 3, «Artificial Neural Networks»</b>, de este libro.
    </div>
    <div class="pildoras mt-4">
      <span class="pildora">Adaptado al español con fines educativos</span>
      <span class="pildora">Diagramas rediseñados: cada uno indica su figura de origen</span>
      <span class="pildora sol">Material oficial del libro: sap-press.com/5899</span>
    </div>
  </div>
</div>

---
layout: two-cols
layoutClass: gap-16
class: prep-ambiente
hideInToc: true
---

# Contenido

<div class="frase sol" style="margin-top: 1.5rem;">
  Cada sección tiene su cuaderno de Colab para practicar.
</div>

::right::

<Toc text-sm minDepth="1" maxDepth="1" />

---
src: ./pages/01-que-es.md
---

---
src: ./pages/02-receta.md
---

---
src: ./pages/03-caja-negra.md
---

---
src: ./pages/04-colab.md
---

---
src: ./pages/05-primera-red.md
---

---
src: ./pages/06-afinar.md
---

---
src: ./pages/07-datos-reales.md
---

---
src: ./pages/08-regresion.md
---

---
src: ./pages/09-despliegue.md
---

---
src: ./pages/10-cierre.md
---
