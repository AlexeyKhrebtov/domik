<template>
	<div>111-App.vue
		{{name}}
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "App component :)"
			}
		}
	}
</script>