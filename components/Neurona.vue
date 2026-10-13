<script setup lang="ts">
import { useId } from 'vue'
const uid = useId()
// Estructura de una neurona artificial (idea de Karatas 2024, fig. 3.8):
// entradas × pesos → suma → función de activación → salida.
withDefaults(defineProps<{ bias?: boolean }>(), { bias: false })
</script>

<template>
  <svg viewBox="0 0 640 300" class="nr">
    <defs>
      <marker :id="uid + '0'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0L10 5L0 10z" fill="#4d82bc" />
      </marker>
    </defs>
    <!-- entradas -->
    <g v-for="(y, i) in [60, 150, 240]" :key="i">
      <circle cx="50" :cy="y" r="22" class="in" />
      <text x="50" :y="y + 6" class="it">{{ ['x₁', 'x₂', 'x₃'][i] }}</text>
      <line x1="74" :y1="y" x2="262" :y2="150 + (y - 150) * 0.45" class="ar" :marker-end="`url(#${uid}0)`" />
      <rect :x="136" :y="y + (150 - y) * 0.35 - 18" width="52" height="27" rx="13" class="wp" />
      <text :x="162" :y="y + (150 - y) * 0.35" class="wt">{{ ['w₁', 'w₂', 'w₃'][i] }}</text>
    </g>
    <!-- cuerpo -->
    <circle cx="340" cy="150" r="78" class="body" />
    <line x1="340" y1="72" x2="340" y2="228" class="split" />
    <text x="302" y="166" class="sum">Σ</text>
    <path d="M352 175 C372 175 368 125 392 125 L404 125" class="sig" />
    <text x="302" y="250" class="cap">suma</text>
    <text x="378" y="250" class="cap">activación</text>
    <!-- bias -->
    <g v-if="bias">
      <rect x="290" y="16" width="100" height="28" rx="14" class="bias" />
      <text x="340" y="35" class="bt">+ bias (b)</text>
      <line x1="340" y1="44" x2="340" y2="70" class="ar" :marker-end="`url(#${uid}0)`" />
    </g>
    <!-- salida -->
    <line x1="420" y1="150" x2="500" y2="150" class="ar" :marker-end="`url(#${uid}0)`" />
    <text x="458" y="138" class="it">y</text>
    <line v-for="d in [-60, 0, 60]" :key="d" x1="505" y1="150" x2="600" :y2="150 + d" class="ar2" :marker-end="`url(#${uid}0)`" />
    <text x="560" y="292" class="cap">a la siguiente capa</text>
  </svg>
</template>

<style scoped>
.nr { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.in { fill: #eaf2fd; stroke: #4d82bc; stroke-width: 2; }
.it { font-size: 22px; font-weight: 700; fill: #0a3357; text-anchor: middle; font-style: italic; }
.ar { stroke: #4d82bc; stroke-width: 2; }
.ar2 { stroke: #84b6f4; stroke-width: 2; }
.wp { fill: #f2b632; }
.wt { font-size: 16px; font-weight: 700; fill: #0a3357; text-anchor: middle; font-style: italic; }
.body { fill: #fff; stroke: #005187; stroke-width: 3; }
.split { stroke: #c4dafa; stroke-width: 2; stroke-dasharray: 4 4; }
.sum { font-size: 46px; fill: #005187; text-anchor: middle; font-weight: 700; }
.sig { fill: none; stroke: #d9921a; stroke-width: 4; stroke-linecap: round; }
.cap { font-size: 16px; fill: #4d82bc; text-anchor: middle; }
.bias { fill: #fff7e0; stroke: #d9921a; }
.bt { font-size: 13px; fill: #b7770f; text-anchor: middle; font-weight: 700; }
</style>
