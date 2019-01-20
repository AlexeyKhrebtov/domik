<template>
	<div id="home">
		<h1 class="title">home.vue</h1>

		<div class="notification is-info" v-show="housesLoadStatus == 1">Loading</div>
		<div class="notification is-success" v-show="housesLoadStatus == 2">houses loaded successfully!</div>
		<span v-show="housesLoadStatus == 3">houses loaded unsuccessfully!</span>

		<ul>
		    <li v-for="house in houses">{{ house.name }}</li>
		</ul>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		created(){
			this.$store.dispatch( 'loadHouses' );
		},
		
		// Вычисляемые свойства для доступа к информации из хранилища
		computed: {			
			housesLoadStatus(){
	        	return this.$store.getters.getHousesLoadStatus;
			},
			houses(){
				return this.$store.getters.getHouses;
			}
			
    	}
	}
</script>

<style>

</style>