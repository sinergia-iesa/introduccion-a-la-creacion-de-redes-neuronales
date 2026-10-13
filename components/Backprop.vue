<script setup lang="ts">
// Ejemplo de Karatas (2024), fig. 3.12–3.13: red 2-2-2.
// El error de cada salida se reparte hacia atrás en proporción a los pesos.
import { computed, useId } from 'vue'
const uid = useId()

const props = withDefaults(defineProps<{ step?: number }>(), { step: 0 })

// W1[i][j]: entrada i → oculta j ; W2[i][j]: oculta i → salida j
const W1 = [[0.2, 0.2], [0.4, 0.7]]
const W2 = [[0.6, 0.3], [0.7, 0.2]]
const actual = [0.7, 0.3]
const target = [1, 0]
const eo = target.map((t, i) => t - actual[i])
const back = (W: number[][], e: number[]) =>
  [0, 1].map(i => [0, 1].reduce((s, j) => s + (W[i][j] / (W[0][j] + W[1][j])) * e[j], 0))
const eh = back(W2, eo)
const ei = back(W1, eh)
const f = (n: number, d = 3) => (n >= 0 ? '' : '−') + Math.abs(n).toFixed(d)

const X = [130, 360, 590]
const Y = [95, 255]
const R = 36
const s = computed(() => props.step)
const formula = computed(() => [
  'Error = valor esperado − valor obtenido',
  `e(oculta 1) = 0.6/(0.6+0.7)·0.3 + 0.3/(0.3+0.2)·(−0.3) ≈ ${f(eh[0])}`,
  'Se repite hasta la primera capa: todas las neuronas reciben su parte',
][Math.min(s.value, 2)])
</script>

<template>
  <svg viewBox="0 0 800 420" class="bp">
    <defs>
      <marker :id="uid + '0'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0L10 5L0 10z" fill="#e05d5d" />
      </marker>
    </defs>
    <text v-for="(t, k) in ['Entrada', 'Oculta', 'Salida']" :key="t" :x="X[k]" y="28" class="lbl">{{ t }}</text>

    <g v-for="i in 2" :key="'a' + i">
      <line v-for="j in 2" :key="j" :x1="X[0] + R" :y1="Y[i - 1]" :x2="X[1] - R" :y2="Y[j - 1]" :class="['edge', { on: s >= 2 }]" />
      <line v-for="j in 2" :key="'b' + j" :x1="X[1] + R" :y1="Y[i - 1]" :x2="X[2] - R" :y2="Y[j - 1]" :class="['edge', { on: s >= 1 }]" />
    </g>
    <!-- pesos -->
    <text :x="X[1] + 70" :y="Y[0] - 10" class="w">0.6</text>
    <text :x="X[1] + 58" :y="Y[0] + 42" class="w">0.3</text>
    <text :x="X[1] + 58" :y="Y[1] - 30" class="w">0.7</text>
    <text :x="X[1] + 70" :y="Y[1] + 24" class="w">0.2</text>
    <text :x="X[0] + 70" :y="Y[0] - 10" class="w">0.2</text>
    <text :x="X[0] + 58" :y="Y[0] + 42" class="w">0.2</text>
    <text :x="X[0] + 58" :y="Y[1] - 30" class="w">0.4</text>
    <text :x="X[0] + 70" :y="Y[1] + 24" class="w">0.7</text>

    <g v-for="(x, k) in X" :key="k">
      <circle v-for="(y, i) in Y" :key="i" :cx="x" :cy="y" :r="R"
        :class="['node', { hot: (k === 2) || (k === 1 && s >= 1) || (k === 0 && s >= 2) }]" />
    </g>

    <!-- salida: obtenido vs esperado -->
    <g v-for="i in 2" :key="'o' + i">
      <text :x="X[2]" :y="Y[i - 1] + 6" class="nv">{{ actual[i - 1] }}</text>
      <text :x="X[2] + R + 62" :y="Y[i - 1] - 8" class="small">esperado</text>
      <text :x="X[2] + R + 62" :y="Y[i - 1] + 14" class="big">{{ target[i - 1] }}</text>
      <rect :x="X[2] - 50" :y="Y[i - 1] + R + 8" width="100" height="26" rx="13" class="err" />
      <text :x="X[2]" :y="Y[i - 1] + R + 26" class="et">e = {{ f(eo[i - 1], 1) }}</text>
    </g>
    <!-- oculta -->
    <g v-if="s >= 1" class="fade">
      <g v-for="i in 2" :key="'h' + i">
        <rect :x="X[1] - 50" :y="Y[i - 1] + R + 8" width="100" height="26" rx="13" class="err" />
        <text :x="X[1]" :y="Y[i - 1] + R + 26" class="et">{{ f(eh[i - 1]) }}</text>
      </g>
    </g>
    <g v-if="s >= 2" class="fade">
      <g v-for="i in 2" :key="'i' + i">
        <rect :x="X[0] - 50" :y="Y[i - 1] + R + 8" width="100" height="26" rx="13" class="err" />
        <text :x="X[0]" :y="Y[i - 1] + R + 26" class="et">{{ f(ei[i - 1]) }}</text>
      </g>
    </g>
    <!-- flecha de dirección -->
    <line x1="560" y1="352" x2="160" y2="352" class="dir" :marker-end="`url(#${uid}0)`" />
    <text x="360" y="346" class="dirt">el error viaja de derecha a izquierda</text>

    <rect x="80" y="370" width="640" height="40" rx="10" class="fbox" />
    <text x="400" y="396" class="ft">{{ formula }}</text>
  </svg>
</template>

<style scoped>
.bp { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.lbl { font: 600 15px 'Poppins', sans-serif; fill: #005187; text-anchor: middle; }
.edge { stroke: #c4dafa; stroke-width: 1.6; transition: all .4s; }
.edge.on { stroke: #f2a6a6; stroke-width: 2.6; }
.w { font-size: 13px; fill: #4d82bc; font-weight: 600; text-anchor: middle; }
.node { fill: #fff; stroke: #005187; stroke-width: 2.5; transition: all .4s; }
.node.hot { stroke: #e05d5d; fill: #fff3f3; }
.nv { font-size: 17px; font-weight: 700; text-anchor: middle; fill: #0a3357; }
.small { font-size: 11px; fill: #4d82bc; text-anchor: middle; }
.big { font-size: 18px; font-weight: 700; fill: #005187; text-anchor: middle; }
.err { fill: #e05d5d; }
.et { font-size: 13px; font-weight: 700; fill: #fff; text-anchor: middle; }
.dir { stroke: #e05d5d; stroke-width: 2; stroke-dasharray: 6 5; }
.dirt { font-size: 12px; fill: #e05d5d; text-anchor: middle; font-style: italic; }
.fbox { fill: #eaf2fd; stroke: #c4dafa; }
.ft { font: 600 15px 'Inter', sans-serif; fill: #0a3357; text-anchor: middle; }
.fade { animation: fin .45s ease; }
@keyframes fin { from { opacity: 0 } to { opacity: 1 } }
</style>
