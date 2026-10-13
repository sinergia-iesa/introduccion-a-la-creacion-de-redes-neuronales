<script setup lang="ts">
// Dos estrategias para datos faltantes (sección 3.11).
const filas = [
  ['5.1', '', 'Setosa'],
  ['', '4.5', 'Versicolor'],
  ['6.3', '6.0', ''],
  ['5.8', '5.1', 'Virginica'],
]
const fill = [
  ['5.1', '5.2', 'Setosa'],
  ['5.7', '4.5', 'Versicolor'],
  ['6.3', '6.0', 'empty'],
  ['5.8', '5.1', 'Virginica'],
]
</script>

<template>
  <div class="hc">
    <div class="blk">
      <div class="cap">Con huecos</div>
      <div v-for="(r, i) in filas" :key="i" class="r">
        <div v-for="(c, j) in r" :key="j" :class="['c', { gap: c === '' }]">{{ c || '?' }}</div>
      </div>
    </div>
    <div class="arr">→</div>
    <div class="blk">
      <div class="cap a">A · Rellenar <code>fillna</code></div>
      <div v-for="(r, i) in fill" :key="i" class="r">
        <div v-for="(c, j) in r" :key="j" :class="['c', { new: filas[i][j] === '' }]">{{ c }}</div>
      </div>
      <div class="hint">números → promedio · texto → «empty»</div>
    </div>
    <div class="blk">
      <div class="cap b">B · Eliminar <code>dropna</code></div>
      <div v-for="(r, i) in filas" :key="i" :class="['r', { gone: r.includes('') }]">
        <div v-for="(c, j) in r" :key="j" class="c">{{ c || '?' }}</div>
      </div>
      <div class="hint">se pierden filas, quedan datos completos</div>
    </div>
  </div>
</template>

<style scoped>
.hc { display: flex; gap: 18px; align-items: flex-start; justify-content: center; font-family: 'Inter', sans-serif; }
.blk { display: flex; flex-direction: column; gap: 5px; }
.cap { font: 600 14px 'Poppins', sans-serif; color: #005187; margin-bottom: 4px; }
.cap.a { color: #2e9e6a; } .cap.b { color: #e05d5d; }
.cap code { font-size: 11px; }
.r { display: flex; gap: 5px; transition: all .3s; }
.c { width: 66px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 6px; background: #eaf2fd; color: #0a3357; font-size: 12px; font-weight: 600; }
.c:last-child { width: 84px; }
.c.gap { background: #fde2e2; color: #e05d5d; font-weight: 800; }
.c.new { background: #d9f2e6; color: #1d7a50; font-weight: 800; }
.r.gone .c { background: #f3f4f6; color: #c0c4cc; text-decoration: line-through; }
.arr { align-self: center; font-size: 26px; color: #f2b632; font-weight: 700; }
.hint { font-size: 11px; color: #4d82bc; margin-top: 4px; max-width: 220px; }
</style>
