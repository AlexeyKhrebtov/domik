<template>
	<div id="constructor">
		<h1 class="title">Конструктор</h1>
		<h2 class="subtitle">создание объекта</h2>
		
		<div class="constructor_progress">
			<progress class="progress is-small" :value="getProgress" max="100">15%</progress>
			<p>Шаг {{ current_step }} из {{ stepCount }}</p>

		</div>
		<div class="constructor_steps">
			<div class="step" v-if="current_step === 1">
				<input type="text" v-model.trim="constructor_data.object_name" placeholder="Название объекта">
			</div><!-- [-] end step 1 -->
			
			<div class="step" v-if="current_step === 2">
				парадных: {{ constructor_data.doors_count }}<br>
				<input class="slider" type="range" v-model.number="constructor_data.doors_count" min="0" max="20" list="tickmarks">
				<br>
				этажей: {{ constructor_data.floors_count }}<br>
				<input class="slider" type="range" v-model.number="constructor_data.floors_count" min="0" max="30" list="tickmarks">
				<br>
				квартир на этаже: {{ constructor_data.room_in_door_level }}<br>
				<input class="slider" type="range" v-model.number="constructor_data.room_in_door_level" min="0" max="10" list="tickmarks">
				<datalist id="tickmarks">
					<option value="0" />
					<option value="5" />
					<option value="10" />
					<option value="15" />
					<option value="20" />
					<option value="25" />
					<option value="30" />
				</datalist>
			</div><!-- [-] end step 2 -->

			<div class="step" v-if="current_step === 3">
				Что получилось
				<button @click.prevent="drawKonva">Показать</button>
				<div id="stage" style="max-height: 256px;max-width:100%;overflow: scroll; border:1px solid red;">					
				</div>

				<div class="c_door" v-for="(door, index) in final_object_params.doors">
					Парадная {{ door.id }} ({{ index }})
					<button @click="removeDoor(index)">Удалить парадную</button>
				</div>
			</div><!-- [-] end step 3 -->

			<div class="step" v-if="current_step === 4">

			</div><!-- [-] end step 4 -->
		</div>
		<div class="constructor_controls">
			<button @click.prevent="prevStep()" :disabled="isFirstStep">Prev</button>
			<button @click.prevent="nextStep()" :disabled="isLastStep">Next</button>
		</div>


		<code>debug: final_object_params<pre>{{ final_object_params }}</pre></code>
		<code>debug: constructor_data<pre>{{ constructor_data }}</pre></code>
	</div>
</template>

<script>
	const STEP_COUNT = 4;

	export default {
		data() {
			return {
				current_step: 1,
				constructor_data: {
					object_name: '',
					doors_count: 0,
					floors_count: 0,
					room_in_door_level: 0

				},
				final_object_params: {
					doors: []
				},
				stage: null,
			}
		},

		methods: {
			nextStep() {
				this.current_step++;
			},
			prevStep() {
				this.current_step--;
			},

			calcFinalObjectParams() {
				this.final_object_params = {};
				this.final_object_params.doors = [];

				for (var i = 1; i < this.constructor_data.doors_count+1; ++i) {
					this.final_object_params.doors.push({
						id: i
					});

				};

			},

			removeDoor(door_key) {
				this.final_object_params.doors.splice(door_key, 1)
				//this.$set(this.final_object_params, 'doors', this.final_object_params.doors.splice(door_key, 1))
			},

			drawKonva() {
				this.calcFinalObjectParams();
				/*
				this.stage = new Konva.Stage({
					container: 'stage',
					width: 300,
					height: 300
				});
				*/
			}
		},

		computed: {
			stepCount() {
				return STEP_COUNT
			},
			isFirstStep() {
				return this.current_step === 1 ? true : false
			},

			isLastStep() {
				return this.current_step === STEP_COUNT ? true : false
			},
			getProgress() {
				let prgrs = 0;

				if (this.constructor_data.object_name) { prgrs += 10; }

				return prgrs; // %
			},

			configKonva() {
				let width = Math.floor((window.innerWidth) - (window.innerWidth*0.2)),
					height = window.innerHeight < 600 ? 400 : 600;
				return {
					width: width,
					height: height
				}
			}
		}
	}
</script>

<style>
	div.c_door {
		border: 1px solid #AAA;
		padding: 5px;
		margin-bottom: 10px;
	}
</style>