import { createApp } from 'vue';
import './assets/css/main.css';
import App from './App.vue'
import router from './router';
import store from './stores/menu';
import prismic from './prismic'

const endpoint = 'https://good-things-fdn.prismic.io//api/v2'
// Route resolver
const routes = [
    {
        type: 'page',
        path: '/:uid',
    },
    {
        type: 'Single',
        uid: 'home',
        path: '/'
    },
    {
        type: 'page',
        path: '/about',
        uid: 'about'
    },
    {
        type: 'page',
        path: '/learn',
        uid: 'learn'
    },
    {
        type: 'page',
        path: '/divide',
        uid: 'divide'
    },
]

const app = createApp(App);

app.use(router);
app.use(store);
app.use(prismic)


app.mount('#app');