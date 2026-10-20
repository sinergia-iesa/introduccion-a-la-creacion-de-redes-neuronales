---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">3</div>

# Dentro de la caja negra

<div class="prep-subtitle">Neuronas, pesos y capas</div>

<div class="intro">
  <div><div class="k">Qué es</div><p>Lo que hay dentro de la red: <b>neuronas</b> organizadas en <b>capas</b> y unidas por conexiones con <b>pesos</b>.</p></div>
  <div><div class="k">Para qué sirve</div><p>Entender qué significa «entrenar»: ajustar esos pesos poco a poco hasta que la red se equivoque lo menos posible.</p></div>
  <div><div class="k">Qué verás</div><p>Cómo calcula una neurona, cómo viajan los datos hacia adelante (feed forward), cómo vuelve el error (back propagation) y cómo se corrigen los pesos (gradiente).</p></div>
</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# Capas conectadas por pesos

<div class="fig" style="max-width: 640px; margin: 0 auto;">
  <RedNeuronal :capas="[3, 3, 3]" resaltar="ocultas" :alto="320" />
</div>

<div class="pildoras justify-center">
  <span class="pildora">cada neurona → todas las de la siguiente capa</span>
  <span class="pildora">cada conexión tiene un <b>peso</b></span>
  <span class="pildora sol">varias capas ocultas = <b>deep learning</b></span>
</div>

<div class="frase mt-4">
  Siempre hay una capa de <b>entrada</b> y una de <b>salida</b>; las de en medio son las <b>ocultas</b>. El peso indica qué tan fuerte es cada conexión, y entrenar la red es justamente encontrar buenos valores para esos pesos.
</div>

<Fuente fig="3.7" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# ¿Cuántas neuronas para el iris?

<div class="fig" style="max-width: 700px; margin: 0 auto;">
  <RedNeuronal :capas="[4, 32, 64, 3]" :entradas="['largo sépalo', 'ancho sépalo', 'largo pétalo', 'ancho pétalo']" :salidas="['Setosa', 'Versicolor', 'Virginica']" resaltar="ocultas" :alto="300" />
</div>

<div class="tarjetas c3" style="margin-top: 0.2rem;">
  <div class="tarjeta"><div class="d"><b>Entrada: 4</b>, una por medida</div></div>
  <div class="tarjeta sol"><div class="d"><b>Ocultas:</b> decisión tuya. Pocas → no aprende (underfitting) · muchas → memoriza (overfitting)</div></div>
  <div class="tarjeta"><div class="d"><b>Salida: 3</b>, una probabilidad por especie. Ej.: 0.2 · <b>0.7</b> · 0.1 → 70 % Versicolor</div></div>
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.3" />

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# Una neurona artificial

- Multiplica cada entrada por su **peso**
- **Suma** todo
- Pasa el resultado por una **función de activación**
- Envía la salida a todas las neuronas de la siguiente capa

<div class="frase sol">
  Ejemplo: 0.7·0.8 + 0.2·0.2 + 0.3·0.1 = <b>0.63</b> → activación → <b>0.65</b>
</div>

::right::

<Neurona />

<Fuente fig="3.8" />

---
layout: two-cols
layoutClass: gap-10 items-center
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# La función sigmoide

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

- Una neurona biológica se «dispara» solo si el estímulo supera un **umbral**
- La sigmoide hace ese salto de forma **suave**: valores bajos → cerca de 0, altos → cerca de 1
- La salida siempre queda **entre 0 y 1**: σ(0.63) = 0.65

::right::

<Sigmoide :punto="0.63" />

<Fuente fig="3.9" />

---
class: prep-ambiente
hideInToc: true
clicks: 4
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# Feed forward: de izquierda a derecha

<div class="fig" style="max-width: 600px; margin: 0 auto;">
  <FeedForward :step="$clicks" />
</div>

<div class="frase mt-2">
  La entrada solo reparte; cada neurona siguiente multiplica, suma y aplica la sigmoide. Lo que sale a la derecha es la predicción.
</div>

<Fuente fig="3.10 y 3.11 (mismos números)" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# Lo mismo, con matrices

$$
\underbrace{\begin{pmatrix} 0.8 & 0.2 & 0.1 \\ 0.3 & 0.4 & 0.2 \\ 0.2 & 0.7 & 0.4 \end{pmatrix}}_{W}
\cdot
\underbrace{\begin{pmatrix} 0.7 \\ 0.2 \\ 0.3 \end{pmatrix}}_{i}
=
\underbrace{\begin{pmatrix} 0.63 \\ 0.35 \\ 0.40 \end{pmatrix}}_{x}
\quad\xrightarrow{\;\sigma\;}\quad
\begin{pmatrix} 0.65 \\ 0.59 \\ 0.60 \end{pmatrix}
$$

<div class="frase mt-6">
  Cada <b>fila</b> de W tiene los pesos que llegan a una neurona. Fila 1 por i: 0.8·0.7 + 0.2·0.2 + 0.1·0.3 = 0.63. Es el mismo cálculo de antes, pero para toda la capa de una sola vez.
</div>

<div class="frase sol mt-3">
  No vas a calcular nada a mano: TensorFlow lo hace. Esto es solo para entender qué pasa adentro.
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.5" />

---
class: prep-ambiente
hideInToc: true
clicks: 2
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# Back propagation: repartir el error

<div class="fig" style="max-width: 600px; margin: 0 auto;">
  <Backprop :step="$clicks" />
</div>

<div class="frase mt-2">
  Solo la salida se compara con la respuesta correcta. Su error se reparte hacia atrás <b>según los pesos</b>: la conexión más fuerte carga más error.
</div>

<Fuente fig="3.12 y 3.13 (mismos números)" />

---
layout: two-cols
layoutClass: gap-8 items-center
class: prep-ambiente
hideInToc: true
clicks: 6
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# Descenso de gradiente

- Los pesos empiezan **al azar**
- Movemos un peso un paso: ¿el error bajó? Seguimos en esa dirección
- Si sube, el paso anterior era el **fondo del valle**: el error mínimo

<div class="frase sol">
  No vemos la curva completa: bajamos «a ciegas», paso a paso.
</div>

::right::

<Gradiente :step="$clicks" />

<Fuente fig="3.14" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# El tamaño del paso: learning rate

<div class="tarjetas c3 mt-2">
  <Gradiente mini modo="grande" titulo="Muy grande: se pasa" />
  <Gradiente mini modo="normal" titulo="Adecuado" />
  <Gradiente mini modo="pequeno" titulo="Muy pequeño: eterno" />
</div>

$$
\theta_{\text{nuevo}} = \theta - \alpha \cdot \frac{\partial e}{\partial \theta}
\qquad \alpha = \text{learning rate (ej. 0.001)}
$$

<div class="frase mt-2">
  El peso se mueve en contra de la pendiente del error (por eso el signo menos), y α hace que ese paso sea pequeño.
</div>

<Fuente fig="3.14" />

---
layout: two-cols
layoutClass: gap-8 items-center
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Dentro de la caja negra</div>

# Valles engañosos

<Gradiente curva="doble" />

::right::

<div class="tarjetas" style="grid-template-columns: 1fr;">
  <div class="tarjeta"><div class="t">Mínimo local</div><div class="d">Un valle que no es el más profundo. Se puede salir reiniciando desde otros puntos o sumando «impulso» (momentum)</div></div>
  <div class="tarjeta sol"><div class="t">Adam</div><div class="d">Optimizador que ajusta el paso de cada peso por separado, en vez de usar un α fijo para todos</div></div>
  <div class="tarjeta"><div class="t">Bias</div><div class="d">Un valor extra por neurona que también se aprende</div></div>
</div>

<Fuente fig="3.15" />
