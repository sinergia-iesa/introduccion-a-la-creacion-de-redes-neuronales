import { defineShikiSetup } from '@slidev/types'

// El deck usa colorSchema "light", pero para el código queremos un bloque
// con fondo oscuro y colores bien vivos (más fácil de leer para quien
// recién empieza). Por eso "light" y "dark" apuntan al MISMO tema oscuro:
// así el bloque de código se ve igual sin importar el colorSchema del deck.
export default defineShikiSetup(() => {
  return {
    themes: {
      light: 'dracula',
      dark: 'dracula',
    },
  }
})
