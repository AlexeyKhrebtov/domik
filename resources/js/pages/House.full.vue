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
	import { APP_CONFIG } from '../config.js';
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
			},

			roomWidth() {
				return APP_CONFIG.ROOM_WIDTH + APP_CONFIG.ROOM_MARGIN.left + APP_CONFIG.ROOM_MARGIN.right;
			},

			roomHeight() {
				return APP_CONFIG.ROOM_HEIGHT + APP_CONFIG.ROOM_MARGIN.top + APP_CONFIG.ROOM_MARGIN.bottom;
			},

			floorHeight() {
				return this.roomHeight + APP_CONFIG.FLOOR_MARGIN.top + APP_CONFIG.FLOOR_MARGIN.bottom;
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
    			this.houseFull.doors.forEach(function(door, i_d) {
    				if (door.max_rooms > 0) {
    					vw.drawDoor(door, i_d);

    					door.floors.forEach(function(floor, i_f) {
    						vw.drawFloor(floor, i_f, i_d);

    							floor.rooms.forEach(function(room, i_r) {
    								vw.drawRoom(room);
    							});
    					});
					}
    			});
    		},

    		drawDoor(d, i) {
    			var vm = this;

    			var height = (vm.floorHeight * d.floors.length) - ((d.floors.length-1) *APP_CONFIG.FLOOR_MARGIN.top),  //d.floors.length * 20,
    				width = (vm.roomWidth * d.max_rooms) + APP_CONFIG.FLOOR_MARGIN.left + APP_CONFIG.FLOOR_MARGIN.right,
    				door_number = 'Парадная ' + d.number;


				var coords = this.calcDoorCoords();

    			var layer = new Konva.Layer ();
				var door_rect = new Konva.Rect({
					x: coords.x,
					y: coords.y,
					width: width,
					height: height,
					opacity: 0.3,
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

    			if (added_doors.length == 0) {
    				// Первая парадная - ничего не делаем
    			}
    			else {
    				added_doors.forEach(function(d){
    					coords.x = d.getAttr('x') + d.getAttr('width') + APP_CONFIG.DOOR_MARGIN.left;
    				});
    			}

    			return coords;
    		},

    		// Рисуем этаж
    		drawFloor(f, i, door_id)	{
    			let vm = this,
    				door = this.stage.findOne('.di'+door_id),
    				door_attrs = door.getAttrs(),
    				floor_door_id = 'fdi'+door_id; // привязка этажа к парадной
				
				var coords = this.calcFloorCoords(floor_door_id, door_attrs);

				var layer = new Konva.Layer ();
				var floor_rect = new Konva.Rect({
					x: coords.x,
					y: coords.y,
					width: (APP_CONFIG.ROOM_WIDTH + APP_CONFIG.ROOM_MARGIN.left + APP_CONFIG.ROOM_MARGIN.right) * f.rooms.length || 10,
					height: vm.roomHeight,
					opacity: 0.3,
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

    			let vm = this,
    				coords = {x: 0, y: 0}, // x - как у парадной
    				added_floors = this.stage.find('.'+floor_door_id);

    			coords.x = door_attrs.x + APP_CONFIG.FLOOR_MARGIN.left;
    			coords.y = door_attrs.y + door_attrs.height;

				if (added_floors.length) {
					// если есть добавленные этажи
					coords.y -= (vm.roomHeight + APP_CONFIG.FLOOR_MARGIN.bottom)*(added_floors.length+1);
				}
				else {
					// Если это первый этаж
					coords.y -= (vm.roomHeight + APP_CONFIG.FLOOR_MARGIN.bottom);
					
				}

    			console.log("door_attrs", door_attrs, coords.y, vm.roomHeight);
    			return coords;
    		},

    		/**
    		 * Рисуем квартиру
    		 * @return {[type]} [description]
    		 */
    		drawRoom(r) {
    			var coords = this.calcRoomCoords();

    			var layer = new Konva.Layer();
    			var room_rect = new Konva.Rect({
    				x: coords.x,
					y: coords.y,
					width: APP_CONFIG.ROOM_WIDTH,
					height: APP_CONFIG.ROOM_HEIGHT,
					opacity: 0.3,
					fill: 'orange',
					stroke: 'black',
					strokeWidth: 2,
					name: 'room ri' + r.id,
					CF_DATA : {
						name: 'rm'
					}
    			});

    			layer.add(room_rect);
    			this.stage.add(layer);
    		},

    		calcRoomCoords() {
    			var coords = {x: 10, y: 10};

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
    			for (var x = 0; x < this.stage.getWidth(); x += APP_CONFIG.GRID_STEP) {
    				let line = new Konva.Line({
						points: [x, 0, x, this.stage.getHeight()],
						stroke: '#eee'
					});
					layer.add( line );
				}

				// X
				for (var y = 0; y < this.stage.getHeight(); y += APP_CONFIG.GRID_STEP) {
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
						//fontFamily: "Calibri",
						fontFamily: "Helvetica",
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
    			if (this.tooltip) {
    				this.tooltip.hide();
        			this.tooltipLayer.draw();
    			}
    			
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