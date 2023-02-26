<script setup>
import { addDoc, collection } from '@firebase/firestore';
import { useCollection, useFirestore } from 'vuefire'


const db = useFirestore()
const cursos = useCollection(collection(db, 'SOs'))

defineProps({
    msg: {
        type: String,
        required: true
    }
})

</script>

<template>
    <h1>Programación</h1>
    <!-- Primer tr donde hace un indice de los campos-->
    <tr>
        <th>Nombre . </th>
        <th>Horas . </th>
        <th>Imagen . </th>
        <th>Inscripcion . </th>
    </tr>
    <!-- Muestra los datos de cada curso -->
    <tbody v-for="curso in cursos" :key="curso.nombre">
        <tr>
            <td>{{ curso.nombre }}</td>
            <td>{{ curso.horas }}</td>
            <!-- Para la imagen lo mostramso complementando la ruta con el dato puesto para cada imagen en firebase -->
            <td><img v-bind:src="'../src/images/' + curso.imagen" v-bind:alt="'' + curso.imagen" width="50"></td>
            <td><button>Incribirse</button></td>
        </tr>
    </tbody>
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