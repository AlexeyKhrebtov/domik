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
					<progress class="progress is-small" :value="progress" max="100">15%</progress>
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
					<br>
					<code><pre>{{ steps }}</pre></code>

					

				</section>
				<footer class="modal-card-foot">
					<button class="button is-success">Сохранить объект</button>
					<button class="button">Сбросить</button>
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
						step: 2,
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
			},
			progress() {
				let prgrs = 0;

				if (this.house_name) { prgrs += 10; }
				if (this.doors_count) { prgrs += 10; }
				if (this.floors_per_door) { prgrs += 10; }
				if (this.room_per_floor) { prgrs += 10; }

				return prgrs; // %
			}
		}
	}
</script>

<style>
	/* Анимация для предупреждения */
	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
		opacity: 0;
	}

	/* Прогрессбар в конструкторе */
	progress.progress::-webkit-progress-value {
		transition: width 0.3s ease;
	}
	progress.progress {
		transition: all 0.3s ease;
	}

</style>