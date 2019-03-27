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
					path: '',
					name: 'main',
					component: Vue.component( 'Main', require( './pages/Main.vue' ).default )
				},
				{
					path: '/constructor',
					name: 'constructor',
					component: Vue.component( 'Constructor', require('./pages/Constructor.vue').default )
				},						
				{
					path: '/houses',
					name: 'houses',
					component: Vue.component( 'Houses', require( './pages/House.vue' ).default )
				},
				
				{
					path: '/houses/:id',
					name: 'house_view',
					component: Vue.component( 'House', require( './pages/House.view.vue' ).default ),
					props: (route) => {
						const id = Number.parseInt(route.params.id, 10);
						if (Number.isNaN(id)) {
							return 0
						}
							return { id }
					}
				},
				{
					path: '/houses/:id/full',
					name: 'house_full',
					component: Vue.component( 'HouseFull', require( './pages/House.full.vue' ).default ),
					props: (route) => {
						const id = Number.parseInt(route.params.id, 10);
						if (Number.isNaN(id)) {
							return 0
						}
							return { id }
					}
				},
				{
					path: '/houses/:id/doors/:door_id',
					name: 'door_view',
					component: Vue.component( 'ViewDoor', require( './pages/Door.view.vue' ).default )
				},
				{
					path: '/houses/:id/doors/:door_id/floors/:floor_id',
					name: 'floor_view',
					component: Vue.component( 'ViewFloor', require( './pages/Floor.view.vue' ).default )
				}
			]
		}	

	]
});