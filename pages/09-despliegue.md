---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">9</div>

# Usar el modelo

<div class="prep-subtitle">Guardar, cargar y predecir</div>

---
class: prep-ambiente
hideInToc: true
clicks: 3
---

<div class="prep-eyebrow">Despliegue</div>

# De la práctica al campo

<div class="fig mt-10">
  <Despliegue :step="$clicks" />
</div>

<div class="frase sol mt-10">
  Sin los <b>tres archivos</b> no se puede usar el modelo: la red, el escalador y el codificador.
</div>

<Fuente texto="Basado en Karatas (2024), sección 3.15" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-6a" />

<div class="prep-eyebrow">Despliegue</div>

# Guardar

- `LabelEncoder` recuerda qué número es cada especie
- El escalador recuerda **media y desviación**

<div class="frase sol">
  El libro guarda <code>model1.h5</code>; hoy Keras recomienda <code>.keras</code>.
</div>

::right::

```python
import joblib
from sklearn.preprocessing import LabelEncoder, StandardScaler

le = LabelEncoder()
col = le.fit_transform(data['species'])

s_scaler = StandardScaler()
data = s_scaler.fit_transform(data.drop(['species'], axis=1))

# ... construir, entrenar y probar ...

model.save('model1.keras')
joblib.dump(s_scaler, 'scaler1.joblib')
joblib.dump(le, 'le1.joblib')
```

<Fuente texto="Código: Karatas (2024), listados 3.40 a 3.44" />

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<Cuaderno chip nombre="K3_iris-6b" />

<div class="prep-eyebrow">Despliegue</div>

# Cargar y predecir

- `transform`, **no** `fit_transform`: el mismo escalador
- `argmax` → posición de la probabilidad más alta
- `inverse_transform` → de número a nombre

::right::

```python
import numpy as np
data = pd.read_csv("iris_test.csv")

s_scaler = joblib.load('scaler1.joblib')
data = s_scaler.transform(data)
le = joblib.load('le1.joblib')

model = tf.keras.models.load_model('model1.keras')
pred = model.predict(data)      # [[0.96 0.03 0.00]]

num = np.argmax(pred)           # 0
print(le.inverse_transform([num]))   # ['Setosa']
```

<Fuente texto="Código: Karatas (2024), listados 3.49 a 3.53" />
