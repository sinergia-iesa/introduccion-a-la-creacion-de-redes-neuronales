<script setup lang="ts">
// Flor de iris estilizada con sépalo y pétalo marcados
// (idea de Karatas 2024, fig. 3.1; dibujo propio).
</script>

<template>
  <svg viewBox="0 0 420 330" class="iris">
    <!-- tallo -->
    <path d="M200 300 C198 250 204 220 200 190" class="stem" />
    <path d="M200 270 C170 255 150 230 146 200" class="leaf" />
    <!-- sépalos (caídos, grandes) -->
    <g class="sepal">
      <ellipse cx="200" cy="190" rx="34" ry="92" transform="rotate(118 200 190) translate(0 -80)" />
      <ellipse cx="200" cy="190" rx="34" ry="92" transform="rotate(-118 200 190) translate(0 -80)" />
      <ellipse cx="200" cy="190" rx="30" ry="70" transform="rotate(180 200 190) translate(0 -60)" />
    </g>
    <!-- pétalos (erguidos) -->
    <g class="petal">
      <ellipse cx="200" cy="190" rx="22" ry="66" transform="rotate(-24 200 190) translate(0 -58)" />
      <ellipse cx="200" cy="190" rx="22" ry="66" transform="rotate(24 200 190) translate(0 -58)" />
      <ellipse cx="200" cy="190" rx="24" ry="72" transform="translate(0 -64)" />
    </g>
    <circle cx="200" cy="188" r="12" class="center" />

    <!-- cotas del sépalo (derecho) -->
    <line x1="222" y1="206" x2="352" y2="276" class="dim" />
    <text x="340" y="304" class="lab s">sépalo</text>
    <text x="300" y="232" class="mini">largo</text>
    <!-- cotas del pétalo -->
    <line x1="200" y1="58" x2="200" y2="168" class="dim p" />
    <text x="200" y="40" class="lab p">pétalo</text>
    <text x="214" y="112" class="mini p">largo</text>
    <line x1="176" y1="118" x2="224" y2="118" class="dim p thin" />
  </svg>
</template>

<style scoped>
.iris { width: 100%; height: auto; font-family: 'Inter', sans-serif; }
.stem { fill: none; stroke: #2e9e6a; stroke-width: 6; stroke-linecap: round; }
.leaf { fill: none; stroke: #2e9e6a; stroke-width: 5; stroke-linecap: round; }
.sepal ellipse { fill: #84b6f4; stroke: #4d82bc; stroke-width: 2; }
.petal ellipse { fill: #005187; stroke: #0a3357; stroke-width: 2; opacity: .92; }
.center { fill: #f2b632; }
.dim { stroke: #d9921a; stroke-width: 2.5; stroke-dasharray: 6 4; }
.dim.p { stroke: #f2b632; }
.dim.thin { stroke-width: 2; }
.lab { font: 700 17px 'Poppins', sans-serif; text-anchor: middle; }
.lab.s { fill: #4d82bc; }
.lab.p { fill: #005187; }
.mini { font-size: 12px; fill: #b7770f; font-weight: 700; }
.mini.p { fill: #fff; }
</style>
