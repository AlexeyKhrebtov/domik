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
				},
				tooltip: null,
				tooltipLayer: null
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
    			// Сетка
    			this.drawGrid();
    			
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
    			this.houseFull.doors.forEach(function(door, i_d){
    				if (door.max_rooms > 0) {
    					vw.drawDoor(door, i_d);

    					door.floors.forEach(function(floor, i_f){
    						vw.drawFloor(floor, i_f, i_d);
    					});
					}
    			});
    		},

    		drawDoor(d, i) {
    			var vm = this;

    			var height = d.floors.length * 20,
    				width = d.max_rooms * 30,
    				door_number = 'Парадная ' + d.number;


				var coords = this.calcDoorCoords();

    			var layer = new Konva.Layer ();
				var door_rect = new Konva.Rect({
					x: coords.x,
					y: coords.y,
					width: width,
					height: height,
					opacity: 0.4,
					fill: 'green',
					stroke: 'black',
					strokeWidth: 2,
					name: 'door di'+i,
					CF_DATA : {
						name: door_number
					}
				});

				door_rect.on("mousemove", function() {
					let shape_data = this.getAttrs(),
						tooltip_text = shape_data.CF_DATA.name;

					vm.showTooltip(vm.stage.getPointerPosition(), tooltip_text);
				});
				door_rect.on("mouseout", function(){
			        vm.hideTooltip();
			    });

				layer.add(door_rect);
				this.stage.add(layer);
    		},


    		// Рассчитать координаты левого верхнего угла для парадной
    		calcDoorCoords() {
    			let added_doors = this.stage.find('.door'),
    				coords = {x:50, y:50};

    			const door_margin = 10; // 10px

    			if (added_doors.length == 0) {
    				// Первая парадная - ничего не делаем
    			}
    			else {
    				added_doors.forEach(function(d){
    					coords.x = d.getAttr('x') + d.getAttr('width') + door_margin;
    				});
    			}

    			return coords;
    		},

    		// Рисуем этаж
    		drawFloor(f, i, door_id)	{
    			let door = this.stage.findOne('.di'+door_id),
    				door_attrs = door.getAttrs(),
    				floor_door_id = 'fdi'+door_id; // привязка этажа к парадной
				
				var coords = this.calcFloorCoords(floor_door_id, door_attrs);

				var layer = new Konva.Layer ();
				var floor_rect = new Konva.Rect({
					x: coords.x,
					y: coords.y,
					width: f.rooms.length*30 || 10,
					height: 20,
					opacity: 0.5,
					fill: 'blue',
					stroke: 'black',
					strokeWidth: 2,
					name: 'floor fi' + i + ' ' + floor_door_id,
					CF_DATA : {
						name: 'fl'
					}
				});
				layer.add(floor_rect);
				this.stage.add(layer);
    		},

    		calcFloorCoords(floor_door_id, door_attrs) {

    			let floor_height = 20, // px
    				coords = {x: door_attrs.x, y: 50}, // x - как у парадной
    				added_floors = this.stage.find('.'+floor_door_id);

				if (added_floors.length) {
					// если есть добавленные этажи
					coords.y = door_attrs.y + door_attrs.height - floor_height*(added_floors.length+1);
				}
				else {
					// Если это первый этаж
					coords.y = door_attrs.y + door_attrs.height - floor_height;
					
				}

    			console.log("door_attrs", coords.y);
    			return coords;
    		},

    		// тестовое рисование
    		testdraw() {
    			var layer = new Konva.Layer();

    			// создаем нашу форму 
				var circle = new Konva.Circle ({ 
					x: this.stage.getWidth () / 2, 
					y: this.stage.getHeight () / 2, 
					radius: 30, 
					fill: 'red',
					stroke: "black", 
					strokeWidth: 4 
				});

				// добавляем фигуру к слою 
				layer.add (circle);

				// добавить слой на сцену 
				this.stage.add (layer);

				// рисуем изображение 
				layer.draw ();
    		},


    		// Рисуем сетку на холсте
    		drawGrid() {
    			var layer = new Konva.Layer();

    			// Y
    			for (var x = 0; x < this.stage.getWidth(); x += 10) {
    				let line = new Konva.Line({
						points: [x, 0, x, this.stage.getHeight()],
						stroke: '#eee'
					});
					layer.add( line );
				}

				// X
				for (var y = 0; y < this.stage.getHeight(); y += 10) {
    				let line = new Konva.Line({
						points: [0, y, this.stage.getWidth(), y],
						stroke: '#eee'
					});
					layer.add( line );
				}

    			// добавить слой на сцену 
				this.stage.add (layer);
				// рисуем изображение 
				layer.draw ();
    		},

    		// Подсказка при наведении
    		showTooltip(mousePos, text) {
    			if (!this.tooltip){
    				this.tooltipLayer = new Konva.Layer();
    				this.tooltip = new Konva.Text({
						text: "",
						fontFamily: "Calibri",
						fontSize: 12,
						padding: 5,
						textFill: "red",
						fill: "black",
						alpha: 0.75,
						visible: false
					});
					this.tooltipLayer.add(this.tooltip);
					this.stage.add(this.tooltipLayer);
    			}
			
				this.tooltip.position({
					x : mousePos.x + 10,
					y : mousePos.y + 10
				});

				this.tooltip.text(text);
				this.tooltip.show();
				this.tooltipLayer.batchDraw();
    		},
    		hideTooltip() {
    			this.tooltip.hide();
        		this.tooltipLayer.draw();
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