---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">5</div>

# Tu primera red en código

<div class="prep-subtitle">K3_iris-1 paso a paso</div>

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-1" />

<div class="prep-eyebrow">Primera red</div>

# Importar y cargar

- **TensorFlow**: construye y entrena la red
- **pandas**: lee la tabla
- **scikit-learn**: divide los datos

::right::

```python
import tensorflow as tf
import pandas as pd
from sklearn.model_selection import train_test_split

path = "iris.csv"
data = pd.read_csv(path, delimiter=',')
print(data.head())
```

<Fuente texto="Código: Karatas (2024), listados 3.1 y 3.2" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-1" />

<div class="prep-eyebrow">Primera red</div>

# Preparar y dividir

- Especie → 0, 1, 2
- Separar **entradas** y **respuesta**
- 80 % entrenamiento, 20 % prueba

::right::

```python
col_name = 'species'
data[col_name] = data[col_name].astype('category')
data[col_name] = data[col_name].cat.codes

col = data[col_name]                     # respuesta
data = data.drop([col_name], axis=1)     # entradas

train_data, test_data, train_col, test_col = \
    train_test_split(data, col, test_size=0.2)
```

<Fuente texto="Código: Karatas (2024), listados 3.3 a 3.5" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-1" />

<div class="prep-eyebrow">Primera red</div>

# Construir la red

- `Dense`: capa conectada con todas las anteriores
- 32 y 64 neuronas ocultas con **sigmoide**
- 3 salidas con **softmax**

<div class="frase sol">
  El libro usa <code>input_dim=4</code>; <code>tf.keras.Input</code> es la forma actual equivalente.
</div>

::right::

```python
model = tf.keras.Sequential([
    tf.keras.Input(shape=(4,)),
    tf.keras.layers.Dense(32, activation='sigmoid'),
    tf.keras.layers.Dense(64, activation='sigmoid'),
    tf.keras.layers.Dense(3, activation='softmax')
])
```

<Fuente texto="Código: Karatas (2024), listado 3.6" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Primera red</div>

# Softmax: probabilidades que suman 1

<div class="fig mt-6" style="max-width: 640px; margin-left: auto; margin-right: auto;">
  <Softmax />
</div>

$$
\text{softmax}(y_i) = \frac{e^{y_i}}{\sum_j e^{y_j}}
$$

<Fuente texto="Basado en Karatas (2024), sección 3.8 (mismo ejemplo: 2.0, 1.0, 0.1)" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-1" />

<div class="prep-eyebrow">Primera red</div>

# Configurar el aprendizaje

- **optimizer**: cómo se ajustan los pesos → `adam`
- **loss**: qué tan lejos está de la respuesta
- **metrics**: % de aciertos → `accuracy`

$$
\text{accuracy} = \frac{\text{aciertos}}{\text{total}}
$$

::right::

```python
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
```

<Fuente texto="Código: Karatas (2024), listado 3.7" />

---
layout: two-cols
layoutClass: gap-8 items-center
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-1" />

<div class="prep-eyebrow">Primera red</div>

# Entrenar y probar

```python
model.fit(train_data, train_col, epochs=30)

test_loss, test_acc = model.evaluate(test_data, test_col)
print('Test accuracy:', test_acc)
```

<div class="frase sol">
  Libro: <b>casi 80 %</b> con 30 épocas. Prueba con más épocas: lo que importa es la <b>prueba</b>.
</div>

::right::

<Curvas tipo="entrenamiento" />

<Fuente texto="Código: listados 3.8 y 3.9 · curvas ilustrativas, basadas en fig. 3.19" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_redwine-1" />

<div class="prep-eyebrow">Otro problema, mismo programa</div>

# Calidad del vino tinto

- Otro **archivo** y **separador** (`;`)
- Otra **columna** a predecir: `quality`
- Otra red: **11 entradas** y **11 salidas** (calidad 0–10)

::right::

```python
path = "winequality-red.csv"
data = pd.read_csv(path, delimiter=';')

col_name = 'quality'

model = tf.keras.Sequential([
    tf.keras.Input(shape=(11,)),
    tf.keras.layers.Dense(32, activation='sigmoid'),
    tf.keras.layers.Dense(64, activation='sigmoid'),
    tf.keras.layers.Dense(11, activation='softmax')
])
```

<Fuente texto="Código: Karatas (2024), listados 3.10 y 3.11" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Otro problema, mismo programa</div>

# ¿Hacen falta 11 clases?

<div class="tarjetas c2 mt-6">
  <div class="tarjeta">
    <div class="t">11 clases (calidad 0 a 10)</div>
    <div class="grande">≈ 55 %</div>
  </div>
  <div class="tarjeta sol">
    <div class="t">3 clases: malo · bueno · muy bueno</div>
    <div class="grande sol">≈ 65 %</div>
  </div>
</div>

<div class="frase mt-6">
  Los vinos los calificaron personas al probarlos: no es una ciencia exacta.
</div>

<Fuente texto="Resultados reportados en Karatas (2024), sección 3.8" />
