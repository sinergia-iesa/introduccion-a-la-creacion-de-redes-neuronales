---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">2</div>

# La receta

<div class="prep-subtitle">Los mismos pasos para cualquier problema</div>

<div class="intro">
  <div><div class="k">Qué es</div><p>Los pasos que se siguen <b>siempre</b> en aprendizaje supervisado: tenemos una tabla de ejemplos y, para cada fila, la respuesta correcta.</p></div>
  <div><div class="k">Para qué sirve</div><p>Para no perderse: el mismo orden sirve para el iris, para el vino o para cualquier tabla nueva.</p></div>
  <div><div class="k">Qué verás</div><p>Los seis pasos, mirando la red como una <b>caja negra</b>: solo qué entra y qué sale. Por dentro la abrimos en la sección 3.</p></div>
</div>

<div class="glosario">
  <span><b>entrenar</b>: la red ve ejemplos y se corrige</span>
  <span><b>probar</b>: se mide con ejemplos que no vio</span>
  <span><b>época</b>: una pasada por todos los datos de entrenamiento</span>
  <span><b>parámetros</b>: los valores internos que la red ajusta</span>
</div>

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
- La especie es **texto**: con «Iris setosa» no se puede multiplicar ni sumar
- Una forma simple: un número por clase (Setosa → 0, Versicolor → 1, Virginica → 2)

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

<div class="fig" style="max-width: 660px; margin: 0 auto;">
  <DivisionTabla :step="$clicks" />
</div>

<div class="frase mt-2">
  Se corta por <b>filas</b> (120 entrenar / 30 probar) y por <b>columnas</b> (4 entradas / 1 respuesta). ¿Cuántas filas y columnas tiene cada tabla?
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

<div class="frase mt-4">
  Por cada fila, la red propone una especie. Se compara con la real y la diferencia se usa para ajustar sus parámetros. Recorrer la tabla completa una vez es una <b>época</b>, y se repite muchas veces hasta que el error baje.
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

<div class="frase mt-4">
  Ahora la red ya no se corrige: pasa una sola vez por las 30 filas de prueba y <b>tú</b> decides si el resultado alcanza. Si no, vuelves al inicio de la receta (más datos, otras columnas, otra red…).
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
  Si la IA se equivoca, quien no sabe de flores no lo nota. Una IA rara vez es 100 % confiable: compárala con una persona. Si un experto acierta el 95 %, esa es la meta.
</div>

<Fuente fig="3.6" />
