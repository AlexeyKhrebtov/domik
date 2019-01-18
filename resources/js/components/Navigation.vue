<style>

</style>
<template>
    <nav class="top-navigation">Navigation.vue
		<router-link :to="{ name: 'home'}">
			<span class="logo">Domik</span>
		</router-link>

		<ul class="links">
			<li>
				<router-link :to="{ name: 'houses' }">Houses</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'newhouse' }">newhouse</router-link>
			</li>
		</ul>

		<div class="right">
			<img class="avatar" src="user.avatar" show="userLoadStatus == 2"/>
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