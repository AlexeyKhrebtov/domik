<template>
	<div>
		house full
	</div>
</template>

<script>
	//import konva from '../components/Konva.vue';
	import konva from '../components/Konva.vue';

	export default {
		components: {
			//'door-new': require('./Door.new.vue').default
		},

		created(){
			this.$store.dispatch( 'loadHouseFull', {
				id: this.$route.params.id
			});
		},

		computed: {
			houseFull(){
				return this.$store.getters.getHouseFull;
			}
			
    	}
	}
</script>