---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">1</div>

# ¿Qué es una red neuronal?

<div class="prep-subtitle">Aprender de ejemplos en lugar de seguir reglas</div>

<div class="intro">
  <div><div class="k">Qué es</div><p>Un programa que aprende a responder a partir de <b>ejemplos</b>, en lugar de seguir reglas que alguien escribió.</p></div>
  <div><div class="k">Para qué sirve</div><p>Clasificar (perro o gato, bueno o defectuoso) o predecir números (precios, ingresos) cuando hay demasiados datos para buscar las reglas a mano.</p></div>
  <div><div class="k">Qué verás</div><p>En qué se diferencia de la programación tradicional, los dos tipos de preguntas y el ejemplo del <b>iris</b>, que nos acompaña todo el capítulo.</p></div>
</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">¿Qué es una red neuronal?</div>

# Reglas vs. ejemplos

<div class="fig mt-8">
  <ReglasVsEjemplos />
</div>

<div class="frase mt-6">
  Con 4 columnas y 150 filas podrías buscar las reglas a mano. Con <b>50 columnas y 100 000 filas</b>, nadie puede: ahí la red aprende las relaciones sola y luego las aplica a datos nuevos.
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
    <div class="d">¿A qué <b>categoría</b> pertenece? La respuesta es una opción de una lista.</div>
    <div class="pildoras mt-3"><span class="pildora">perro o gato</span><span class="pildora">bueno o defectuoso</span></div>
  </div>
  <div class="tarjeta sol">
    <div class="t"><carbon:chart-line /> Regresión</div>
    <div class="d">¿Qué <b>número</b> tendrá? La respuesta es un valor continuo.</div>
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
  Mides una flor nueva y sus medidas no coinciden con ninguna fila de la tabla. ¿Qué especie es? Eso es lo que la red debe responder.
</div>

::right::

<div class="fig" style="max-width: 360px; margin: 0 auto;">
  <IrisFlor />
</div>

<Fuente fig="3.1" />
