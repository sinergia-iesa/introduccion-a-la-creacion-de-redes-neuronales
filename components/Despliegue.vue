<script setup lang="ts">
// Flujo de despliegue (sección 3.15): 6a entrena y guarda 3 archivos,
// 6b los carga y predice una flor nueva.
withDefaults(defineProps<{ step?: number }>(), { step: 3 })
</script>

<template>
  <div class="dp">
    <div class="col">
      <div class="nb">K3_iris-6a</div>
      <div class="box dark">Entrenar y probar</div>
      <div class="sub">iris.csv</div>
    </div>
    <div class="ar">→</div>
    <div :class="['col files', { hide: step < 1 }]">
      <div class="file"><b>model1.keras</b><span>la red (pesos)</span></div>
      <div class="file"><b>scaler1.joblib</b><span>media y desviación</span></div>
      <div class="file"><b>le1.joblib</b><span>número ↔ especie</span></div>
    </div>
    <div :class="['ar', { hide: step < 2 }]">→</div>
    <div :class="['col', { hide: step < 2 }]">
      <div class="nb">K3_iris-6b</div>
      <div class="box">Cargar y predecir</div>
      <div class="sub">iris_test.csv</div>
    </div>
    <div :class="['ar', { hide: step < 3 }]">→</div>
    <div :class="['col out', { hide: step < 3 }]">
      <div class="prob">[0.93, 0.07, 0.00]</div>
      <div class="mini">argmax → 0</div>
      <div class="mini">inverse_transform</div>
      <div class="res">Setosa</div>
    </div>
  </div>
</template>

<style scoped>
.dp { display: flex; align-items: center; justify-content: center; gap: 12px; font-family: 'Inter', sans-serif; }
.col { display: flex; flex-direction: column; align-items: center; gap: 8px; transition: opacity .4s; }
.hide { opacity: 0; }
.nb { font: 700 12px 'Courier New', monospace; color: #b7770f; }
.box { padding: 16px 18px; border-radius: 12px; background: #eaf2fd; border: 1.5px solid #4d82bc; font: 700 15px 'Poppins', sans-serif; color: #005187; text-align: center; }
.box.dark { background: #0a3357; color: #fff; border-color: #0a3357; }
.sub { font-size: 12px; color: #4d82bc; }
.ar { font-size: 26px; color: #f2b632; font-weight: 700; transition: opacity .4s; }
.files { gap: 6px; }
.file { width: 170px; padding: 7px 12px; border-radius: 8px; background: #fff; border: 1.5px dashed #d9921a; display: flex; flex-direction: column; }
.file b { font: 700 13px 'Courier New', monospace; color: #0a3357; }
.file span { font-size: 11px; color: #b7770f; }
.prob { font: 700 13px 'Courier New', monospace; color: #0a3357; background: #eaf2fd; padding: 6px 10px; border-radius: 8px; }
.mini { font: 600 11px 'Courier New', monospace; color: #4d82bc; }
.res { margin-top: 4px; padding: 8px 20px; border-radius: 999px; background: #2e9e6a; color: #fff; font: 700 17px 'Poppins', sans-serif; }
</style>
