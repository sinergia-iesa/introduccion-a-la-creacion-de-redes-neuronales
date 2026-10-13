<script setup lang="ts">
// Dos formas de convertir texto en números (sección 3.10, tabla 3.2).
withDefaults(defineProps<{ modo?: 'ambos' | 'numeros' | 'ohe' }>(), { modo: 'ambos' })
const esp = ['Setosa', 'Versicolor', 'Virginica']
</script>

<template>
  <div class="oh">
    <div class="tb">
      <div class="th">species</div>
      <div v-for="e in esp" :key="e" class="td txt">{{ e }}</div>
    </div>
    <div class="arr">→</div>
    <div v-if="modo !== 'ohe'" class="tb">
      <div class="th">cat.codes</div>
      <div v-for="(e, i) in esp" :key="e" class="td num">{{ i }}</div>
      <div v-if="modo === 'ambos'" class="note warn">¿2 «vale más» que 0?</div>
    </div>
    <div v-if="modo === 'ambos'" class="or">o</div>
    <div v-if="modo !== 'numeros'" class="tb">
      <div class="row-h"><div v-for="e in esp" :key="e" class="th sm">{{ e }}</div></div>
      <div v-for="(e, i) in esp" :key="e" class="row">
        <div v-for="j in 3" :key="j" :class="['td', 'bit', { one: j - 1 === i }]">{{ j - 1 === i ? 1 : 0 }}</div>
      </div>
      <div class="note ok">OHE · get_dummies</div>
    </div>
  </div>
</template>

<style scoped>
.oh { display: flex; align-items: flex-start; gap: 16px; font-family: 'Inter', sans-serif; justify-content: center; }
.tb { display: flex; flex-direction: column; gap: 6px; }
.row-h, .row { display: flex; gap: 6px; }
.th { font: 600 13px 'Poppins', sans-serif; color: #fff; background: #005187; padding: 6px 12px; border-radius: 8px; text-align: center; }
.th.sm { width: 78px; padding: 6px 0; font-size: 11px; }
.td { height: 34px; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-weight: 700; }
.txt { background: #eaf2fd; color: #0a3357; padding: 0 14px; }
.num { background: #fff7e0; color: #8a5a07; border: 1.5px solid #f2b632; }
.bit { width: 78px; background: #f4f8fe; color: #84b6f4; }
.bit.one { background: #005187; color: #fff; }
.arr { align-self: center; font-size: 26px; color: #f2b632; font-weight: 700; margin-top: 20px; }
.or { align-self: center; font: 700 16px 'Poppins', sans-serif; color: #4d82bc; margin-top: 20px; }
.note { font-size: 12px; font-weight: 700; text-align: center; margin-top: 4px; }
.warn { color: #e05d5d; } .ok { color: #2e9e6a; }
</style>
