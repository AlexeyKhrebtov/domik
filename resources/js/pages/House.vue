<template>
	<div id="home">
		<h1 class="title">Список объектов</h1>

		

		<div class="columns">
			<div class="column">
				<nav class="panel">
					<p class="panel-heading">Список объектов / проектов</p>
					<template v-for="house in houses">
						<router-link class="panel-block" v-bind:to="{ name: 'house_view', params: {id: house.id} }">
							<span class="panel-icon has-text-info">
								<i class="fas fa-building" aria-hidden="true"></i>
							</span>
							{{ house.name }}
						</router-link>
					</template>
				</nav>
				<div class="notification is-info" v-show="housesLoadStatus == 1">Loading</div>
				<div class="notification is-success" v-show="housesLoadStatus == 2">houses loaded successfully!</div>
				<span v-show="housesLoadStatus == 3">houses loaded unsuccessfully!</span>
			</div>
			<div class="column">
				<div>
					<router-link :to="{name: 'constructor'}">Конструктор</router-link>
				</div>
				<house-new></house-new>

				<house-smart-new></house-smart-new>
			</div>
		</div>

		

	</div>
</template>

<script>
	export default {
		created(){
			this.$store.dispatch( 'loadHouses' );
		},
		
		components: {
			'house-new': require('./House.new.vue').default,
			'house-smart-new': require('./House.smart.new.vue').default
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