import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import './assets/all.scss';

const pinia = createPinia();
const app = createApp(App);
// router.afterEach(() => window.scrollTo({
//   top: 0,
//   behavior: 'smooth',
// })); // 換頁捲動至最上方

app.use(pinia);
// app.use(VueSweetalert2);
// app.use(LoadingPlugin);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
