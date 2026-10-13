<script setup lang="ts">
// "La receta" de Karatas (2024), sección 3.2: los pasos de todo proyecto
// de aprendizaje supervisado. activo = índice del paso resaltado (-1 = todos).
withDefaults(defineProps<{ activo?: number; vertical?: boolean }>(), { activo: -1, vertical: false })

const pasos = [
  { t: 'Preparar', d: 'texto → números' },
  { t: 'Dividir', d: '80 % / 20 %' },
  { t: 'Construir', d: 'capas y neuronas' },
  { t: 'Entrenar', d: 'muchas épocas' },
  { t: 'Probar', d: 'datos nuevos' },
  { t: 'Usar', d: 'predecir' },
]
</script>

<template>
  <div :class="['receta', { vertical }]">
    <template v-for="(p, i) in pasos" :key="p.t">
      <div :class="['paso', { on: activo === -1 || activo === i, off: activo !== -1 && activo !== i }]">
        <div class="num">{{ i + 1 }}</div>
        <div class="ic">
          <carbon-clean v-if="i === 0" /><carbon-cut v-else-if="i === 1" /><carbon-network-3 v-else-if="i === 2" />
          <carbon-renew v-else-if="i === 3" /><carbon-chemistry v-else-if="i === 4" /><carbon-rocket v-else />
        </div>
        <div class="t">{{ p.t }}</div>
        <div class="d">{{ p.d }}</div>
      </div>
      <div v-if="i < pasos.length - 1" class="flecha">→</div>
    </template>
  </div>
</template>

<style scoped>
.receta { display: flex; align-items: stretch; justify-content: center; gap: 6px; }
.paso {
  position: relative; flex: 1; max-width: 128px; padding: 18px 8px 14px; border-radius: 14px; text-align: center;
  background: #fff; border: 1.5px solid #c4dafa; box-shadow: 0 8px 20px rgba(0, 81, 135, .10); transition: all .3s;
}
.paso.on { border-color: #4d82bc; }
.paso.off { opacity: .35; }
.num {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%); width: 26px; height: 26px; border-radius: 50%;
  background: #005187; color: #fff; font: 700 13px/26px 'Poppins', sans-serif;
}
.ic { font-size: 28px; line-height: 1.2; color: #005187; display: flex; justify-content: center; }
.t { font: 700 16px 'Poppins', sans-serif; color: #0a3357; margin-top: 4px; }
.d { font-size: 12px; color: #4d82bc; margin-top: 2px; }
.flecha { align-self: center; color: #f2b632; font-size: 22px; font-weight: 700; }
</style>
