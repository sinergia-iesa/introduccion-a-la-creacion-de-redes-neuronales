---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">10</div>

# Para practicar

<div class="prep-subtitle">Resumen, ejercicios y referencias</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Resumen</div>

# La combinación que hay que acertar

<table class="resumen mt-6">
  <thead><tr><th>Problema</th><th>Respuesta codificada</th><th>Capa de salida</th><th>loss</th></tr></thead>
  <tbody>
    <tr><td>Clasificación</td><td>0, 1, 2… (<code>cat.codes</code>, LabelEncoder)</td><td>N neuronas · softmax</td><td><code>sparse_categorical_crossentropy</code></td></tr>
    <tr><td>Clasificación</td><td>OHE (<code>get_dummies</code>, OneHotEncoder)</td><td>N neuronas · softmax</td><td><code>categorical_crossentropy</code></td></tr>
    <tr><td>Regresión</td><td>el número tal cual</td><td>1 neurona · sin activación</td><td><code>mae</code></td></tr>
  </tbody>
</table>

<div class="frase sol mt-6">
  Lo demás casi no cambia: preparar los datos y armar las 4 tablas es la mayor parte del trabajo.
</div>

<Fuente texto="Resumen elaborado a partir de Karatas (2024), capítulo 3" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Ejercicios del libro</div>

# Tu turno

<div class="tarjetas c2 mt-4">
  <div class="tarjeta"><div class="t">1 · Afinar la clasificación</div><div class="d">Copia <code>K3_iris-2</code>: cambia capas, neuronas (4, 8, 16, 32…), activación y épocas</div></div>
  <div class="tarjeta"><div class="t">2 · Afinar la regresión</div><div class="d">Copia <code>K3_iris-5</code> e intenta bajar el error</div></div>
  <div class="tarjeta sol"><div class="t">3 · Hongos: ¿comestible o venenoso?</div><div class="d"><code>mushrooms.csv</code> · kaggle.com/datasets/uciml/mushroom-classification</div></div>
  <div class="tarjeta sol"><div class="t">4 · Precio de diamantes</div><div class="d"><code>diamonds.csv</code> · kaggle.com/datasets/shivam2503/diamonds</div></div>
</div>

<div class="frase alerta mt-4">Cuida el overfitting: si la prueba empeora mientras el entrenamiento mejora, retrocede.</div>

<Fuente texto="Ejercicios: Karatas (2024), sección 3.16" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Referencias</div>

# Referencias

<div class="refs mt-4">
  <p><b>Karatas, M. (2024).</b> <i>Developing AI Applications: An Introduction</i> (cap. 3, «Artificial Neural Networks»). Rheinwerk Publishing. https://www.sap-press.com/5899</p>
  <p>Fisher, R. A. (1936). The use of multiple measurements in taxonomic problems. <i>Annals of Eugenics, 7</i>(2), 179–188. (Dataset Iris)</p>
  <p>Cortez, P., Cerdeira, A., Almeida, F., Matos, T. y Reis, J. (2009). <i>Wine Quality</i> [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C56S3T</p>
  <p>Becker, B. y Kohavi, R. (1996). <i>Adult</i> [Dataset]. UCI Machine Learning Repository. https://doi.org/10.24432/C5XW20</p>
  <p>Herramientas: TensorFlow / Keras, pandas, scikit-learn, Google Colab y Slidev.</p>
</div>

---
layout: center
class: prep-ambiente prep-divider text-center
hideInToc: true
---

# ¡A entrenar redes!

<div class="prep-subtitle">Basado en <i>Developing AI Applications</i> · Metin Karatas (2024), capítulo 3</div>

<div class="prep-subtitle" style="margin-top: 1.4rem; font-size: 0.8rem;">github.com/sinergia-iesa/introduccion-a-la-creacion-de-redes-neuronales</div>
