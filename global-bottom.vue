<template>
  <footer class="prep-page-number">
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>

<style scoped>
.prep-page-number {
  position: absolute;
  right: 14px;
  bottom: 10px;
  z-index: 20;
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  color: rgba(0, 0, 0, 0.38);
  pointer-events: none;
  user-select: none;
}
</style>
