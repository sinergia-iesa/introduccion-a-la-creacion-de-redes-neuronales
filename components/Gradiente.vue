<script setup lang="ts">
// Descenso de gradiente (idea de Karatas 2024, fig. 3.14 y 3.15).
// modo: 'normal' | 'grande' | 'pequeno' (tamaño del learning rate)
// curva: 'simple' (un valle) | 'doble' (mínimo local y global)
import { computed, useId } from 'vue'
const uid = useId()

const props = withDefaults(defineProps<{
  step?: number
  modo?: 'normal' | 'grande' | 'pequeno'
  curva?: 'simple' | 'doble'
  mini?: boolean
  titulo?: string
}>(), { step: 99, modo: 'normal', curva: 'simple', mini: false })

const W = props.mini ? 300 : 620
const H = props.mini ? 210 : 330
const pad = props.mini ? 34 : 40
const e = (t: number) => props.curva === 'doble'
  ? 1.9 + 0.6 * Math.sin(1.1 * t + 0.2) - 0.12 * t + 0.03 * (t - 6) ** 2
  : 0.075 * (t - 6.5) ** 2 + 0.25
const tx = (t: number) => pad + (t / 11) * (W - 2 * pad)
const maxE = props.curva === 'doble' ? 3.4 : 3.6
const ty = (v: number) => H - pad - (v / maxE) * (H - 2 * pad - 10)
const path = computed(() => {
  let d = ''
  for (let t = 0; t <= 11.001; t += 0.1) d += (d ? 'L' : 'M') + tx(t).toFixed(1) + ' ' + ty(e(t)).toFixed(1)
  return d
})
const seq = {
  normal: [0.8, 2.6, 4.0, 5.1, 5.8, 6.25, 6.45],
  grande: [1.4, 10.6, 2.6, 10.0, 3.4],
  pequeno: [0.8, 1.15, 1.5, 1.85, 2.2],
}
const locT = (() => { let b = 0, bv = 1e9; for (let t = 1; t <= 6; t += 0.01) if (e(t) < bv) { bv = e(t); b = t } return b })()
const pts = computed(() => props.curva === 'doble' ? [0.4, locT - 1.1, locT - 0.4, locT] : seq[props.modo])
const shown = computed(() => pts.value.slice(0, Math.min(props.step + 1, pts.value.length)))
const cur = computed(() => shown.value[shown.value.length - 1])
const minT = computed(() => {
  let best = 0, bv = 1e9
  for (let t = 0; t <= 11; t += 0.01) if (e(t) < bv) { bv = e(t); best = t }
  return best
})
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${H}`" :class="['gd', { mini }]">
    <defs>
      <marker :id="uid" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0L10 5L0 10z" fill="#d9921a" />
      </marker>
    </defs>
    <text v-if="titulo" :x="W / 2" y="18" class="ttl">{{ titulo }}</text>
    <line :x1="pad" :y1="H - pad" :x2="W - pad + 8" :y2="H - pad" class="ax" />
    <line :x1="pad" :y1="H - pad" :x2="pad" :y2="22" class="ax" />
    <text :x="W - pad" :y="H - pad + 22" class="axt">peso θ</text>
    <text :x="pad - 8" y="34" class="axt end">error</text>
    <path :d="path" class="curve" />
    <!-- mínimo global -->
    <g>
      <circle :cx="tx(minT)" :cy="ty(e(minT))" r="5" class="minp" />
      <text :x="tx(minT)" :y="ty(e(minT)) + 24" class="mint">{{ curva === 'doble' ? 'mínimo global' : 'mínimo' }}</text>
    </g>
    <text v-if="curva === 'doble'" :x="tx(locT)" :y="ty(e(locT)) + 22" class="mint loc">mínimo local</text>
    <!-- saltos -->
    <g v-for="(t, i) in shown.slice(1)" :key="i">
      <path :d="`M${tx(shown[i])} ${ty(e(shown[i])) - 10} Q ${(tx(shown[i]) + tx(t)) / 2} ${Math.min(ty(e(shown[i])), ty(e(t))) - (mini ? 26 : 40)} ${tx(t)} ${ty(e(t)) - 12}`"
        class="hop" :marker-end="`url(#${uid})`" />
    </g>
    <circle v-for="(t, i) in shown.slice(0, -1)" :key="'g' + i" :cx="tx(t)" :cy="ty(e(t)) - 9" r="5" class="ghost" />
    <circle :cx="tx(cur)" :cy="ty(e(cur)) - 10" :r="mini ? 8 : 11" class="ball" />
  </svg>
</template>

<style scoped>
.gd { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.ttl { font: 600 15px 'Poppins', sans-serif; fill: #005187; text-anchor: middle; }
.ax { stroke: #0a3357; stroke-width: 1.5; }
.axt { font-size: 12px; fill: #4d82bc; text-anchor: end; }
.axt.end { text-anchor: start; }
.curve { fill: none; stroke: #e05d5d; stroke-width: 3.5; stroke-linecap: round; }
.minp { fill: #2e9e6a; }
.mint { font-size: 12px; fill: #2e9e6a; text-anchor: middle; font-weight: 700; }
.mint.loc { fill: #e05d5d; }
.hop { fill: none; stroke: #d9921a; stroke-width: 2; stroke-dasharray: 5 4; }
.ghost { fill: #f2b632; opacity: .45; }
.ball { fill: #005187; stroke: #fff; stroke-width: 3; transition: all .5s ease; }
.mini .axt, .mini .mint { font-size: 11px; }
</style>
