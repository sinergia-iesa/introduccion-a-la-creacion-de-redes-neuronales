---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">2</div>

# La receta

<div class="prep-subtitle">Los mismos pasos para cualquier problema</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">La receta</div>

# Seis pasos, siempre

<div class="mt-10">
  <Receta />
</div>

<div class="frase mt-10">
  <b>Aprendizaje supervisado:</b> sabemos qué columnas son la entrada y cuál es la respuesta correcta.
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.2" />

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Paso 1 · Preparar</div>

# La red solo entiende números

- Las medidas ya son números
- La especie es **texto**: hay que convertirla
- Una forma simple: un número por clase

::right::

<OneHot modo="numeros" />

<Fuente texto="Basado en Karatas (2024), sección 3.2.1" />

---
class: prep-ambiente
hideInToc: true
clicks: 2
---

<div class="prep-eyebrow">Paso 2 · Dividir</div>

# De una tabla salen cuatro

<div class="fig" style="max-width: 760px; margin: 0 auto;">
  <DivisionTabla :step="$clicks" />
</div>

<Fuente fig="3.2" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Paso 3 y 4 · Construir y entrenar</div>

# Entrenar: la IA como caja negra

<div class="fig" style="max-width: 760px; margin: 0 auto;">
  <CajaNegra modo="entrenar" />
</div>

<Fuente fig="3.3 y 3.4" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Paso 5 · Probar</div>

# Probar con datos que nunca vio

<div class="fig" style="max-width: 760px; margin: 0 auto;">
  <CajaNegra modo="probar" />
</div>

<Fuente fig="3.5" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Paso 6 · Usar</div>

# Ahora cualquiera puede clasificar

<div class="fig" style="max-width: 720px; margin: 0 auto;">
  <CajaNegra modo="usar" />
</div>

<div class="frase alerta">
  Si la IA se equivoca, quien no sabe de flores no lo nota. Una IA rara vez es 100 % confiable.
</div>

<Fuente fig="3.6" />
