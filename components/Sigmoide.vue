<script setup lang="ts">
// Gráfica de la función sigmoide (idea de Karatas 2024, fig. 3.9).
// También puede dibujar ReLU para comparar.
import { computed } from 'vue'

const props = withDefaults(defineProps<{ tipo?: 'sigmoide' | 'relu'; punto?: number }>(), { tipo: 'sigmoide' })

const W = 420, H = 260, x0 = 40, y0 = 220, sx = 34, sy = 180
const fx = (x: number) => (props.tipo === 'relu' ? Math.max(0, x) / 6 : 1 / (1 + Math.exp(-x)))
const path = computed(() => {
  let d = ''
  for (let x = -5.5; x <= 5.5; x += 0.1) {
    const px = x0 + (x + 5.5) * sx
    const py = y0 - fx(x) * sy
    d += (d ? 'L' : 'M') + px.toFixed(1) + ' ' + py.toFixed(1)
  }
  return d
})
const P = computed(() => props.punto === undefined ? null : {
  x: x0 + (props.punto + 5.5) * sx, y: y0 - fx(props.punto) * sy, v: fx(props.punto),
})
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${H}`" class="sg">
    <line :x1="x0" :y1="y0" :x2="x0 + 11 * sx" :y2="y0" class="ax" />
    <line :x1="x0 + 5.5 * sx" :y1="y0 + 10" :x2="x0 + 5.5 * sx" y2="20" class="ax" />
    <line v-if="tipo === 'sigmoide'" :x1="x0" :y1="y0 - sy" :x2="x0 + 11 * sx" :y2="y0 - sy" class="guide" />
    <text :x="x0 - 8" :y="y0 + 4" class="t">0</text>
    <text v-if="tipo === 'sigmoide'" :x="x0 - 8" :y="y0 - sy + 4" class="t">1</text>
    <text :x="x0 + 11 * sx" :y="y0 + 22" class="t">x</text>
    <path :d="path" class="curve" />
    <g v-if="P">
      <line :x1="P.x" :y1="y0" :x2="P.x" :y2="P.y" class="guide" />
      <circle :cx="P.x" :cy="P.y" r="6" class="dot" />
      <text :x="P.x + 10" :y="P.y + 18" class="pv">{{ P.v.toFixed(2) }}</text>
    </g>
    <text :x="W / 2" y="252" class="cap">{{ tipo === 'relu' ? 'negativos → 0 · positivos sin cambio' : 'cualquier número → valor entre 0 y 1' }}</text>
  </svg>
</template>

<style scoped>
.sg { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.ax { stroke: #0a3357; stroke-width: 1.5; }
.guide { stroke: #c4dafa; stroke-width: 1.5; stroke-dasharray: 5 4; }
.t { font-size: 13px; fill: #4d82bc; text-anchor: end; }
.curve { fill: none; stroke: #005187; stroke-width: 4; stroke-linecap: round; }
.dot { fill: #f2b632; stroke: #fff; stroke-width: 2; }
.pv { font-size: 14px; font-weight: 700; fill: #b7770f; }
.cap { font-size: 13px; fill: #4d82bc; text-anchor: middle; }
</style>
