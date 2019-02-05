<template>
	<div>
		<section class="hero">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">{{ floor.number }} этаж</h1>
					<h2 class="subtitle">Список квартир</h2>
				</div>
			</div>
		</section>

		<section class="section">
			<div class="columns">
				<div class="column">
					<nav class="panel">
						<p class="panel-heading">Квартиры</p>
						<template v-for="room in floor.rooms">
							<router-link class="panel-block" :to="{}">
								квартира {{ room.number }}
							</router-link>
						</template>
					</nav>
				</div>
				<div class="column">
					<room-new :floor_id=floor.id></room-new>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		created() {
			this.$store.dispatch( 'loadFloor', {
				id: this.$route.params.floor_id
			});
		},

		components: {
			'room-new': require('./Room.new.vue').default
		},

		computed: {
			floor() {
				return this.$store.getters.getFloor;
			}
		}
	}
</script>