<template>
	<div class="box">
		<p>Конструктор создания объекта</p>
		<button @click="isModalActive = true">создать</button>

		<div class="modal" :class="{'is-active': isModalActive}">
			<div class="modal-background" @click="isModalActive = false"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Конструктор создания объекта</p>
					<button class="delete" aria-label="close" @click="isModalActive = false"></button>
				</header>
				<section class="modal-card-body">
					<!-- Content ... -->
					<div class="field">
						<label class="label">Название объекта</label>
						<div class="control">
							<input class="input" v-model.trim="house_name" type="text" placeholder="Введите название объекта">
						</div>
						<p class="help">This is a help text</p>
					</div>
					
					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">Парадных = {{ doors_count }}</label>
						</div>
						<div class="field-body">
							<div class="field">
								<div class="control">
									<input v-model.number="doors_count" type="range" min="0" max="20">
								</div>
								<p class="help">Парадных - {{ doors_count }}</p>	
							</div>
						</div>
					</div>

					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">Этажей = {{ floors_per_door }}</label>
						</div>
						<div class="field-body">
							<div class="field">
								<div class="control">
									<input v-model.number="floors_per_door" type="range" min="0" max="30">
								</div>
								<p class="help">Этажей - {{ floors_per_door }}</p>	
							</div>
						</div>
					</div>

					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">Квартир на этаже = {{ room_per_floor }}</label>
						</div>
						<div class="field-body">
							<div class="field">
								<div class="control">
									<input v-model.number="room_per_floor" type="range" min="0" max="20">
								</div>
								<p class="help">квартир на этаже - {{ room_per_floor }}</p>	
							</div>
						</div>
					</div>
					
					<div class="field is-horizontal">
						<div class="field-label is-normal">
							<label class="label">Всего квартир </label>
						</div>
						<div class="field-body">
							<div class="field">
								{{ totalRooms }} -- {{ showCountDanger }}
							</div>
						</div>
					</div>

					<transition name="fade">
						<div class="notification is-danger" v-show="showCountDanger">
							<button class="delete"></button>
							А не слишком ли много квартир будет?
						</div>
					</transition>

					<!--
					<div class="field">
						<label class="label">Label</label>
						<div class="control">
							<input class="input" type="text" placeholder="Text input">
						</div>
						<p class="help">This is a help text</p>
					</div>
					-->

					<a class="button">Next</a>

					{{ steps }}
				</section>
				<footer class="modal-card-foot">
					<button class="button is-success">Save changes</button>
					<button class="button">Cancel</button>
				</footer>
			</div>
			<button class="modal-close is-large" aria-label="close" @click="isModalActive = false"></button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isModalActive: false,
				

				house_name: '',
				doors_count: 0,
				floors_per_door: 0,
				room_per_floor: 0,

				steps: [
					{
						title: "Параметры дома",
						step: 1,
						completed: false
					},
					{
						title: "Параметры дома",
						completed: false
					},
				]
			}
		},

		computed: {
			//totalRooms: vm => vm.doors_count * vm.floors_per_door * vm.room_per_floor
			totalRooms() {
				return this.doors_count * this.floors_per_door * this.room_per_floor
			},
			showCountDanger() {
				return this.totalRooms > 10000
			} 
		}
	}
</script>

<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
		opacity: 0;
	}
</style>