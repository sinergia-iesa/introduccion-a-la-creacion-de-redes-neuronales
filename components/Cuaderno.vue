<script setup lang="ts">
// Tarjeta para abrir un cuaderno del repositorio directo en Colab
// (mismo esquema de archivos que la presentación "Introducción a Colab").
// chip = versión pequeña, para la esquina de una diapositiva de código.
const REPO = 'sinergia-iesa/introduccion-a-la-creacion-de-redes-neuronales'
const props = defineProps<{ nombre: string; desc?: string; datos?: string; chip?: boolean }>()
const url = `https://colab.research.google.com/github/${REPO}/blob/main/notebooks/${props.nombre}.ipynb`
</script>

<template>
  <a v-if="chip" :href="url" target="_blank" rel="noopener noreferrer" class="chip">
    <svg viewBox="0 0 120 64" width="26" height="14"><path d="M44.6 14A22 22 0 1 0 44.6 50" fill="none" stroke="#f9ab00" stroke-width="13" /><path d="M75.4 50A22 22 0 1 0 75.4 14" fill="none" stroke="#e8710a" stroke-width="13" /></svg>
    {{ nombre }} ↗
  </a>
  <div v-else class="card">
    <div class="top">
      <svg viewBox="0 0 120 64" width="34" height="18"><path d="M44.6 14A22 22 0 1 0 44.6 50" fill="none" stroke="#f9ab00" stroke-width="13" /><path d="M75.4 50A22 22 0 1 0 75.4 14" fill="none" stroke="#e8710a" stroke-width="13" /></svg>
      <span class="nm">{{ nombre }}.ipynb</span>
    </div>
    <div v-if="desc" class="desc">{{ desc }}</div>
    <div class="bottom">
      <span v-if="datos" class="csv">{{ datos }}</span>
      <a :href="url" target="_blank" rel="noopener noreferrer" class="btn">Abrir en Colab ↗</a>
    </div>
  </div>
</template>

<style scoped>
.chip {
  position: absolute; top: 18px; right: 18px; z-index: 10; display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 12px; border-radius: 999px; background: #fff; border: 1.5px solid #f9ab00;
  font: 700 12px 'Courier New', monospace; color: #b05a05 !important; text-decoration: none !important; box-shadow: 0 4px 12px rgba(0, 0, 0, .08);
}
.chip:hover { background: #fff7e0; }
.card {
  display: flex; flex-direction: column; gap: 6px; padding: 12px 14px; border-radius: 12px; background: #fff;
  border: 1.5px solid #c4dafa; box-shadow: 0 8px 20px rgba(0, 81, 135, .08); height: 100%; box-sizing: border-box;
}
.top { display: flex; align-items: center; gap: 8px; }
.nm { font: 700 14px 'Courier New', monospace; color: #e8710a; }
.desc { font-size: 12px; color: #0a3357; line-height: 1.35; flex: 1; }
.bottom { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.csv { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; font: 600 10.5px 'Courier New', monospace; color: #4d82bc; background: #eaf2fd; padding: 2px 8px; border-radius: 6px; }
.btn {
  white-space: nowrap; flex: none; margin-left: auto; padding: 5px 10px; border-radius: 8px; background: #005187; color: #fff !important;
  font-size: 12px; font-weight: 700; text-decoration: none !important; border: none !important;
}
.btn:hover { background: #0a3357; }
</style>
