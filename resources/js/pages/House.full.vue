<template>
	<div>
		house full

		<v-stage :config="configKonva" ref="stage" class="konva"></v-stage>

		<div class="box">
			<pre class="code">{{houseFull}}</pre>
		</div>
		
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
					width: 1300,
					height: 700
				}
			}
		},

		created(){
			this.$store.dispatch( 'loadHouseFull', {
				id: this.$route.params.id
			});			
		},

		computed: {
			// Полные данные о доме
			houseFull(){
				return this.$store.getters.getHouseFull;
			},
			// Konva
			stage() {
				return this.$refs.stage.getStage();
			}
    	},

		watch: {
			houseFull: function(newVal, oldVal){
				this.start();
			}
		},

    	methods: {
    		start() {
    			// Тестовое рисование
    			this.testdraw();

    			// Произведем расчеты
    			this.houseFull.doors.forEach(function(door){
    				// Подъезд
    				door.max_rooms = 0;

    				door.floors.forEach(function(floor){
						// Этаж
						if (floor.rooms.length > door.max_rooms) {
							door.max_rooms = floor.rooms.length;
						}


						floor.rooms.forEach(function(room){
							// Квартира
	    				});
    				});
    			});

    			const vw = this;
    			// Вывод
    			this.houseFull.doors.forEach(function(door, i){
    				if (door.max_rooms > 0) vw.drawDoor(door, i);
    			});
    		},

    		drawDoor(d, i) {
    			let height = d.floors.length * 20,
    				width = d.max_rooms * 30;

    			var layer = new Konva.Layer ();
				var rect = new Konva.Rect({
					x: width+50*i,
					y: 50,
					width: width,
					height: height,
					opacity: 0.5,
					fill: 'green',
					stroke: 'black',
					strokeWidth: 2
				});
				layer.add(rect);
				this.stage.add(layer);

    			console.log(d, i);
    		},


			// ToDo:
			// 	calcDoorCoords()
			// 		getLeftTopStartPoint()
			// 		


    		// тестовое рисование
    		testdraw() {
    			var layer = new Konva.Layer ();

    			// создаем нашу форму 
				var circle = new Konva.Circle ({ 
					x: this.stage.getWidth () / 2, 
					y: this.stage.getHeight () / 2, 
					radius: 70, 
					fill: "red", 
					stroke: "black", 
					strokeWidth: 4 
				});

				// добавляем фигуру к слою 
				layer.add (circle);

				// добавить слой на сцену 
				this.stage.add (layer);
				

				// рисуем изображение 
				layer.draw ();
    		}
    	}
	}
</script>

<style>
	.konvajs-content {
		border: 1px dashed #AAA;

		/*
		background: url(https://images.unsplash.com/photo-1478109562701-8d261b58b09d) no-repeat center center fixed; 
		-webkit-background-size: contain;
		-moz-background-size: contain;
		-o-background-size: contain;
		background-size: contain;
		*/
	}
</style>