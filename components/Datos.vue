<script setup lang="ts">
// Botón de descarga de un CSV publicado junto con la presentación
// (public/data/). Usa BASE_URL para funcionar igual en local y en Pages.
const props = defineProps<{ archivo: string; desc?: string; sep?: string }>()
const href = `${import.meta.env.BASE_URL}data/${props.archivo}`
</script>

<template>
  <div class="dc">
    <div class="ic">CSV</div>
    <div class="body">
      <div class="nm">{{ archivo }}</div>
      <div v-if="desc" class="desc">{{ desc }}</div>
      <div v-if="sep" class="sep">separador <code>{{ sep }}</code></div>
    </div>
    <a :href="href" :download="archivo" target="_blank" rel="noopener noreferrer" class="btn">↓</a>
  </div>
</template>

<style scoped>
.dc { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 12px; background: #fff; border: 1.5px solid #c4dafa; box-shadow: 0 6px 16px rgba(0, 81, 135, .08); }
.ic { width: 42px; height: 42px; border-radius: 9px; background: #2e9e6a; color: #fff; font: 800 12px/42px 'Poppins', sans-serif; text-align: center; flex: none; }
.body { flex: 1; min-width: 0; }
.nm { font: 700 14px 'Courier New', monospace; color: #0a3357; }
.desc { font-size: 11.5px; color: #4d82bc; line-height: 1.3; }
.sep { font-size: 11px; color: #b7770f; }
.sep code { font-size: 11px; }
.btn { width: 34px; height: 34px; border-radius: 50%; background: #005187; color: #fff !important; font-weight: 800; display: flex; align-items: center; justify-content: center; text-decoration: none !important; border: none !important; flex: none; }
</style>
