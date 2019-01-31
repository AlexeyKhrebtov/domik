<template>
	<div>
		<h1 class="title is-1">Door.view.vue</h1>
		<h1 class="title is-1">Просмотр парадной № {{ door.number }}</h1>

		<h2 class="subtitle  is-2">Список этажей:</h2>

		<router-link :to="{name: 'door_floors'}">добавить этаж</router-link>
	</div>
</template>

<script>
	export default {
		created() {
			this.$store.dispatch( 'loadDoor', {
				id: this.$route.params.id
			})
		},

		computed: {
			door() {
				return this.$store.getters.getDoor;
			}
		}
	}
</script>