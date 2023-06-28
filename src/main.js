import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import './assets/all.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
// app.use(VueSweetalert2);
// app.use(LoadingPlugin);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
