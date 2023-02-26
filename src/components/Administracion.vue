<script setup>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase.js"
import { getStorage, ref as ref2, uploadBytes,getDownloadURL} from "firebase/storage";
// Import para mostrar campos
import Ofimatica from "./Ofimatica.vue"
import Programacion from './Programacion.vue'
import SOs from './SOs.vue'
// Import para añadir campos y usar coleciones
import { addDoc, collection } from '@firebase/firestore'
import { useCollection, useFirestore } from 'vuefire'

let nombreUsuario = ref("");
// Cada vez que cambie el usuario se muestra o no algo
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        nombreUsuario.value = user.email;
    }
});

// Lee los campos de la coleccion
const db = useFirestore()
const curso1 = useCollection(collection(db, 'Ofimatica'))
const curso2 = useCollection(collection(db, 'Programacion'))
const curso3 = useCollection(collection(db, 'Ofimatica'))
// Añade curso a Ofimatica
function nuevoCursoOfimatica() {
    const docRef = addDoc(collection(db, 'Ofimatica'), {
        nombre: 'Office',
        horas: '120',
        imagen:''
    });
};
// Añade curso a Programacion
function nuevoCursoProgramacion() {
    const docRef = addDoc(collection(db, 'Programacion'), {
        nombre: 'Symfony',
        horas: '80',
        imagen:''
    });
};
// Añade curso a SOs
function nuevoCursoSOs() {
    const docRef = addDoc(collection(db, 'SOs'), {
        nombre: 'Android',
        horas: '50',
        imagen:''
    });
};
</script>

<template>
    <h1>Panel de Administracion</h1>
    <!-- Muestras los componentes de los cursos -->
    <Ofimatica></ofimatica>
    <button @click="nuevoCursoOfimatica">Nuevo curso</button>
    <Programacion></Programacion>
    <button @click="nuevoCursoProgramacion">Nuevo curso</button>
    <SOs></SOs>
    <button @click="nuevoCursoSOs">Nuevo curso</button>
</template>