import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
// import Artist from '../components/Artist.vue'
// import Album from '../components/Album.vue'
// import Music from '../components/Music.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    // {
    //     path: '/album',
    //     name: 'album',
    //     component: Album
    // },
    // {
    //     path: '/music',
    //     name: 'music',
    //     component: Music,
    // }
]
});

export default router