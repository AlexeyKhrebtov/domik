<template>
	<div id="app-layout">
		<navigation></navigation>	
		<router-view></router-view>
	</div>
</template>

<script>
	import Navigation from '../components/Navigation.vue';

	export default {
		components: {
			Navigation
    	},

    	created(){
    		this.$store.dispatch( 'loadHouses' );
    		//this.$store.dispatch( 'loadUser' );
		}
	}
</script>

<style>

</style>