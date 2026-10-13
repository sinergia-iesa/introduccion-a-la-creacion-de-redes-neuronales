---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">1</div>

# ¿Qué es una red neuronal?

<div class="prep-subtitle">Aprender de ejemplos en lugar de seguir reglas</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">¿Qué es una red neuronal?</div>

# Reglas vs. ejemplos

<div class="fig mt-8">
  <ReglasVsEjemplos />
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.1" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">¿Qué es una red neuronal?</div>

# Dos tipos de preguntas

<div class="tarjetas c2 mt-6">
  <div class="tarjeta">
    <div class="t"><carbon:category /> Clasificación</div>
    <div class="d">¿A qué <b>categoría</b> pertenece?</div>
    <div class="pildoras mt-3"><span class="pildora">perro o gato</span><span class="pildora">bueno o defectuoso</span></div>
  </div>
  <div class="tarjeta sol">
    <div class="t"><carbon:chart-line /> Regresión</div>
    <div class="d">¿Qué <b>número</b> tendrá?</div>
    <div class="pildoras mt-3"><span class="pildora sol">precio de un producto</span><span class="pildora sol">ingreso mensual</span></div>
  </div>
</div>

<div class="frase mt-6">
  A veces ambas sirven: ¿<b>cuánto</b> gana alguien? o ¿gana <b>más o menos</b> de $50 000?
</div>

<Fuente texto="Basado en Karatas (2024), introducción del capítulo 3" />

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">¿Qué es una red neuronal?</div>

# Nuestro ejemplo: el iris

- **150 flores**, 3 especies: *Setosa*, *Versicolor*, *Virginica*
- **4 medidas**: largo y ancho del sépalo y del pétalo
- Datos de Ronald Fisher, **1936**

<div class="frase sol">
  Mides una flor nueva que no está en la tabla. ¿Qué especie es?
</div>

::right::

<div class="fig" style="max-width: 360px; margin: 0 auto;">
  <IrisFlor />
</div>

<Fuente fig="3.1" />
