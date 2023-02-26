<script setup>
// Import para mostrar el pie y cabecera de la página
import pie from './components/pie.vue'
import cabecera from './components/cabecera.vue'
//Preload
import { ref, onMounted } from 'vue'
const loading = ref(true)
onMounted(() => {
  // Aquí obtén los datos
  // Cuando se hayan obtenido, establece loading en false después de 2 segundos
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

</script>

<template>
  <img alt="Vue logo" class="logo" src="./assets/fotoinicio.jpg"/>
  <header>
    <cabecera></cabecera>     <!-- Muestra la cabecera con cada Categoria -->
    <div v-if="loading" class="preload"></div>     <!-- Hace un preload al darle a recargar la pagina -->
  </header>

<!-- Para realizar las rutas al pinchar en las categorias -->
  <main>
    <router-view></router-view>
  </main>

  <pie></pie>     <!-- Muestra el pie de pagina -->
</template>

<style scoped>
.preload {
  width: 60px;
  height: 60px;
  border: 8px solid #ffffff;
  border-top: 8px solid green;
  border-radius: 50%;
  animation: spin 0.8s ease-in-out infinite;
  margin: 0 auto;
  backdrop-filter: blur(100px);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
