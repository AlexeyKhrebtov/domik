<template>
	<div>
		<h1 class="title">House.new.vue</h1>

		<form action="">
			<div class="field">				
				<label class="label" for="">Название объекта</label>
				<div class="control" :class="{'has-icons-right': !validations.name.is_valid}">
					<input type="text" class="input" :class="{'is-danger': !validations.name.is_valid}" placeholder="Название" v-model="name">
					<span class="icon is-small is-right" v-show="!validations.name.is_valid">
						<i class="fas fa-exclamation-triangle"></i>
					</span>
				</div>
				<p class="help is-danger" v-show="!validations.name.is_valid">{{ validations.name.text }}</p>
			</div>
			<a class="button" v-on:click="submitNewHouse()">Добавить объект</a>
		</form>
	</div>
</template>

<script>
	export default {		
    	data() {
    		return {
    			// данные формы
    			name: '',
    			// валидация
    			validations: {
    				name: {
    					is_valid: true,
    					text: ''
    				}
    			}
    		}
    	},

    	methods: {
			submitNewHouse(){
				if (this.validateNewHouse()) {
					this.$store.dispatch( 'addHouse', {
						name: this.name
					});
				}				
			},

			// Валидируем форму
			validateNewHouse() {
				let isValidNewHouseForm = true;

				if (false && this.name.trim() == '') {
					isValidNewHouseForm = false;
					this.validations.name.is_valid = false;
					this.validations.name.text = 'Введите название объекта';
				}
				return isValidNewHouseForm;
			}
		}
	}
</script>

<style>

</style>