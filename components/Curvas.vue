<script setup lang="ts">
// Curvas ilustrativas.
// tipo 'entrenamiento': loss baja y accuracy sube (idea de fig. 3.19)
// tipo 'overfitting': entrenamiento sigue mejorando, prueba empeora (sección 3.9)
import { computed } from 'vue'

const props = withDefaults(defineProps<{ tipo?: 'entrenamiento' | 'overfitting' }>(), { tipo: 'entrenamiento' })

const W = 520, H = 290, L = 46, R = 20, T = 30, B = 44
const N = 60
const xs = (i: number) => L + (i / (N - 1)) * (W - L - R)
const ys = (v: number) => H - B - v * (H - T - B)
const wobble = (i: number) => 0.025 * Math.sin(i * 1.7) + 0.015 * Math.sin(i * 3.1)

const series = computed(() => {
  if (props.tipo === 'entrenamiento') {
    return [
      { name: 'loss (error)', color: '#e05d5d', f: (i: number) => 0.08 + 0.85 * Math.exp(-i / 13) + wobble(i) * 0.6 },
      { name: 'accuracy (aciertos)', color: '#005187', f: (i: number) => 0.3 + 0.62 * (1 - Math.exp(-i / 12)) + wobble(i) },
    ]
  }
  return [
    { name: 'entrenamiento', color: '#005187', f: (i: number) => 0.35 + 0.63 * (1 - Math.exp(-i / 14)) },
    { name: 'prueba', color: '#d9921a', f: (i: number) => 0.33 + 0.5 * (1 - Math.exp(-i / 10)) - Math.max(0, i - 24) ** 1.6 * 0.0028 },
  ]
})
const paths = computed(() => series.value.map(s => ({
  ...s,
  d: Array.from({ length: N }, (_, i) => (i ? 'L' : 'M') + xs(i).toFixed(1) + ' ' + ys(Math.min(1, Math.max(0, s.f(i)))).toFixed(1)).join(''),
})))
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${H}`" class="cv">
    <rect v-if="tipo === 'overfitting'" :x="xs(26)" :y="T" :width="xs(N - 1) - xs(26)" :height="H - T - B" class="zone" />
    <text v-if="tipo === 'overfitting'" :x="(xs(26) + xs(N - 1)) / 2" :y="H - B - 14" class="zt">zona de overfitting</text>
    <line v-if="tipo === 'overfitting'" :x1="xs(24)" :y1="T + 30" :x2="xs(24)" :y2="H - B" class="bestl" />
    <text v-if="tipo === 'overfitting'" :x="xs(24)" :y="H - B + 16" class="best">mejor punto</text>
    <line :x1="L" :y1="H - B" :x2="W - R" :y2="H - B" class="ax" />
    <line :x1="L" :y1="H - B" :x2="L" :y2="T - 6" class="ax" />
    <text :x="W - R" :y="H - 12" class="axt" style="text-anchor: end">épocas →</text>
    <path v-for="p in paths" :key="p.name" :d="p.d" :stroke="p.color" class="ln" />
    <g v-for="(p, i) in paths" :key="'lg' + i" :transform="`translate(${L + 14 + i * 190} ${H - B + 0})`">
      <rect x="0" y="-12" width="0" height="0" />
    </g>
    <g :transform="`translate(${L + 12} 8)`">
      <g v-for="(p, i) in paths" :key="'k' + i" :transform="`translate(${i * 200} 0)`">
        <line x1="0" y1="8" x2="22" y2="8" :stroke="p.color" stroke-width="4" stroke-linecap="round" />
        <text x="30" y="13" class="lg">{{ p.name }}</text>
      </g>
    </g>
  </svg>
</template>

<style scoped>
.cv { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.ax { stroke: #0a3357; stroke-width: 1.5; }
.axt { font-size: 12px; fill: #4d82bc; text-anchor: middle; }
.ln { fill: none; stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; }
.lg { font-size: 13px; fill: #0a3357; font-weight: 600; }
.zone { fill: rgba(224, 93, 93, .08); }
.zt { font-size: 13px; fill: #e05d5d; font-weight: 700; text-anchor: middle; }
.bestl { stroke: #2e9e6a; stroke-width: 2; stroke-dasharray: 5 4; }
.best { font-size: 12px; fill: #2e9e6a; font-weight: 700; text-anchor: middle; }
</style>
