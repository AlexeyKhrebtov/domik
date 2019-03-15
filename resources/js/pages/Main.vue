<template>
	<section class="hero is-fullheight is-default is-bold">
		<div class="hero-body">
	        <div class="container has-text-centered">
	            <div class="columns is-vcentered">
	                <div class="column is-5">
	                    <figure class="image is-4by3">
	                        <img src="https://pp.userapi.com/c847124/v847124730/1c344b/eLGXET1yOj4.jpg" alt="Description">
	                    </figure>
	                </div>
	                <div class="column is-6 is-offset-1">
	                    <h1 class="title is-2">
	                        Главная Domik
	                    </h1>
	                    <h2 class="subtitle is-4">
	                        Пока просто заглушка, планируется выводить сводку или еще что-то.
	                    </h2>
	                    <br>
	                    <p class="has-text-centered">
	                    	<router-link class="button is-medium is-info is-outlined" v-bind:to="{ name: 'houses'}">
								Продолжить
							</router-link>
	                    </p>
	                </div>
	            </div>
	        </div>
	    </div>

	    <div class="hero-foot">
	        <div class="container">
	            <div class="tabs is-centered">
	                <ul>
	                    <li><a>And this is the bottom</a></li>
	                </ul>
	            </div>
	        </div>
	    </div>
	</section>
</template>