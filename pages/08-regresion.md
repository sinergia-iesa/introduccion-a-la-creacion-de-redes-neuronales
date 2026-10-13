---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">8</div>

# Regresión

<div class="prep-subtitle">Cuando la respuesta es un número</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Regresión</div>

# Solo cambia la salida

<div class="fig mt-6">
  <Salidas />
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

- 1 neurona de salida, **sin activación**
- **MAE**: error promedio, en cm

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
