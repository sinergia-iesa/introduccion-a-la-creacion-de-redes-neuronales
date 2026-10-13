<script setup lang="ts">
// La IA como caja negra (idea de Karatas 2024, fig. 3.3–3.6).
// modo: 'entrenar' | 'probar' | 'usar'
import { computed, useId } from 'vue'
const uid = useId()

const props = withDefaults(defineProps<{ modo?: 'entrenar' | 'probar' | 'usar' }>(), { modo: 'entrenar' })
const m = computed(() => props.modo)
const datos = computed(() => m.value === 'entrenar' ? 'Datos de entrenamiento' : m.value === 'probar' ? 'Datos de prueba' : 'Medición nueva')
</script>

<template>
  <svg viewBox="0 0 760 320" class="cn">
    <defs>
      <marker :id="uid + '0'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0L10 5L0 10z" fill="#4d82bc" />
      </marker>
      <marker :id="uid + '1'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0L10 5L0 10z" fill="#d9921a" />
      </marker>
    </defs>
    <!-- datos -->
    <g>
      <rect x="20" y="70" width="150" height="120" rx="10" class="tbl" />
      <line v-for="k in 4" :key="k" x1="20" :x2="170" :y1="70 + k * 24" :y2="70 + k * 24" class="row" />
      <rect v-if="m !== 'usar'" x="20" y="94" width="150" height="24" class="cur" />
      <text x="95" y="212" class="cap">{{ datos }}</text>
      <text v-if="m === 'usar'" x="95" y="134" class="q">5.1 · 3.4 · 1.5 · 0.1</text>
    </g>
    <line x1="176" y1="130" x2="262" y2="130" class="ar" :marker-end="`url(#${uid}0)`" />
    <text x="219" y="120" class="sm">{{ m === 'usar' ? 'entrada' : 'fila por fila' }}</text>
    <!-- caja -->
    <rect x="270" y="60" width="180" height="140" rx="16" class="box" />
    <text x="360" y="125" class="bt">IA</text>
    <text x="360" y="150" class="bs">(red neuronal)</text>
    <line x1="456" y1="130" x2="540" y2="130" class="ar" :marker-end="`url(#${uid}0)`" />
    <!-- salida -->
    <g v-if="m === 'usar'">
      <rect x="548" y="104" width="190" height="52" rx="26" class="res" />
      <text x="643" y="136" class="rt">Setosa</text>
      <text x="643" y="182" class="cap">sin necesitar a un experto</text>
    </g>
    <g v-else>
      <rect x="548" y="88" width="88" height="40" rx="8" class="prop" />
      <text x="592" y="113" class="pt">propuesta</text>
      <rect x="648" y="88" width="88" height="40" rx="8" class="real" />
      <text x="692" y="113" class="pt">real</text>
      <text x="642" y="114" class="vs">≠</text>
      <text x="642" y="160" class="diff">diferencia (error)</text>
    </g>
    <!-- retroalimentación -->
    <g v-if="m === 'entrenar'">
      <path d="M642 170 C642 250 360 260 360 206" class="fb" :marker-end="`url(#${uid}1)`" />
      <text x="560" y="300" class="fbt">ajusta los parámetros internos</text>
      <rect x="20" y="236" width="150" height="34" rx="17" class="ep" />
      <text x="95" y="258" class="ept">se repite n épocas</text>
    </g>
    <g v-if="m === 'probar'">
      <rect x="420" y="236" width="320" height="40" rx="20" class="ev" />
      <text x="580" y="261" class="evt">1 sola pasada · sin ajustes · tú evalúas el %</text>
    </g>
  </svg>
</template>

<style scoped>
.cn { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.tbl { fill: #eaf2fd; stroke: #84b6f4; }
.row { stroke: #84b6f4; }
.cur { fill: #f2b632; opacity: .5; }
.q { font-size: 13px; text-anchor: middle; fill: #0a3357; font-weight: 700; }
.cap { font-size: 13px; text-anchor: middle; fill: #005187; font-weight: 600; }
.sm { font-size: 11px; text-anchor: middle; fill: #4d82bc; }
.ar { stroke: #4d82bc; stroke-width: 2.5; }
.box { fill: #0a3357; }
.bt { font: 800 34px 'Poppins', sans-serif; fill: #fff; text-anchor: middle; }
.bs { font-size: 13px; fill: #c4dafa; text-anchor: middle; }
.prop { fill: #c4dafa; } .real { fill: #fde7b0; }
.pt { font-size: 13px; text-anchor: middle; fill: #0a3357; font-weight: 600; }
.vs { font-size: 20px; text-anchor: middle; fill: #e05d5d; font-weight: 700; }
.diff { font-size: 13px; text-anchor: middle; fill: #e05d5d; font-weight: 700; }
.fb { fill: none; stroke: #d9921a; stroke-width: 2.5; stroke-dasharray: 7 5; }
.fbt { font-size: 13px; fill: #b7770f; text-anchor: middle; font-weight: 700; }
.ep { fill: #fff7e0; stroke: #d9921a; }
.ept { font-size: 13px; fill: #b7770f; text-anchor: middle; font-weight: 700; }
.ev { fill: #eaf2fd; stroke: #4d82bc; }
.evt { font-size: 13px; fill: #005187; text-anchor: middle; font-weight: 700; }
.res { fill: #2e9e6a; }
.rt { font: 700 20px 'Poppins', sans-serif; fill: #fff; text-anchor: middle; }
</style>
