// Imports de firebase
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import apikey from './apikey.txt';

export const firebaseApp = initializeApp({
    // Creedenciales de la base de datos
    apiKey: "AIzaSyAWs8M6bnQ_LQXtPn8ggPs9ABDaxbQ2pA4",
    authDomain: "proyectovue-7653a.firebaseapp.com",
    projectId: "proyectovue-7653a",
    storageBucket: "proyectovue-7653a.appspot.com",
    messagingSenderId: "1013809358260",
    appId: "1:1013809358260:web:59cfd404c197212794bee1"
})

// Referencias a firebase
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp);