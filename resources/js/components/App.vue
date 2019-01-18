<template>
	<div>111
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