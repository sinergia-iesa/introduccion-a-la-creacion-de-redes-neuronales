---
layout: center
class: prep-ambiente prep-divider text-center
---

<div class="prep-step-badge mx-auto">4</div>

# Manos a la obra

<div class="prep-subtitle">Los cuadernos y los datos del capítulo, en Google Colab</div>

<div class="intro">
  <div><div class="k">Qué es</div><p><b>Google Colab</b>: cuadernos de Python que se ejecutan en el navegador, sin instalar nada en tu computadora.</p></div>
  <div><div class="k">Para qué sirve</div><p>Correr los programas del capítulo con sus datos y experimentar cambiando el código.</p></div>
  <div><div class="k">Qué verás</div><p>Los 9 cuadernos y los 5 archivos de datos, cómo guardar tu copia, subir un CSV y leerlo con pandas.</p></div>
</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Material</div>

# Los cuadernos

<div class="tarjetas c3" style="gap: 10px; margin-top: 0.3rem;">
  <Cuaderno nombre="K3_iris-1" desc="Tu primera red: clasificar el iris" datos="iris.csv" />
  <Cuaderno nombre="K3_redwine-1" desc="Calidad del vino · hiperparámetros" datos="winequality-red.csv" />
  <Cuaderno nombre="K3_iris-2" desc="One Hot Encoding" datos="iris.csv" />
  <Cuaderno nombre="K3_iris-3" desc="Datos con huecos: rellenar o eliminar" datos="iris_empty.csv" />
  <Cuaderno nombre="K3_adult-1" desc="Correlaciones y ética" datos="adult-2.csv" />
  <Cuaderno nombre="K3_adult-2" desc="Estandarizar los datos" datos="adult-2.csv" />
  <Cuaderno nombre="K3_iris-5" desc="Regresión: predecir un número" datos="iris.csv" />
  <Cuaderno nombre="K3_iris-6a" desc="Entrenar y guardar el modelo" datos="iris.csv" />
  <Cuaderno nombre="K3_iris-6b" desc="Cargar el modelo y predecir" datos="iris_test.csv" />
</div>

<Fuente texto="Adaptados a Colab a partir de los programas del capítulo 3 de Karatas (2024)" />

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Material</div>

# Los datos

<div class="tarjetas c2" style="gap: 12px; margin-top: 0.6rem;">
  <Datos archivo="iris.csv" desc="150 flores · 4 medidas + especie" sep="," />
  <Datos archivo="winequality-red.csv" desc="1 599 vinos · 11 propiedades + calidad" sep=";" />
  <Datos archivo="iris_empty.csv" desc="El iris con algunas celdas vacías" sep="," />
  <Datos archivo="adult-2.csv" desc="32 561 personas · censo EE. UU. 1994" sep=";" />
  <Datos archivo="iris_test.csv" desc="Una flor nueva, sin especie" sep="," />
</div>

<div class="frase sol mt-5">
  Se descargan a tu computadora. En la siguiente diapositiva los subes a Colab.
</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Tutorial</div>

# Guardar tu copia en Drive

<div class="pasos">
  <div class="paso-t"><span class="n">1</span><div>Abre el cuaderno con el botón <b>«Abrir en Colab»</b></div></div>
  <div class="paso-t"><span class="n">2</span><div>Menú <b>Archivo → Guardar una copia en Drive</b></div></div>
  <div class="paso-t"><span class="n">3</span><div>Se abre la pestaña <b>«Copia de…»</b>: trabaja siempre en esa</div></div>
  <div class="paso-t"><span class="n">4</span><div>Queda en Drive, carpeta <b>«Colab Notebooks»</b>, y se guarda sola</div></div>
</div>

<div class="frase alerta mt-4">Si cierras el original sin guardar una copia, <b>se pierden tus cambios</b>.</div>

---
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Tutorial</div>

# Subir un archivo a Colab

<div class="pasos">
  <div class="paso-t"><span class="n">1</span><div>Clic en <b>«Conectar»</b>, arriba a la derecha</div></div>
  <div class="paso-t"><span class="n">2</span><div>Abre el panel de archivos: ícono de <b>carpeta</b> a la izquierda</div></div>
  <div class="paso-t"><span class="n">3</span><div>Botón de <b>subir</b> (hoja con flecha) y elige el CSV</div></div>
  <div class="paso-t"><span class="n">4</span><div>El archivo aparece junto a <code>sample_data</code>: ¡listo!</div></div>
</div>

<div class="frase alerta mt-4">Los archivos subidos <b>se borran al terminar la sesión</b>. Si te desconectas, súbelo de nuevo.</div>

---
layout: two-cols
layoutClass: gap-8 items-center cols-code
class: prep-ambiente
hideInToc: true
---

<div class="prep-eyebrow">Tutorial</div>

# Leer el archivo con pandas

- Con el archivo subido, basta con su **nombre**
- Revisa el **separador**: `,` o `;`
- Sin subir nada: usa la línea comentada con la **URL**

<div class="frase alerta">
  ¿<code>FileNotFoundError</code>? Revisa que el archivo esté en el panel y que el nombre sea exacto.
</div>

::right::

```python
import pandas as pd

path = "iris.csv"
# path = "https://sinergia-iesa.github.io/introduccion-a-la-creacion-de-redes-neuronales/data/iris.csv"

data = pd.read_csv(path, delimiter=',')
print(data.head())
```
