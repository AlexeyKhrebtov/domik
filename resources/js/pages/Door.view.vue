<template>
	<div>
		<section class="hero">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">Парадная № {{ door.number }}</h1>
					<h2 class="subtitle">Список этажей</h2>
				</div>
			</div>
		</section>
		
		<section class="section">
			<div class="columns">
				<div class="column">
					<nav class="panel">
						<p class="panel-heading">Этажи</p>
						<template v-for="floor in door.floors">
							<router-link class="panel-block" v-bind:to="{name: 'floor_view', params: {floor_id: floor.id, door_id: 1}}">{{ floor.number }} этаж</router-link>
						</template>
					</nav>
				</div>
				<div class="column">
					<floor-new></floor-new>
				</div>
			</div>
		</section>
		
	</div>
</template>

<script>
	export default {
		created() {
			this.$store.dispatch( 'loadDoor', {
				id: this.$route.params.id
			})
		},

		components: {
			'floor-new': require('./Floor.new.vue').default
		},

		computed: {
			door() {
				return this.$store.getters.getDoor;
			}
		}
	}
</script>