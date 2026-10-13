# Introducción a la creación de redes neuronales

Presentación didáctica hecha con [Slidev](https://sli.dev) sobre **redes neuronales artificiales**, con sus cuadernos de Google Colab y sus datos. Se despliega sola en GitHub Pages con GitHub Actions.

**Presentación:** https://sinergia-iesa.github.io/introduccion-a-la-creacion-de-redes-neuronales/

## Crédito

Todo el contenido conceptual, los ejemplos numéricos y el código se basan en el **capítulo 3, «Artificial Neural Networks»**, de:

> Karatas, M. (2024). *Developing AI Applications: An Introduction*. Rheinwerk Publishing. https://www.sap-press.com/5899

Esta presentación lo adapta al español con fines educativos. Los diagramas fueron rediseñados como componentes Vue/SVG y cada uno indica la figura del libro en que se basa.

## Contenido

| Carpeta | Qué hay |
|---|---|
| `slides.md`, `pages/` | Diapositivas (una página por sección) |
| `components/` | Diagramas como componentes Vue (SVG, sin pérdida de calidad) |
| `notebooks/` | Cuadernos de Colab del capítulo 3 (se abren desde la presentación) |
| `public/data/` | CSV que usan los cuadernos (descargables desde la presentación) |

### Cuadernos

| Cuaderno | Datos | Sección del libro |
|---|---|---|
| `K3_iris-1` | `iris.csv` | 3.8 Primera red |
| `K3_redwine-1` | `winequality-red.csv` | 3.8–3.9 Vino y hiperparámetros |
| `K3_iris-2` | `iris.csv` | 3.10 One Hot Encoding |
| `K3_iris-3` | `iris_empty.csv` | 3.11 Datos con huecos |
| `K3_adult-1` | `adult-2.csv` | 3.12 Correlación y ética |
| `K3_adult-2` | `adult-2.csv` | 3.13 Estandarización |
| `K3_iris-5` | `iris.csv` | 3.14 Regresión |
| `K3_iris-6a` / `K3_iris-6b` | `iris.csv` / `iris_test.csv` | 3.15 Despliegue |

### Datos

- `iris.csv`: Fisher (1936), dominio público.
- `winequality-red.csv`: Cortez et al. (2009), UCI Machine Learning Repository, CC BY 4.0.
- `adult-2.csv`: Becker y Kohavi (1996), UCI Machine Learning Repository, CC BY 4.0. Corresponde a `adult.data` (32 561 filas) con encabezados y con `?` reemplazado por `empty`, como describe el libro.
- `iris_empty.csv` e `iris_test.csv`: derivados de `iris.csv` para los ejemplos de huecos y despliegue.