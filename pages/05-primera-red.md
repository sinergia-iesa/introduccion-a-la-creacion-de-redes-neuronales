---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">5</div>

# Tu primera red en código

<div class="prep-subtitle">K3_iris-1 paso a paso</div>

<div class="intro">
  <div><div class="k">Qué es</div><p>La receta convertida en un programa de Python con <b>TensorFlow</b> (Keras), <b>pandas</b> y <b>scikit-learn</b>.</p></div>
  <div><div class="k">Para qué sirve</div><p>Clasificar el iris de verdad y comprobar que pasar a otro problema (el vino) solo pide unos pocos cambios.</p></div>
  <div><div class="k">Qué verás</div><p><b>K3_iris-1</b> paso a paso: cargar, preparar, dividir, construir, configurar, entrenar y probar.</p></div>
</div>

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

- `astype('category')` + `cat.codes`: especie → 0, 1, 2
- `drop(..., axis=1)` quita la **columna** (`axis=1`) de las entradas
- `test_size=0.2`: 120 filas para entrenar, 30 para probar

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

- `Dense`: cada neurona se conecta con todas las de la capa anterior
- 4 entradas → 32 y 64 ocultas con **sigmoide** (tamaño elegido por ti)
- 3 salidas con **softmax**, una por especie

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

<div class="frase mt-2">
  Ejemplo: e<sup>2.0</sup> / (e<sup>2.0</sup> + e<sup>1.0</sup> + e<sup>0.1</sup>) = 7.39 / 11.21 ≈ <b>0.66</b>. El valor más alto se queda con la mayor probabilidad, y las tres suman exactamente 1.
</div>

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
- **loss**: qué tan lejos está de la respuesta. `sparse_` porque la respuesta viene como 0, 1, 2
- **metrics**: % de aciertos → `accuracy`

<div class="frase">
  Si la especie correcta recibió 0.7, la loss es −log(0.7) ≈ 0.36. Cuanto más se acerque a 1, más baja la loss.
</div>

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

- `fit`: recorre las 120 filas **30 veces** (épocas) y ajusta los pesos
- `evaluate`: una pasada por las 30 filas de prueba, sin ajustar nada

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
- Otra red: **11 entradas** (12 columnas − 1 a predecir) y **11 salidas** (calidad 0–10)
- Todo lo demás queda igual

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
