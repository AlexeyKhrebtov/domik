<template>
	<div class="container">
		<nav class="breadcrumb is-right" aria-label="breadcrumbs">
			<ul>
				<li v-for="(route, index) in $route.matched">
					<a href="#" aria-current="page">{{route.name}}</a>
				</li>
				<!-- <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li> -->
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {

	}
</script>