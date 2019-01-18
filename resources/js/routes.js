/**
 * routes.js
 * 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store.js';

/*
    Extends Vue to use Vue Router
*/
Vue.use( VueRouter )

import HomePage from './pages/Home.vue';

export default new VueRouter({
	//mode: 'history',
	routes: [
		{
			path: '/',
			name: 'layout',
			component: Vue.component( 'Layout', require( './layouts/Layout.vue' ) ),
			children: [
				
		
				{
					path: '/home',
					name: 'home',
					//component: Vue.component( 'Home', require( './pages/Home.vue' ) )
					component: HomePage
				},
				
				{
					path: '/house',
					name: 'houses',
					component: Vue.component( 'Houses', require( './pages/House.vue' ) )
				},
				
				{
					path: '/house/new',
					name: 'newhouse',
					component: Vue.component( 'NewHouse', require( './pages/House.new.vue' ) )
				},
				
				{
					path: '/house/:id',
					name: 'house',
					component: Vue.component( 'House', require( './pages/House.vue' ) )
				},
				
			]
		}	

	]
});