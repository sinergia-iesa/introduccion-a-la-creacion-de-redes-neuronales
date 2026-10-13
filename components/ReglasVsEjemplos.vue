<script setup lang="ts">
// Programación tradicional vs. aprendizaje automático (sección 3.1).
</script>

<template>
  <div class="rv">
    <div class="fila">
      <div class="tag trad">Programación tradicional</div>
      <div class="chip">Reglas</div><span class="op">+</span><div class="chip">Datos</div>
      <span class="ar">→</span><div class="chip res">Respuestas</div>
    </div>
    <div class="ej">«si el pétalo mide más de X cm, entonces…»</div>
    <div class="fila">
      <div class="tag ia">Red neuronal</div>
      <div class="chip">Datos</div><span class="op">+</span><div class="chip">Respuestas</div>
      <span class="ar">→</span><div class="chip res gold">Reglas (aprendidas)</div>
    </div>
    <div class="ej">la red descubre sola las relaciones en los datos</div>
  </div>
</template>

<style scoped>
.rv { display: flex; flex-direction: column; gap: 6px; }
.fila { display: flex; align-items: center; gap: 12px; }
.tag { width: 210px; font: 700 15px 'Poppins', sans-serif; padding: 8px 14px; border-radius: 10px; }
.trad { background: #eaf2fd; color: #4d82bc; }
.ia { background: #005187; color: #fff; }
.chip { padding: 10px 18px; border-radius: 10px; background: #fff; border: 1.5px solid #c4dafa; font-weight: 600; color: #0a3357; box-shadow: 0 6px 16px rgba(0, 81, 135, .08); }
.chip.res { border-color: #4d82bc; }
.chip.gold { background: #fff7e0; border-color: #f2b632; color: #8a5a07; }
.op, .ar { font-size: 22px; font-weight: 700; color: #84b6f4; }
.ar { color: #f2b632; }
.ej { margin: 0 0 18px 222px; font-size: 13px; color: #4d82bc; font-style: italic; }
</style>
