import { createApp } from 'vue';
import './assets/css/main.css';
import App from './App.vue'
import router from './router';
import store from './stores/menu';


const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');