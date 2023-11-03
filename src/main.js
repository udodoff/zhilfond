import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loader from "vue-ui-preloader";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App).use(store).use(loader).use(router).use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  }).mount('#app')
