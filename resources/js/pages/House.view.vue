<template>
	<div>
		<section class="hero">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">{{ house.name }}</h1>
					<h2 class="subtitle">Общий план дома</h2>
				</div>
			</div>
		</section>
		
		<!-- ToDo: add Konva -->
		<konva></konva>

		<section class="section">
			<div class="columns">
				<div class="column">
					<!-- ToDo: разнести по компонентам? -->
					<nav class="panel">
						<p class="panel-heading">Парадные</p>
						<template v-for="door in house.doors">
							<a href="" class="panel-block">{{ door.number }}</a>
						</template>
						
						<div class="panel-block">
							<router-link class="button is-link is-outlined is-fullwidth" v-bind:to="{ name: 'newdoor', params: {id: house.id} }">добавить парадную</router-link>
						</div>
					</nav>
				</div>
  				<div class="column">
					<nav class="panel">
						<p class="panel-heading">Этажи</p>
						<a href="" class="panel-block">3</a>
						<a href="" class="panel-block">3</a>
						<div class="panel-block">
							<button class="button is-link is-outlined is-fullwidth is-loading">
								добавить этаж
							</button>
						</div>
					</nav>
				</div>
  				<div class="column">
					<nav class="panel">
						<p class="panel-heading">Квартиры</p>
						<a href="" class="panel-block">4</a>
						<a href="" class="panel-block">4</a>
						<div class="panel-block">
							<button class="button is-link is-outlined is-fullwidth is-loading">
								добавить квартиру
							</button>
						</div>
					</nav>
				</div>
			</div>
		</section>
		<router-view></router-view>
	</div>
</template>

<script>
	import konva from '../components/Konva.vue';

	export default {
		components: {
			konva
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