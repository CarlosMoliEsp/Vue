<script setup>
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js'
import { signOut } from 'firebase/auth';
import { ref } from 'vue';

let username = ref('')
// Funcion que detecta si hay un usuario conectado
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        username.value = user.email;
    }
});
function cerrarSesion() {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
};

</script>

<template>
    <header>
        <div>
            <RouterLink to="/">Inicio</RouterLink> |
            <RouterLink to="/Ofimatica">Ofimática</RouterLink> |
            <RouterLink to="/Programacion">Programación</RouterLink> |
            <RouterLink to="/SOs">SOs</RouterLink> |
            <RouterLink v-if="username != ''" to="/Administracion">Administración</RouterLink> 
            <RouterLink v-if="username == ''" to="/Registro"><button>Login</button></RouterLink> 
            <button @click="cerrarSesion" v-if="username!=''" to="'/'">Salir</button>
        </div>
    </header>
</template>

<style>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
