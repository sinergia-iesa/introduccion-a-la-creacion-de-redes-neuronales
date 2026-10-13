<script setup lang="ts">
// División de la tabla en 4 (idea de Karatas 2024, fig. 3.2).
// step 0: tabla original · 1: entradas vs respuesta · 2: 4 tablas
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  step?: number; filas?: number; cols?: number; prueba?: number
}>(), { step: 2, filas: 150, cols: 5, prueba: 0.2 })

const nTest = computed(() => Math.round(props.filas * props.prueba))
const nTrain = computed(() => props.filas - nTest.value)
const ent = computed(() => props.cols - 1)
const s = computed(() => props.step)
</script>

<template>
  <svg viewBox="0 0 760 340" class="dt">
    <!-- Original -->
    <g :class="['orig', { dim: s >= 2 }]">
      <text x="120" y="22" class="h">Tabla original</text>
      <rect x="30" y="36" width="144" height="250" rx="6" :class="s >= 1 ? 'in' : 'base'" />
      <rect x="174" y="36" width="36" height="250" rx="6" :class="s >= 1 ? 'out' : 'base'" />
      <line v-for="k in ent" :key="k" :x1="30 + k * 36" y1="36" :x2="30 + k * 36" y2="286" class="grid" />
      <line v-if="s >= 2" x1="26" :y1="36 + 250 * (1 - prueba)" x2="214" :y2="36 + 250 * (1 - prueba)" class="cut" />
      <text x="120" y="306" class="d">{{ filas }} filas × {{ cols }} columnas</text>
      <g v-if="s >= 1" class="fade">
        <text x="102" y="326" class="tag in-t">entradas</text>
        <text x="192" y="326" class="tag out-t">respuesta</text>
      </g>
    </g>

    <!-- 4 tablas -->
    <g v-if="s >= 2" class="fade">
      <path d="M232 160 L300 160" class="arrow" />
      <path d="M292 152 L304 160 L292 168" class="arrowh" />
      <!-- entrenamiento -->
      <text x="430" y="22" class="h train">Entrenamiento ({{ Math.round((1 - prueba) * 100) }} %)</text>
      <rect x="330" y="36" width="160" height="150" rx="6" class="in" />
      <rect x="510" y="36" width="40" height="150" rx="6" class="out" />
      <text x="410" y="116" class="n">train_data</text>
      <text x="410" y="136" class="dd">{{ nTrain }} × {{ ent }}</text>
      <text x="530" y="208" class="n s">train_col</text>
      <text x="530" y="224" class="dd s">{{ nTrain }} × 1</text>
      <!-- prueba -->
      <text x="430" y="252" class="h test">Prueba ({{ Math.round(prueba * 100) }} %)</text>
      <rect x="330" y="262" width="160" height="44" rx="6" class="in" />
      <rect x="510" y="262" width="40" height="44" rx="6" class="out" />
      <text x="410" y="282" class="n">test_data</text>
      <text x="410" y="299" class="dd">{{ nTest }} × {{ ent }}</text>
      <text x="530" y="326" class="n s">test_col · {{ nTest }} × 1</text>
      <!-- leyenda -->
      <g transform="translate(600 110)">
        <rect width="18" height="18" rx="4" class="in" /><text x="26" y="14" class="lg">entradas (X)</text>
        <rect y="30" width="18" height="18" rx="4" class="out" /><text x="26" y="44" class="lg">respuesta (y)</text>
      </g>
    </g>
  </svg>
</template>

<style scoped>
.dt { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.h { font: 600 15px 'Poppins', sans-serif; fill: #005187; text-anchor: middle; }
.h.train { fill: #005187; } .h.test { fill: #b7770f; }
.base { fill: #eaf2fd; stroke: #84b6f4; }
.in { fill: #c4dafa; stroke: #4d82bc; }
.out { fill: #fde7b0; stroke: #d9921a; }
.grid { stroke: #84b6f4; stroke-width: 1; opacity: .6; }
.cut { stroke: #e05d5d; stroke-width: 2.5; stroke-dasharray: 7 5; }
.d { font-size: 13px; fill: #0a3357; text-anchor: middle; font-weight: 600; }
.tag { font-size: 12px; text-anchor: middle; font-weight: 700; }
.in-t { fill: #4d82bc; } .out-t { fill: #b7770f; }
.dim { opacity: .55; }
.arrow { stroke: #4d82bc; stroke-width: 3; }
.arrowh { fill: none; stroke: #4d82bc; stroke-width: 3; }
.n { font: 700 14px 'Inter', monospace; fill: #0a3357; text-anchor: middle; }
.dd { font-size: 13px; fill: #005187; text-anchor: middle; }
.s { font-size: 12px; }
.lg { font-size: 13px; fill: #0a3357; }
.fade { animation: fin .45s ease; }
@keyframes fin { from { opacity: 0 } to { opacity: 1 } }
</style>
