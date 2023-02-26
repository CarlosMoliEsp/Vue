<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

var usuario = ref(""), contraseña = ref("");

function altaUsuario() {
    createUserWithEmailAndPassword(auth, usuario.value, contraseña.value)
        // Salta cunado todo da bien y da las credenciales de usuario
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(userCredential.user);
        })
        // Cunado da error
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message);
        });
}
// Iniciar sesion con un usuario de firebase
function login(){
  signInWithEmailAndPassword(auth, usuario.value, contraseña.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.error(error.message);
    // ..
  });
}
// Iniciar sesion con una cuenta de Google
function loginGoogle() {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

}
</script>
<template>
    <!-- Creamos dos input para introducir los datos necesarios para un registro -->
    Email:<input type="text" name="" id="nombreusuario" v-model="usuario">
    Password:<input type="password" name="" id="passusuario" v-model="contraseña"><br>
    <!-- Boton para registar usuario -->
    <button @click="altaUsuario">Registro de usuario</button><br>
    <button @click="login">Login</button>
    <button @click="loginGoogle">Google</button>

</template>