<template>
    <nav class="navbar">
    	<div class="container">

    		<div class="navbar-brand">
    			<router-link :to="{ name: 'home'}" class="navbar-item">
					DOMIK
				</router-link>

				<span class="navbar-burger burger " data-target="navMenu" @click="toggleBurgerMenu" :class="{'is-active': isActiveBurgerMenu}" >
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>

			<div class="navbar-menu" :class="{'is-active': isActiveBurgerMenu}">	
				<div class="navbar-end">
					<router-link class="navbar-item" :to="{ name: 'home' }">Home</router-link>
					<router-link class="navbar-item" :to="{ name: 'houses' }">Список домов</router-link>
					<router-link class="navbar-item" :to="{ name: 'newhouse' }">Добавить дом</router-link>
				</div>				
			</div>
		</div>
    </nav>
</template>

<script>
    export default {
		/*
		Defines the computed properties on the component.
		*/
		computed: {
			/*
			Retrieves the User Load Status from Vuex
			*/
			userLoadStatus(){
				return this.$store.getters.getUserLoadStatus;
			},

			/*
			Retrieves the User from Vuex
			*/
			user(){
				//return this.$store.getters.getUser;
			}
		},
		data() {
			return {
				isActiveBurgerMenu: false
			}
		},
		methods: {
			toggleBurgerMenu: function() {
				this.isActiveBurgerMenu = !this.isActiveBurgerMenu;
			}
		}
    }
</script>

<style>
	.navbar-brand a.navbar-item {
		font-weight:bold;
	}
</style>