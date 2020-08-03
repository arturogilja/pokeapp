# Pokeapp

## Build

```bash
# Instalar dependencias
$ npm install

# Iniciar servidor de desarrollo
$ npm run dev

# Generar proyecto estático
$ npm run generate
```

# Descripción general

La aplicación fue elaborada con Nuxt.js, la cual además de permitir crear aplicaciones SSR con Vue, funciona como framework que abstrae mucha de la funcionalidad que se debe hacer manualmente al trabajar con una app tradicional de Vue.

Se utilizaron multiples plugins para lograr la funcionalidad deseada, tales como style-resources para compilar de manera automática el SCSS, nuxt-color-mode para tener múltiples esquemas de colores y vuex-persistedstate para almacenar el estado del store en localStorage (aunque también podría ser en cookies).

No se utilizaron librerias externas de CSS, y las variables de entorno deben estar en un archivo llamado .env dentro del directorio raiz. Gracias al PersistedState al recargar la pagina no se pierden los datos que ha manipulado el usuario

En general se hizo uso de muchas funcionalidades de Vue tales como Mixins, Route Guards (middlewares), Vuex, Lifecycle hooks, Watchers y Computed Properties.

# Issues

El unico issue con el que quedó el proyecto es relacionado a los esquemas de colores. Por alguna razon al recargar la página dentro de la vista **/home**, el Toggler deja de funcionar. Se debe ir manualmente a la ruta **/** y dejar que el middleware redirija de nuevo al home para solucionar el problema.
