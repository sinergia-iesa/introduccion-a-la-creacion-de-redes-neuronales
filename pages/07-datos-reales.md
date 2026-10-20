---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">7</div>

# Datos del mundo real

<div class="prep-subtitle">Texto, huecos, correlaciones y escalas</div>

<div class="intro">
  <div><div class="k">Qué es</div><p>Tablas reales: con texto, celdas vacías, columnas que no aportan y números en escalas muy distintas.</p></div>
  <div><div class="k">Para qué sirve</div><p>Preparar bien los datos suele pesar más que la red misma. Y también hay que decidir qué datos es <b>ético</b> usar.</p></div>
  <div><div class="k">Qué verás</div><p>One Hot Encoding, datos con huecos, correlación vs. causalidad, sesgos (dataset Adult) y estandarización.</p></div>
</div>

---
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-2" />

<div class="prep-eyebrow">Datos del mundo real</div>

# Texto → números: dos caminos

<div class="fig mt-6">
  <OneHot />
</div>

<div class="frase mt-6">
  Con 0, 1, 2 la red podría tratar a Virginica (2) como «más» que Setosa (0). OHE evita eso: una columna por clase, con un solo 1. Si lo usas en las <b>entradas</b>, cada categoría suma una neurona de entrada.
</div>

<div class="frase sol mt-3">
  Respuesta en OHE → <code>loss='categorical_crossentropy'</code>. En el libro, con 50 épocas, llega <b>hasta 100 %</b>.
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.10 y tabla 3.2" />

---
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-3" />

<div class="prep-eyebrow">Datos del mundo real</div>

# Datos con huecos

<div class="fig mt-4">
  <Huecos />
</div>

<div class="frase sol mt-5">
  Encuéntralos con <code>data.columns[data.isnull().any()]</code>. Si rellenas la especie con «empty», aparece una 4.ª clase: la salida pasa a <b>4 neuronas</b>. Prueba ambas estrategias y quédate con la mejor.
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.11" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Datos del mundo real</div>

# Correlación ≠ causalidad

<div class="fig mt-2">
  <Correlacion />
</div>

<div class="frase alerta mt-4">
  Correlación: dos cosas cambian juntas. Causalidad: una provoca la otra. Las personas altas ganan más… pero los hombres suelen ser más altos y ganar más. La causa no es la altura, y la red solo ve la correlación.
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.12" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Datos del mundo real</div>

# La IA aprende nuestros sesgos

<div class="tarjetas c3 mt-4">
  <div class="tarjeta"><div class="t"><carbon:data-table /> Dataset Adult</div><div class="d">¿Gana más de 50 000 USD al año? Censo de EE. UU., 1994</div></div>
  <div class="tarjeta"><div class="t"><carbon:warning /> El riesgo</div><div class="d">Si hubo discriminación, la red la <b>aprende y la repite</b></div></div>
  <div class="tarjeta"><div class="t"><carbon:scales /> No basta</div><div class="d">Quitar raza y sexo ayuda, pero otras columnas pueden delatarlos</div></div>
</div>

<div class="tarjeta dark mt-6" style="text-align: center;">
  <div class="t" style="justify-content: center;">«La IA solo es tan buena como los datos con que se entrena.»</div>
  <div class="d">Las decisiones discriminatorias no son culpa de la IA, sino de quien no lo pensó.</div>
</div>

<Fuente texto="Basado en Karatas (2024), secciones 3.12 y 3.13" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_adult-1" />

<div class="prep-eyebrow">Datos del mundo real</div>

# Medir las correlaciones

- Suma de **|correlación|** de cada columna con todas las demás
- En valor absoluto, para que +0.8 y −0.8 no se cancelen: ambas indican relación
- Las sumas más bajas son candidatas a salir
- Quitar columnas también es un **hiperparámetro**: hay que probar

::right::

```python
correlations = data.corr(numeric_only=True)
correlations_abs_sum = correlations.abs().sum()
print(correlations_abs_sum.nsmallest(5))

data.drop(['fnlwgt', 'capital.loss', 'capital.gain'],
          axis=1, inplace=True)
```

<Fuente texto="Código: Karatas (2024), listados 3.23 y 3.24" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente code-sm
hideInToc: true
---

<Cuaderno chip nombre="K3_adult-1" />

<div class="prep-eyebrow">Datos del mundo real</div>

# Muchas columnas de texto

- Muchas categorías → **números** (`cat.codes`)
- Pocas categorías → **OHE**
- `data.shape[1]` = nº de columnas: la entrada se ajusta sola

<div class="frase sol">Resultado en el libro: <b>≈ 83 %</b></div>

::right::

```python
conv_num = ['workclass', 'education', 'marital.status',
            'occupation', 'relationship',
            'hours.per.week', 'native.country']
data[conv_num] = data[conv_num].astype('category')
data[conv_num] = data[conv_num].apply(lambda x: x.cat.codes)

data = pd.get_dummies(data, columns=['race', 'sex'], dtype=float)

model = tf.keras.Sequential([
    tf.keras.Input(shape=(data.shape[1],)),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(256, activation='relu'),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(2, activation='softmax')
])
```

<Fuente texto="Código: Karatas (2024), listados 3.26 a 3.28" />

---
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_adult-2" />

<div class="prep-eyebrow">Datos del mundo real</div>

# Estandarizar: escalas comparables

<div class="fig" style="max-width: 540px; margin: 0.2rem auto 0;">
  <Escalado />
</div>

<div class="frase mt-2" style="font-size: 0.85rem;">
  Una columna en miles (ingresos) y otra en unidades (habitaciones) no influyen igual en los pesos durante el entrenamiento. Escalar las pone en rangos parecidos.
</div>

<div class="tarjetas c2">
  <div class="tarjeta sol"><div class="d"><b>MinMaxScaler</b> · rangos fijos (píxeles 0–255, horas por semana)</div></div>
  <div class="tarjeta"><div class="d"><b>StandardScaler</b> · datos tipo campana (edad, estatura, ingresos)</div></div>
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.13" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_adult-2" />

<div class="prep-eyebrow">Datos del mundo real</div>

# Estandarizar en código

- En el libro mejora **1–2 %**
- En producción: `fit_transform` **solo** con entrenamiento, y `transform` para la prueba

::right::

```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler

s_scaler = StandardScaler()
m_scaler = MinMaxScaler()

cols_s = ['age', 'education.num', 'occupation']
data[cols_s] = s_scaler.fit_transform(data[cols_s])

cols_m = ['hours.per.week']
data[cols_m] = m_scaler.fit_transform(data[cols_m])
```

<Fuente texto="Código: Karatas (2024), listados 3.30 a 3.34 (resumidos)" />
