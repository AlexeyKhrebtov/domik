<template>
	<div id="home">3333
		<span v-show="housesLoadStatus == 1">Loading</span>
		<span v-show="housesLoadStatus == 2">houses loaded successfully!</span>
		<span v-show="housesLoadStatus == 3">houses loaded unsuccessfully!</span>

		<ul>
		    <li v-for="house in houses">{{ house.name }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		created(){
			this.$store.dispatch( 'loadHouses' );
		},
		
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