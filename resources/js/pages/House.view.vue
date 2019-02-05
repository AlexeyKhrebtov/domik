<template>
	<div>
		<!-- resources\js\pages\House.view.vue -->
		<section class="hero">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">{{ house.name }}</h1>
					<h2 class="subtitle">Список парадных</h2>
				</div>
			</div>
		</section>
		
		<!-- ToDo: add Konva -->
		<!-- <konva></konva> -->

		<section class="section">
			<div class="columns">
				<div class="column">
					<!-- ToDo: разнести по компонентам? -->
					<nav class="panel">
						<p class="panel-heading">Парадные</p>
						<template v-for="door in house.doors">
							<router-link class="panel-block" v-bind:to="{name: 'door_view', params: {door_id: door.id}}">{{ door.number }}</router-link>
						</template>
					<!--
						<div class="panel-block">
							<router-link class="button is-link is-outlined is-fullwidth" v-bind:to="{ name: 'newdoor', params: {id: house.id} }">добавить парадную</router-link>
						</div>
					-->
					</nav>
				</div>
				<div class="column">
					<door-new :house_id=house.id></door-new>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	//import konva from '../components/Konva.vue';
	//import konva from '../components/Konva.vue';

	export default {
		components: {
			'door-new': require('./Door.new.vue').default
		},

		created(){
			this.$store.dispatch( 'loadHouse', {
				id: this.$route.params.id
			});
		},

		computed: {			
			houseLoadStatus(){
	        	return this.$store.getters.getHouseLoadStatus;
			},
			house(){
				return this.$store.getters.getHouse;
			}
			
    	}
	}
</script>