import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue'
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
        name: 'home',
        component: Home
    },
    // {
    //     path: '/artist',
    //     name: 'artist',
    //     component: Artist
    // },
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