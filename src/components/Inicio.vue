<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="greetings">
    <!-- Muestra el msg dicho en inicio del main.js -->
    <h1 class="green">{{ msg }}</h1>
    <h3>
      En esta empresa contamos con una gran cantidad de cursos,para que todo alumno de la Junta de 
      Andalucia pueda incrementar sus conocimientos de forma voluntaria.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
