<style>

</style>
<template>
    <nav class="navbar is-primary">
    	<div class="container">

    		<div class="navbar-brand">
    			<router-link :to="{ name: 'home'}" class="navbar-item">
					DOMIK
				</router-link>

				<span class="navbar-burger burger" data-target="navMenu">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>

			<div class="navbar-menu">		
				<router-link :to="{ name: 'houses' }">Houses</router-link>
				<router-link :to="{ name: 'newhouse' }">newhouse</router-link>
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
		}
    }
</script>