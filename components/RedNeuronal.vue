<script setup lang="ts">
// Red neuronal genérica por capas (idea de Karatas 2024, fig. 3.7).
// capas: tamaño REAL de cada capa. Si una capa es grande se dibujan
// solo unas pocas neuronas con "⋮" y el número real debajo.
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  capas?: number[]
  entradas?: string[]
  salidas?: string[]
  resaltar?: 'ninguna' | 'entrada' | 'ocultas' | 'salida'
  alto?: number
}>(), { capas: () => [3, 3, 3], resaltar: 'ninguna', alto: 330 })

const MAXN = 6
const W = 760
const H = computed(() => props.alto)
const xs = computed(() => {
  const n = props.capas.length
  const left = props.entradas ? 150 : 70
  const right = props.salidas ? W - 170 : W - 70
  return props.capas.map((_, k) => left + (k * (right - left)) / (n - 1))
})
const nodes = computed(() => props.capas.map((n, k) => {
  const big = n > MAXN
  const shown = big ? MAXN : n
  const gap = Math.min(shown <= 3 ? 90 : 52, (H.value - 90) / Math.max(shown - 1, 1))
  const top = (H.value - 40) / 2 - ((shown - 1) * gap) / 2 + 6
  return Array.from({ length: shown }, (_, i) => ({
    x: xs.value[k], y: top + i * gap, dots: big && i === shown - 2,
  }))
}))
const r = computed(() => Math.min(26, 300 / (Math.max(...props.capas.map(c => Math.min(c, MAXN))) * 3)))
const nombre = (k: number) => k === 0 ? 'Entrada' : k === props.capas.length - 1 ? 'Salida' : 'Oculta'
const hot = (k: number) => (props.resaltar === 'entrada' && k === 0)
  || (props.resaltar === 'salida' && k === props.capas.length - 1)
  || (props.resaltar === 'ocultas' && k > 0 && k < props.capas.length - 1)
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${H}`" class="rn">
    <!-- aristas -->
    <g v-for="k in capas.length - 1" :key="'e' + k">
      <template v-for="(a, i) in nodes[k - 1]" :key="i">
        <line v-for="(b, j) in nodes[k]" v-show="!a.dots && !b.dots" :key="j"
          :x1="a.x" :y1="a.y" :x2="b.x" :y2="b.y" class="edge" />
      </template>
    </g>
    <!-- banda de capas ocultas -->
    <g v-if="capas.length > 2 && resaltar === 'ocultas'">
      <rect :x="xs[1] - 40" y="4" :width="xs[capas.length - 2] - xs[1] + 80" :height="H - 40" rx="18" class="band" />
    </g>
    <!-- neuronas -->
    <g v-for="(layer, k) in nodes" :key="'l' + k">
      <template v-for="(n, i) in layer" :key="i">
        <text v-if="n.dots" :x="n.x" :y="n.y + 8" class="dots">⋮</text>
        <circle v-else :cx="n.x" :cy="n.y" :r="r" :class="['node', { hot: hot(k) }]" />
      </template>
      <text :x="xs[k]" :y="H - 22" class="name">{{ nombre(k) }}</text>
      <text :x="xs[k]" :y="H - 4" class="count">{{ capas[k] }} {{ capas[k] === 1 ? 'neurona' : 'neuronas' }}</text>
    </g>
    <!-- etiquetas de entrada y salida -->
    <g v-if="entradas">
      <text v-for="(t, i) in entradas" :key="t" :x="xs[0] - r - 12" :y="nodes[0][i]?.y + 5" class="io end">{{ t }}</text>
    </g>
    <g v-if="salidas">
      <text v-for="(t, i) in salidas" :key="t" :x="xs[capas.length - 1] + r + 12" :y="nodes[capas.length - 1][i]?.y + 5" class="io">{{ t }}</text>
    </g>
  </svg>
</template>

<style scoped>
.rn { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.edge { stroke: #c4dafa; stroke-width: 1.2; }
.node { fill: #fff; stroke: #005187; stroke-width: 2.4; }
.node.hot { fill: #fff7e0; stroke: #d9921a; stroke-width: 3; }
.band { fill: rgba(242, 182, 50, 0.1); stroke: #f2b632; stroke-dasharray: 6 5; }
.dots { font-size: 26px; fill: #4d82bc; text-anchor: middle; }
.name { font: 600 14px 'Poppins', sans-serif; fill: #005187; text-anchor: middle; }
.count { font-size: 12px; fill: #4d82bc; text-anchor: middle; }
.io { font-size: 14px; fill: #0a3357; font-weight: 600; }
.io.end { text-anchor: end; }
</style>
