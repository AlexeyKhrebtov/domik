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

			</div><!-- [-] end step 2 -->

			<div class="step" v-if="current_step === 3">
				
			</div><!-- [-] end step 3 -->

			<div class="step" v-if="current_step === 4">

			</div><!-- [-] end step 4 -->
		</div>
		<div class="constructor_controls">
			<button @click.prevent="prevStep()" :disabled="isFirstStep">Prev</button>
			<button @click.prevent="nextStep()" :disabled="isLastStep">Next</button>
		</div>


		<code>debug<pre>{{ constructor_data }}</pre></code>
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
				}
			}
		},

		methods: {
			nextStep() {
				this.current_step++;
			},
			prevStep() {
				this.current_step--;
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
			}
		}
	}
</script>