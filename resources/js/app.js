require('./bootstrap');
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import Vue from 'vue'
import router from './routes.js'
import store from './store.js'

/*
import App from './components/App.vue';
 
var app = new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store
})
*/

new Vue({
	router,
	store
}).$mount('#app')