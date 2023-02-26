<script setup>
import { auth } from "../firebase.js"
import { onAuthStateChanged} from "firebase/auth";
import { ref } from "vue";

let nombreUsuario = ref("");

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        nombreUsuario.value = user.email;
    }
});
</script>
<template>
    <footer class="pie">
        <h3>Carlos Molina Espinosa</h3>
        <h3>Politica de Privacidad</h3>
        <a href="#">Contacto de la empresa</a>
        <!-- Enlace a mi Github -->
        <a href="https://github.com/CarlosMoliEsp/Vue"><img class="git" src="../images/github.jpeg"></a>
        <p>{{ nombreUsuario }}</p> <!-- Nombre del usuario conectado -->
    </footer>
</template>
<style>
.pie{
    text-align: right;
}
.git{
    width: 30px;
    height: 30px;
}
</style>