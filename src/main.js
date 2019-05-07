import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Registrar from './Registrar.vue'
import ListEmpresas from './ListEmpresas.vue'
import Delete from './Delete.vue'
import Update from './Update.vue'
import Login from './Login.vue'
import Home from './Home.vue'
Vue.use(VueRouter);

const routes = [
    { path: '/', component: Login },
    { path: '/registrar', component: Registrar },
    { path: '/home', component: Home },
    { path: '/eliminar', component: Delete },
    { path: '/actualizar/:id', name: 'editar-empresa', component: Update },
    { path: '/empresas', component: ListEmpresas },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.component('registrar', Registrar);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})