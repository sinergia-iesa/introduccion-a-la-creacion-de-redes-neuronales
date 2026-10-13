<script setup lang="ts">
// Softmax: convierte las salidas de la red en probabilidades que suman 1
// (ejemplo numérico de Karatas 2024, sección 3.8: 2.0, 1.0, 0.1).
import { computed } from 'vue'

const props = withDefaults(defineProps<{ valores?: number[]; nombres?: string[] }>(), {
  valores: () => [2.0, 1.0, 0.1],
  nombres: () => ['Setosa', 'Versicolor', 'Virginica'],
})
const probs = computed(() => {
  const ex = props.valores.map(Math.exp)
  const s = ex.reduce((a, b) => a + b, 0)
  return ex.map(v => v / s)
})
</script>

<template>
  <div class="sm">
    <div class="col">
      <div class="h">Salida de la red</div>
      <div v-for="(v, i) in valores" :key="i" class="raw">{{ v.toFixed(1) }}</div>
    </div>
    <div class="mid">
      <div class="fx">softmax</div>
      <div class="arrow">→</div>
    </div>
    <div class="col wide">
      <div class="h">Probabilidad</div>
      <div v-for="(p, i) in probs" :key="i" class="bar-row">
        <span class="nm">{{ nombres[i] }}</span>
        <div class="track"><div class="bar" :style="{ width: (p * 100) + '%' }" :class="{ top: i === 0 }" /></div>
        <span class="pc">{{ Math.round(p * 100) }} %</span>
      </div>
      <div class="sum">suma = 100 %</div>
    </div>
  </div>
</template>

<style scoped>
.sm { width: 100%; display: flex; align-items: center; gap: 18px; font-family: 'Inter', sans-serif; }
.col { display: flex; flex-direction: column; gap: 10px; }
.col.wide { flex: 1; }
.h { font: 600 14px 'Poppins', sans-serif; color: #005187; }
.raw { width: 70px; padding: 6px 0; text-align: center; border-radius: 8px; background: #eaf2fd; border: 1.5px solid #c4dafa; font-weight: 700; color: #0a3357; }
.mid { text-align: center; }
.fx { font: 700 14px 'Poppins', sans-serif; color: #b7770f; background: #fff7e0; border: 1.5px solid #f2b632; border-radius: 999px; padding: 4px 12px; }
.arrow { font-size: 26px; color: #f2b632; font-weight: 700; }
.bar-row { display: flex; align-items: center; gap: 10px; height: 34px; }
.nm { width: 86px; font-size: 13px; font-weight: 600; color: #0a3357; }
.track { flex: 1; height: 20px; background: #eaf2fd; border-radius: 10px; overflow: hidden; }
.bar { height: 100%; background: #84b6f4; border-radius: 10px; }
.bar.top { background: #005187; }
.pc { width: 44px; text-align: right; font-weight: 700; color: #0a3357; font-size: 14px; }
.sum { font-size: 12px; color: #2e9e6a; font-weight: 700; text-align: right; }
</style>
