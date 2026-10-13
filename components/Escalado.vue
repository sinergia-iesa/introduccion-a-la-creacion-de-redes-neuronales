<script setup lang="ts">
// Min-max vs. estandarización z (sección 3.13). Mismos datos, dos escalas.
const datos = [18, 25, 31, 38, 44, 52, 67]
const min = Math.min(...datos), max = Math.max(...datos)
const mean = datos.reduce((a, b) => a + b, 0) / datos.length
const sd = Math.sqrt(datos.reduce((a, b) => a + (b - mean) ** 2, 0) / datos.length)
const mm = datos.map(v => (v - min) / (max - min))
const zz = datos.map(v => (v - mean) / sd)
const L = 100, Wd = 360
const pos = (v: number, a: number, b: number) => L + ((v - a) / (b - a)) * Wd
</script>

<template>
  <svg viewBox="0 0 640 270" class="es">
    <!-- original -->
    <text x="10" y="38" class="lb">edad</text>
    <line :x1="L" y1="34" :x2="L + Wd" y2="34" class="ax" />
    <circle v-for="v in datos" :key="'o' + v" :cx="pos(v, min, max)" cy="34" r="7" class="d0" />
    <text :x="L" y="60" class="tk">{{ min }}</text><text :x="L + Wd" y="60" class="tk">{{ max }}</text>

    <!-- min-max -->
    <text x="10" y="118" class="lb mm">min-max</text>
    <line :x1="L" y1="114" :x2="L + Wd" y2="114" class="ax" />
    <circle v-for="(v, i) in mm" :key="'m' + i" :cx="pos(v, 0, 1)" cy="114" r="7" class="d1" />
    <text :x="L" y="140" class="tk">0</text><text :x="L + Wd" y="140" class="tk">1</text>
    <text :x="L + Wd + 14" y="118" class="f">x′ = (x − min) / (max − min)</text>

    <!-- z -->
    <text x="10" y="198" class="lb z">z</text>
    <line :x1="L" y1="194" :x2="L + Wd" y2="194" class="ax" />
    <line :x1="pos(0, -2, 2)" y1="182" :x2="pos(0, -2, 2)" y2="206" class="mid" />
    <circle v-for="(v, i) in zz" :key="'z' + i" :cx="pos(v, -2, 2)" cy="194" r="7" class="d2" />
    <text :x="L" y="220" class="tk">−2</text><text :x="pos(0, -2, 2)" y="220" class="tk">0 (media)</text><text :x="L + Wd" y="220" class="tk">+2</text>
    <text :x="L + Wd + 14" y="198" class="f">z = (x − μ) / σ</text>
    <text x="280" y="258" class="cap">mismos datos, misma forma: solo cambia la escala</text>
  </svg>
</template>

<style scoped>
.es { width: 100%; height: auto; font-family: 'Inter', sans-serif; overflow: visible; }
.lb { font: 700 14px 'Poppins', sans-serif; fill: #0a3357; }
.lb.mm { fill: #b7770f; } .lb.z { fill: #005187; }
.ax { stroke: #c4dafa; stroke-width: 3; stroke-linecap: round; }
.mid { stroke: #005187; stroke-width: 2; stroke-dasharray: 4 3; }
.d0 { fill: #84b6f4; } .d1 { fill: #f2b632; } .d2 { fill: #005187; }
.tk { font-size: 11px; fill: #4d82bc; text-anchor: middle; }
.f { font-size: 12px; fill: #0a3357; font-weight: 600; font-style: italic; }
.cap { font-size: 12px; fill: #4d82bc; text-anchor: middle; }
</style>
