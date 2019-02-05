<template>
	<div class="box">
		<form action="">
			<label for="" class="label">Номер этажа</label>
			<div class="field">
				<div class="control">
					<input type="number" min="0" max="30" class="input" placeholder="Этаж" v-model="number">
				</div>
			</div>
			<a class="button" @click="submitNewFloor()">Добавить этаж</a>
		</form>
		<p><code>ToDo: валидация, обработка ошибок</code></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// данные формы
				number: '',

				validations: {
					// ToDo
				}
			}
		},
		
		props: {
			door_id: Number
		},

		methods: {
			// Отправка формы
			submitNewFloor() {
				if (this.validateNewFloor()) {
					let number = this.number;
					this.$store.dispatch( 'addFloor', {
						number: this.number,
						door_id: this.door_id
					});
					// сбросим значение в форме
					this.number = '';
				}	
			},

			// Проверка валидации формы
			validateNewFloor() {
				// ToDo
				return true;
			}
		},

		computed: {
			floor() {
				return this.$store.getters.getFloor;
			}
		}
	}
</script>