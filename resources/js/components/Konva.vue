<template>
	<div id="konva">
		<v-stage :config="configKonva" ref="stage">
			<v-layer>
				<v-circle :config="configCircle"></v-circle>
			</v-layer>

			<v-layer>
				<v-text :x=10 :y=10 text="house_name"></v-text>
				<v-rect :config="configrect"></v-rect>
			</v-layer>
		</v-stage>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueKonva from 'vue-konva'

	Vue.use( VueKonva )
	
	const width = 1000
	//const width = document.getElementById('konva').offsetWidth;
	const height = 600

	export default {
		data() {
			return {
				configKonva: {
					width: width,
					height: height
				},
				configCircle: {
					x: 100,
					y: 100,
					radius: 70,
					fill: "red",
					stroke: "black",
					strokeWidth: 4
				},
				configrect: {
					x: 50,
					y: 50,
					width: 100,
					height: 50,
					fill: 'green',
					stroke: 'black',
					strokeWidth: 4
				}
			};
		},

		mounted: function() {
			console.log('rr', this.houserr)
		},

		computed: {
            houserr() {
                return this.$store.getters.getHouse;
            }
        },
	}
</script>

<style>
	#konva {
		width:100%; 
		height: 600px; 
		border:1px solid #999; 
		background-image: linear-gradient(to right top, #ffb7b7, #fec9d7, #f9dcee, #f8eefa, #ffffff);
	}

	canvas {
		border: 1px solid #333;
	}
</style>