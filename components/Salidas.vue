<script setup lang="ts">
// Capa de salida: clasificación vs. regresión (secciones 3.8 y 3.14).
</script>

<template>
  <div class="sl">
    <div class="card">
      <div class="h">Clasificación</div>
      <svg viewBox="0 0 200 150">
        <g v-for="(y, i) in [30, 75, 120]" :key="i">
          <line x1="10" :y1="75" x2="72" :y2="y" class="e" />
          <circle cx="90" :cy="y" r="18" class="n" />
          <text x="122" :y="y + 5" class="v">{{ ['0.92', '0.07', '0.01'][i] }}</text>
        </g>
      </svg>
      <div class="kv"><span>neuronas</span><b>una por clase</b></div>
      <div class="kv"><span>activación</span><b>softmax</b></div>
      <div class="kv"><span>loss</span><b>crossentropy</b></div>
    </div>
    <div class="card">
      <div class="h gold">Regresión</div>
      <svg viewBox="0 0 200 150">
        <line x1="10" y1="40" x2="72" y2="75" class="e" />
        <line x1="10" y1="110" x2="72" y2="75" class="e" />
        <circle cx="90" cy="75" r="18" class="n g" />
        <text x="122" y="80" class="v">5.8 cm</text>
      </svg>
      <div class="kv"><span>neuronas</span><b>1</b></div>
      <div class="kv"><span>activación</span><b>ninguna</b></div>
      <div class="kv"><span>loss</span><b>mae</b></div>
    </div>
  </div>
</template>

<style scoped>
.sl { display: flex; gap: 22px; justify-content: center; font-family: 'Inter', sans-serif; }
.card { width: 300px; padding: 14px 18px; border-radius: 14px; background: #fff; border: 1.5px solid #c4dafa; box-shadow: 0 10px 24px rgba(0, 81, 135, .1); }
.h { font: 700 17px 'Poppins', sans-serif; color: #005187; text-align: center; }
.h.gold { color: #b7770f; }
svg { width: 100%; height: 140px; }
.e { stroke: #c4dafa; stroke-width: 2; }
.n { fill: #fff; stroke: #005187; stroke-width: 3; }
.n.g { stroke: #d9921a; }
.v { font-size: 16px; font-weight: 700; fill: #0a3357; }
.kv { display: flex; justify-content: space-between; font-size: 14px; padding: 4px 0; border-top: 1px solid #eaf2fd; }
.kv span { color: #4d82bc; } .kv b { color: #0a3357; }
</style>
