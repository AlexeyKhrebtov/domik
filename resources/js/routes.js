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

export default new VueRouter({
	//mode: 'history',
	routes: [
		{
			path: '/',
			name: 'layout',
			component: Vue.component( 'Layout',  require( './layouts/Layout.vue' ).default ),
			children: [		
				{
					path: '/home',
					name: 'home',
					component: Vue.component( 'Home', require( './pages/Home.vue' ).default )
				},				
				{
					path: '/houses',
					name: 'houses',
					component: Vue.component( 'Houses', require( './pages/House.vue' ).default )
				},
				
				{
					path: '/houses/new',
					name: 'newhouse',
					component: Vue.component( 'NewHouse', require( './pages/House.new.vue' ).default )
				},
				
				{
					path: '/houses/:id',
					name: 'house_view',
					component: Vue.component( 'ViewHouse', require( './pages/House.view.vue' ).default )
				},
			]
		}	

	]
});