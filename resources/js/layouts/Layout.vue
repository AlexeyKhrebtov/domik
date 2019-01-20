<template>
	<div id="app-layout">
		<navigation></navigation>
		<section class="section main">
			<div class="container">
				<router-view></router-view>
			</div>
		</section>
		<appfooter></appfooter>
	</div>
</template>

<script>
	import Navigation from '../components/Navigation.vue';
	import Appfooter from '../components/Footer.vue';

	export default {
		components: {
			Navigation,
			Appfooter
    	},

    	created(){
    		this.$store.dispatch( 'loadHouses' );
    		//this.$store.dispatch( 'loadUser' );
		}
	}
</script>

<style>

</style>