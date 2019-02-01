<template>
	<div class="box">
		<form action="">
			<label class="label" for="">Номер парадной</label>
			<div class="field has-addons">				
				<div class="control" 
					:class="{'has-icons-right': !validations.number.is_valid}">
					<input type="number" min="1" max="30" class="input" placeholder="Номер"
						:class="{'is-danger': !validations.number.is_valid}" 
						v-model="number">
					<span class="icon is-small is-right" v-show="!validations.number.is_valid">
						<i class="fas fa-exclamation-triangle"></i>
					</span>
				</div>
				<p class="control"><a class="button is-static">парадная</a></p>
				<p class="help is-danger" v-show="!validations.number.is_valid">{{ validations.number.text }}</p>
			</div>
			<a class="button" v-on:click="submitNewDoor()">Добавить парадную</a>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
    		return {
    			// данные формы
    			number: '',
    			// валидация
    			validations: {
    				number: {
    					is_valid: true,
    					text: ''
    				}
    			}
    		}
    	},

    	methods: {
			submitNewDoor(){
				if (this.validateNewDoor()) {
					let number = this.number;
					this.$store.dispatch( 'addDoor', {
						number: this.number,
						house_id: 1
					});
					// сбросим значение в форме
					this.number = '';
				}				
			},

			// Валидируем форму
			validateNewDoor() {
				let isValidNewDoorForm = true;

				let number = parseInt(this.number)
				if (isNaN(number)) {
					isValidNewDoorForm = false;
					this.validations.number.is_valid = false;
					this.validations.number.text = 'Введите номер парадной';
				}
				if (number < 1 || number > 30) {
					isValidNewDoorForm = false;
					this.validations.number.is_valid = false;
					this.validations.number.text = 'Номер должен быть в диапазоне от 1 до 30';
				}
				return isValidNewDoorForm;
			}
		}
	}
</script>