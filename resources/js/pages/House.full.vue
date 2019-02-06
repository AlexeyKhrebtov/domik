<template>
	<div>
		house full

		<v-stage :config="configKonva" ref="stage">

		</v-stage>
	</div>
</template>

<script>
	//import konva from '../components/Konva.vue';
	import Vue from 'vue';
	import VueKonva from 'vue-konva'

	Vue.use( VueKonva )

	export default {
		data() {
			return {
				configKonva: {
					width: 1000,
					height: 600
				}
			}
		},

		created(){
			this.$store.dispatch( 'loadHouseFull', {
				id: this.$route.params.id
			});

			
		},

		computed: {
			houseFull(){
				return this.$store.getters.getHouseFull;
			},
			stage() {
				return this.$refs.stage.getStage();
			},
    	},

		mounted: function (){
			this.runDraw();
		},

    	methods: {
    		runDraw() {
    			console.log('runDraw', this.houseFull, this.stage);
    		}
    	}
	}
</script>