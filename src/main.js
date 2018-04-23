import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {store} from './store/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//
// Vue.component('navbar', require('./components/Navbar.vue'));


// lazy-loading
const Hello = () => import('./components/Hello.vue')





Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
 
const routes = [
	{ path: '/', component: Hello}
];

const router = new VueRouter({
  	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
        created() {
	        // console.info(this.$store.getters['a/name']);
	        console.info("CREATED", this.$store.getters.count);
        }
})
