import Vue from "vue";

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: resolve => require(['../components/DefaultContainer.vue'], resolve),
    children: [{
        path: '',
        component: resolve => require(['../views/Proyectos.vue'], resolve),
        meta: {
            title: 'Nuestros Proyectos',
        }    
    }, {
        path: '/nuestros-proyectos/:id',
        component: resolve => require(['../views/DetalleProyecto.vue'], resolve),
        meta: {
            title: 'Nuestros Proyectos'
        }
    }]
}]

export default routes;