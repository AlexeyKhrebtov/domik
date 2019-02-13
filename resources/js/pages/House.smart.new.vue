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
					Название объекта <input type="text">
					


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
				isModalActive: false
			}
		},

	}
</script>

