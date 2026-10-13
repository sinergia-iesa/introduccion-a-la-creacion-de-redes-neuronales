<script setup lang="ts">
// Ejemplo numérico de Karatas (2024), fig. 3.10–3.11: red 3-3-3 con
// entradas 0.7, 0.2, 0.3. Los valores se CALCULAN aquí (no están escritos
// a mano), así que coinciden con el libro: 0.63 → 0.65, etc.
import { computed, useId } from 'vue'
const uid = useId()

const props = withDefaults(defineProps<{ step?: number }>(), { step: 0 })

const inp = [0.7, 0.2, 0.3]
// W1[i][j]: de la entrada i a la oculta j
const W1 = [[0.8, 0.3, 0.2], [0.2, 0.4, 0.7], [0.1, 0.2, 0.4]]
// W2[i][j]: de la oculta i a la salida j
const W2 = [[0.6, 0.4, 0.3], [0.3, 0.5, 0.6], [0.2, 0.4, 0.2]]
const sig = (x: number) => 1 / (1 + Math.exp(-x))
const hx = [0, 1, 2].map(j => inp.reduce((s, v, i) => s + v * W1[i][j], 0))
const r2 = (n: number) => Math.round(n * 100 + 1e-9) / 100
const ho = hx.map(v => r2(sig(r2(v))))   // el libro redondea cada paso
const ox = [0, 1, 2].map(j => r2(ho.reduce((s, v, i) => s + v * W2[i][j], 0)))
const oo = ox.map(v => r2(sig(v)))
const f = (n: number) => r2(n).toFixed(2)

const X = [150, 390, 630]
const Y = [100, 210, 320]
const R = 34

const s = computed(() => props.step)
const formula = computed(() => {
  if (s.value === 0) return 'Las entradas pasan tal cual a la primera capa'
  if (s.value === 1) return `x = 0.7·0.8 + 0.2·0.2 + 0.3·0.1 = ${f(hx[0])}`
  if (s.value === 2) return `y = sigmoide(${f(hx[0])}) = ${f(ho[0])}`
  if (s.value === 3) return 'Lo mismo para cada neurona de la capa oculta'
  return 'Y se repite en la capa de salida → resultado'
})
const edgeOn = (layer: number, i: number, j: number) => {
  if (layer === 1 && s.value >= 1 && s.value <= 2) return j === 0
  if (layer === 1 && s.value === 3) return true
  if (layer === 2 && s.value >= 4) return true
  return false
}
</script>

<template>
  <svg viewBox="0 0 780 420" class="ff">
    <defs>
      <marker :id="uid + '0'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill="#4d82bc" />
      </marker>
    </defs>
    <!-- Nombres de capas -->
    <text v-for="(t, k) in ['Entrada', 'Oculta', 'Salida']" :key="t" :x="X[k]" y="22" class="lbl">{{ t }}</text>

    <!-- Aristas -->
    <g v-for="i in 3" :key="'e1' + i">
      <line v-for="j in 3" :key="j" :x1="X[0] + R" :y1="Y[i - 1]" :x2="X[1] - R" :y2="Y[j - 1]"
        :class="['edge', { on: edgeOn(1, i - 1, j - 1) }]" />
    </g>
    <g v-for="i in 3" :key="'e2' + i">
      <line v-for="j in 3" :key="j" :x1="X[1] + R" :y1="Y[i - 1]" :x2="X[2] - R" :y2="Y[j - 1]"
        :class="['edge', { on: edgeOn(2, i - 1, j - 1) }]" />
    </g>
    <!-- Pesos de la neurona destacada -->
    <g v-if="s >= 1 && s <= 2">
      <text v-for="i in 3" :key="'w' + i" :x="X[0] + R + 62" :y="Y[i - 1] + (Y[0] - Y[i - 1]) * 0.36 - 8" class="w">{{ W1[i - 1][0] }}</text>
    </g>

    <!-- Entradas -->
    <g v-for="(v, i) in inp" :key="'in' + i">
      <line :x1="30" :y1="Y[i]" :x2="X[0] - R - 4" :y2="Y[i]" class="arrow" :marker-end="`url(#${uid}0)`" />
      <text :x="62" :y="Y[i] - 10" class="val">{{ v }}</text>
    </g>

    <!-- Neuronas -->
    <g v-for="(x, k) in X" :key="'L' + k">
      <circle v-for="(y, i) in Y" :key="i" :cx="x" :cy="y" :r="R"
        :class="['node', { hot: (k === 1 && i === 0 && s >= 1 && s <= 2) || (k === 1 && s === 3) || (k === 2 && s >= 4) }]" />
    </g>
    <text v-for="(v, i) in inp" :key="'iv' + i" :x="X[0]" :y="Y[i] + 6" class="nv">{{ v }}</text>

    <!-- Capa oculta: x (entrada calculada) y y (salida) -->
    <g v-for="i in 3" :key="'h' + i">
      <g v-if="s >= 3 || (i === 1 && s >= 1)" class="fade">
        <rect :x="X[1] - 58" :y="Y[i - 1] - R - 22" width="52" height="24" rx="12" class="pill-in" />
        <text :x="X[1] - 32" :y="Y[i - 1] - R - 5" class="pt">{{ f(hx[i - 1]) }}</text>
      </g>
      <g v-if="s >= 3 || (i === 1 && s >= 2)" class="fade">
        <rect :x="X[1] + 6" :y="Y[i - 1] - R - 22" width="52" height="24" rx="12" class="pill-out" />
        <text :x="X[1] + 32" :y="Y[i - 1] - R - 5" class="pt w">{{ f(ho[i - 1]) }}</text>
      </g>
    </g>
    <!-- Salida -->
    <g v-for="i in 3" :key="'o' + i">
      <g v-if="s >= 4" class="fade">
        <rect :x="X[2] - 58" :y="Y[i - 1] - R - 22" width="52" height="24" rx="12" class="pill-in" />
        <text :x="X[2] - 32" :y="Y[i - 1] - R - 5" class="pt">{{ f(ox[i - 1]) }}</text>
        <line :x1="X[2] + R + 4" :y1="Y[i - 1]" :x2="X[2] + R + 60" :y2="Y[i - 1]" class="arrow" :marker-end="`url(#${uid}0)`" />
        <rect :x="X[2] + R + 66" :y="Y[i - 1] - 14" width="56" height="28" rx="14" class="pill-out" />
        <text :x="X[2] + R + 94" :y="Y[i - 1] + 6" class="pt w">{{ f(oo[i - 1]) }}</text>
      </g>
    </g>

    <!-- Fórmula -->
    <rect x="140" y="374" width="500" height="40" rx="10" class="fbox" />
    <text x="390" y="401" class="ft">{{ formula }}</text>
  </svg>
</template>

<style scoped>
.ff { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.lbl { font: 600 15px 'Poppins', sans-serif; fill: #005187; text-anchor: middle; }
.edge { stroke: #c4dafa; stroke-width: 1.5; transition: all .4s; }
.edge.on { stroke: #f2b632; stroke-width: 3; }
.arrow { stroke: #4d82bc; stroke-width: 2; }
.val { font-size: 15px; fill: #0a3357; text-anchor: middle; font-weight: 600; }
.node { fill: #fff; stroke: #005187; stroke-width: 2.5; transition: all .4s; }
.node.hot { fill: #fff7e0; stroke: #d9921a; }
.nv { font-size: 16px; text-anchor: middle; fill: #0a3357; font-weight: 600; }
.w { font-size: 14px; fill: #b7770f; font-weight: 700; text-anchor: middle; }
.pill-in { fill: #c4dafa; }
.pill-out { fill: #005187; }
.pt { font-size: 13px; text-anchor: middle; fill: #0a3357; font-weight: 700; }
.pt.w { fill: #fff; }
.fbox { fill: #eaf2fd; stroke: #c4dafa; }
.ft { font: 600 16px 'Inter', sans-serif; fill: #0a3357; text-anchor: middle; }
.fade { animation: fin .45s ease; }
@keyframes fin { from { opacity: 0 } to { opacity: 1 } }
</style>
