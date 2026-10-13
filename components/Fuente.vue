<script setup lang="ts">
// Crédito pequeño al pie de cada diagrama inspirado en el libro.
defineProps<{ fig?: string; texto?: string }>()
</script>

<template>
  <div class="fuente">
    <template v-if="texto">{{ texto }}</template>
    <template v-else>Basado en Karatas (2024), <i>Developing AI Applications</i><span v-if="fig">, fig. {{ fig }}</span></template>
  </div>
</template>

<style scoped>
.fuente {
  position: absolute;
  left: 3.5rem;
  bottom: 10px;
  font-size: 0.6rem;
  color: rgba(10, 51, 87, 0.5);
  font-family: 'Inter', sans-serif;
}
</style>
