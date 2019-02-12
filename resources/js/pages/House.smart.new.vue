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
					<br><br><br>
					Количество этажей 
					<div class="range">
						<input type="range" min="1" max="7" steps="1" value="1">
					</div>
					<ul class="range-labels">
						<li class="active selected">Today</li>
						<li class="active selected">2 days</li>
						<li>3 days</li>
						<li>4 days</li>
						<li>5 days</li>
						<li>6 days</li>
						<li>7 days</li>
					</ul>


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

<style scope lang="scss">
	/* СЛАЙДЕР */
	@mixin rangeThumb {
		width: 18px;
		height: 18px;
		margin: -8px 0  0;
		border-radius: 50%;
		background: #37adbf;
		cursor: pointer;
		border: 0 !important;
	}

	@mixin rangeTrack {
		width: 100%;
		height: 2px;
		cursor: pointer;
		background: #b2b2b2;
	}

	.range {
		position: relative;
		width: 550px;
		height: 5px;
	}

	.range input {
		width: 100%;
		position: absolute;
		top: 2px;
		height: 0;
		-webkit-appearance: none;

		// Thumb
		&::-webkit-slider-thumb {
			-webkit-appearance: none; // needed again for Chrome & Safari
			@include rangeThumb;
		}

		&::-moz-range-thumb {
			@include rangeThumb;
		}

		&::-ms-thumb {
			@include rangeThumb;
		}

		// Track
		&::-webkit-slider-runnable-track {
			@include rangeTrack;
		}

		&::-moz-range-track {
			@include rangeTrack;
		}

		&::-ms-track {
			@include rangeTrack;
		}

		&:focus { // override outline/background on focus
			background: none;
			outline: none;
		}

		&::-ms-track { // A little somethin' somethin' for IE
		width: 100%;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	}

	// Labels below slider
	.range-labels {
		margin: 18px -41px 0;
		padding: 0;
		list-style: none;

		li {
			position: relative;
			float: left;
			width: 90.25px;
			text-align: center;
			color: #b2b2b2;
			font-size: 14px;
			cursor: pointer;

			&::before {
				position: absolute;
				top: -25px;
				right: 0;
				left: 0;
				content: "";
				margin: 0 auto;
				width: 9px;
				height: 9px;
				background: #b2b2b2;
				border-radius: 50%;
			}
		}

		.active {
			color: #37adbf;
		}

		.selected::before {
			background: #37adbf;
		}

		.active.selected::before {
			display: none;
		}
	}
</style>