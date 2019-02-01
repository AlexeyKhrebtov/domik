<template>
	<div class="box">
		<form action="">
			<label for="">Номер квартиры</label>
			<div class="field">
				<div class="control">
					<input type="number" class="input" min="0" max="5000" placeholder="Квартира" v-model="number">
				</div>
			</div>
			<a class="button" @click="submitNewRoom()">Добавить квартиру</a>
		</form>
		<p><code>ToDo: валидация, обработка ошибок</code></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				number: ''
			}
		},

		methods: {
			submitNewRoom() {
				let number = this.number;
				this.$store.dispatch( 'addRoom', {
					number: this.number,
					floor_id: 1
				});
				// сбросим значение в форме
				this.number = '';
			}
		}
	}
</script>