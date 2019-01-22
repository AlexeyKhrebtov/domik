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
		<div style="width:100%; height: 600px; border:1px solid #999; background-image: linear-gradient(to right top, #ffb7b7, #fec9d7, #f9dcee, #f8eefa, #ffffff);">			
		</div>

		<section class="section">
			<div class="columns">
				<div class="column">
					<!-- ToDo: разнести по компонентам? -->
					<nav class="panel">
						<p class="panel-heading">Парадные</p>
						<a href="" class="panel-block">1</a>
						<a href="" class="panel-block">2</a>
						<div class="panel-block">
							<button class="button is-link is-outlined is-fullwidth">
								добавить парадную
							</button>
							<br>
							<router-link class="button" v-bind:to="{ name: 'newdoor', params: {id: 1} }">asd</router-link>
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
	export default {
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