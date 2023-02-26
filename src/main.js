import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Importas todos los componentes que utilizas
import NotFound from './components/NotFound.vue'
import Inicio from './components/Inicio.vue'
import Ofimatica from './components/Ofimatica.vue'
import Programacion from './components/Programacion.vue'
import SOs from './components/SOs.vue'
import Registro from './components/Registro.vue'
import Administracion from './components/Administracion.vue'

// Importa de la base de datos
import { firebaseApp } from './firebase.js'
import { VueFire, VueFireAuth } from 'vuefire'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './firebase.js'

import './assets/main.css'

var estaAutenticado = false; //Variable para saber si esta identifcado el usuario
// Cada vez que cambie el usuario se muestra o no algo
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        estaAutenticado = true;
    } else {
        estaAutenticado = false;
        router.push("/");//Al no estar logueado te manda al componente de Inicio
    }
});

const routes = [
    {
        // Cuando la ruta esta vaciada significa que mostrará el componente Inicio
        path: '/',
        component: Inicio,
        props: {
            msg: 'Holaa, tú estas en el inicio'
        }
    },
    {
        // Muestra Ofimatica
        path: '/Ofimatica',
        component: Ofimatica,
        props: {
            msg: 'Estas en Ofimatica'
        }
    },
    {
        // Muestra Programacion
        path: '/Programacion',
        component: Programacion,
        props: {
            msg: 'Estas en Programacion'
        }
    },
    {
        // Muestra SOs
        path: '/SOs',
        component: SOs,
        props: {
            msg: 'Estas en SOs'
        }
    },
    {
        // Muestra Registro
        path: '/Registro',
        component: Registro
    },
    {
        //Muestra Administracion
        path: '/Administracion',
        component: Administracion,
        // Para que solo entre si hizo login
        beforeEnter: (to, from) => {
            if (estaAutenticado)
                return true
            else
                return false
        },
    },
    {
        // Si la ruta no esta especificada mostrara el error definido en el componente NotFound
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// const miApp
const miapp = createApp(App)
miapp.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
        // we will see other modules later on
        VueFireAuth(),
    ],
});
miapp.use(router);
miapp.mount('#app');
