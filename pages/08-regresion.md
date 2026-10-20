---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">8</div>

# Regresión

<div class="prep-subtitle">Cuando la respuesta es un número</div>

<div class="intro">
  <div><div class="k">Qué es</div><p>Predecir un <b>número continuo</b> (un precio, una longitud) en vez de una categoría.</p></div>
  <div><div class="k">Para qué sirve</div><p>Cuando la pregunta no es «¿cuál?» sino «¿cuánto?».</p></div>
  <div><div class="k">Qué verás</div><p>Qué cambia en la red (solo la salida y la loss) y cómo predecir el largo del sépalo del iris.</p></div>
</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Regresión</div>

# Solo cambia la salida

<div class="fig mt-6">
  <Salidas />
</div>

<div class="frase mt-6">
  Con el iris: en vez de preguntar «¿qué especie es?», preguntamos «¿cuántos cm mide el sépalo?». Preparar, dividir y entrenar no cambia; solo cambian la última capa y la loss.
</div>

<Fuente texto="Basado en Karatas (2024), secciones 3.8 y 3.14" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-5" />

<div class="prep-eyebrow">Regresión</div>

# Predecir el largo del sépalo

- Entradas: pétalo (largo y ancho) + especie en OHE. El ancho del sépalo se quitó por su baja correlación
- 1 neurona de salida, **sin activación**: el número sale tal cual
- **MAE**: error absoluto promedio, en cm

$$
\text{MAE} = \frac{1}{n}\sum |y - \hat{y}|
$$

<div class="frase sol">Libro: error de <b>≈ 3 mm</b></div>

::right::

```python
model = tf.keras.Sequential([
    tf.keras.Input(shape=(data.shape[1],)),
    tf.keras.layers.Dense(32, activation='sigmoid'),
    tf.keras.layers.Dense(64, activation='sigmoid'),
    tf.keras.layers.Dense(1)
])

model.compile(optimizer='adam', loss='mae', metrics=['mae'])

test_loss, test_mae = model.evaluate(test_data, test_col)
print('Test mae:', test_mae)
```

<Fuente texto="Código: Karatas (2024), listados 3.37 a 3.39" />
