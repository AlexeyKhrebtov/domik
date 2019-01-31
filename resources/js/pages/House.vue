<template>
	<div>
		House.vue
		<ul>
		    <li v-for="house in houses">{{ house.name }}</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>

</style>