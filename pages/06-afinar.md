---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">6</div>

# Afinar la red

<div class="prep-subtitle">Hiperparámetros y overfitting</div>

<div class="intro">
  <div><div class="k">Qué es</div><p>Ajustar las decisiones que la red <b>no</b> aprende sola: capas, neuronas, activación, épocas… Se llaman <b>hiperparámetros</b>.</p></div>
  <div><div class="k">Para qué sirve</div><p>Subir el porcentaje de aciertos en la prueba sin que la red se limite a memorizar los datos.</p></div>
  <div><div class="k">Qué verás</div><p>Qué perillas hay, cómo reconocer el overfitting, por qué mezclar los datos y por qué en producción se usan tres conjuntos.</p></div>
</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Afinar la red</div>

# Hiperparámetros: las perillas

<div class="pildoras mt-4">
  <span class="pildora">nº de capas</span>
  <span class="pildora">neuronas por capa</span>
  <span class="pildora">función de activación</span>
  <span class="pildora">épocas</span>
  <span class="pildora sol">columnas que se usan</span>
</div>

<div class="tarjetas c2 mt-4" style="max-width: 560px;">
  <div class="tarjeta"><div class="t">sigmoid</div><Sigmoide /></div>
  <div class="tarjeta"><div class="t">relu</div><Sigmoide tipo="relu" /></div>
</div>

<div class="frase sol">Los pesos los aprende la red; los hiperparámetros los eliges tú. Por eso se buscan probando: cambiar → entrenar → probar → repetir.</div>

<Fuente texto="Basado en Karatas (2024), sección 3.9 · más activaciones en keras.io/api/layers/activations" />

---
layout: two-cols
layoutClass: gap-8 items-center
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Afinar la red</div>

# Overfitting: memorizar

- Red muy grande o demasiadas épocas → **memoriza**
- Señal: le va mucho mejor en entrenamiento que en prueba
- Solución: retroceder un poco (por ejemplo, menos épocas)

<div class="frase sol">
  Niños que memorizan 1+1=2 y 2+2=4… y fallan con 7+9.
</div>

::right::

<Curvas tipo="overfitting" />

<Fuente texto="Basado en Karatas (2024), sección 3.9 · curvas ilustrativas" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_redwine-1" />

<div class="prep-eyebrow">Afinar la red</div>

# Mezclar bien los datos

- `train_test_split` **mezcla** las filas
- `random_state=42` → siempre la **misma** mezcla, para comparar de forma justa
- El iris viene ordenado: con `shuffle=False` el resultado es pésimo

<div class="frase sol">
  Una semana sumas, otra restas… y en el examen ya olvidaste sumar.
</div>

::right::

```python
# Misma mezcla en cada ejecución
train_test_split(data, col, test_size=0.2,
                 random_state=42)

# Sin mezclar: ¡pruébalo con el iris!
train_test_split(data, col, test_size=0.2,
                 shuffle=False)
```

<Fuente texto="Código: Karatas (2024), listado 3.13 y sección 3.9" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Afinar la red</div>

# En producción: tres conjuntos

<div style="display: flex; height: 64px; border-radius: 14px; overflow: hidden; margin-top: 2rem; font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 1.1rem; color: #fff;">
  <div style="flex: 70; background: #005187; display: flex; align-items: center; justify-content: center;">70 %</div>
  <div style="flex: 20; background: #f2b632; color: #0a3357; display: flex; align-items: center; justify-content: center;">20 %</div>
  <div style="flex: 10; background: #2e9e6a; display: flex; align-items: center; justify-content: center;">10 %</div>
</div>

<div class="tarjetas c3 mt-6">
  <div class="tarjeta"><div class="t" style="color:#005187">Entrenamiento</div><div class="d">Ajusta los <b>pesos</b></div></div>
  <div class="tarjeta sol"><div class="t">Prueba</div><div class="d">Ajustas los <b>hiperparámetros</b> mirando este resultado</div></div>
  <div class="tarjeta"><div class="t" style="color:#2e9e6a">Evaluación</div><div class="d">Prueba final con datos que <b>nadie</b> usó para afinar</div></div>
</div>

<div class="frase mt-4">
  Si afinas mirando siempre la prueba, los hiperparámetros pueden quedar hechos a la medida de esos datos. La evaluación confirma que la red también funciona con datos nuevos.
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.9" />
