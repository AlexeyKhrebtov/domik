<template>
	<div id="app-layout">
		<navigation></navigation>
		<breadcrumbs></breadcrumbs>
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
	import Breadcrumbs from '../components/Breadcrumbs.vue';
	import Appfooter from '../components/Footer.vue';

	export default {
		components: {
			Navigation,
			Breadcrumbs,
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