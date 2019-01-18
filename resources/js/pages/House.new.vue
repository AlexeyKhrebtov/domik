<template>
	<div>
		House.new.vue
		<form action="">
			<label for="">
				name
				<input type="text" placeholder="name" v-model="name">
			</label>
			<a class="button" v-on:click="submitNewHouse()">Add House</a>
		</form>
	</div>
</template>

<script>
	export default {		
    	data() {
    		return {
    			name: ''
    		}
    	},

    	methods: {
			submitNewHouse(){
				this.$store.dispatch( 'addHouse', {
					name: this.name
				});
			}
		}
	}
</script>

<style>

</style>