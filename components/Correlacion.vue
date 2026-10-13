<script setup lang="ts">
// Escala de correlación de −1 a 1 con tres nubes de puntos (sección 3.12).
const rnd = (k: number) => { const x = Math.sin(k * 12.9898) * 43758.5453; return x - Math.floor(x) }
const nube = (r: number) => Array.from({ length: 26 }, (_, i) => {
  const x = rnd(i + 1)
  const noise = (rnd(i + 101) - 0.5) * (1 - Math.abs(r)) * 1.6
  const y = r === 0 ? rnd(i + 51) : 0.5 + r * (x - 0.5) * 0.9 + noise * 0.5
  return { x: 10 + x * 120, y: 130 - Math.min(1, Math.max(0, y)) * 120 }
})
const casos = [
  { r: -1, t: '≈ −1', d: 'más horas de estudio, menos errores', c: '#e05d5d' },
  { r: 0, t: '≈ 0', d: 'sin relación', c: '#84b6f4' },
  { r: 1, t: '≈ +1', d: 'más peso, más precio (oro)', c: '#2e9e6a' },
].map(k => ({ ...k, pts: nube(k.r) }))
</script>

<template>
  <div class="co">
    <div class="plots">
      <div v-for="k in casos" :key="k.t" class="p">
        <svg viewBox="0 0 140 140">
          <rect x="1" y="1" width="138" height="138" rx="10" class="bg" />
          <circle v-for="(q, i) in k.pts" :key="i" :cx="q.x" :cy="q.y" r="4.2" :fill="k.c" opacity=".85" />
        </svg>
        <div class="t" :style="{ color: k.c }">{{ k.t }}</div>
        <div class="d">{{ k.d }}</div>
      </div>
    </div>
    <div class="scale"><span>−1</span><div class="bar" /><span>+1</span></div>
  </div>
</template>

<style scoped>
.co { font-family: 'Inter', sans-serif; }
.plots { display: flex; justify-content: space-around; gap: 16px; }
.p { width: 170px; text-align: center; }
.p svg { width: 130px; height: 130px; }
.bg { fill: #f4f8fe; stroke: #c4dafa; }
.t { font: 800 20px 'Poppins', sans-serif; margin-top: 4px; }
.d { font-size: 12px; color: #0a3357; line-height: 1.3; }
.scale { display: flex; align-items: center; gap: 10px; margin: 14px 40px 0; font-weight: 700; color: #0a3357; font-size: 13px; }
.bar { flex: 1; height: 10px; border-radius: 5px; background: linear-gradient(90deg, #e05d5d, #eaf2fd 50%, #2e9e6a); }
</style>
