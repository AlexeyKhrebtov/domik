/*
|-------------------------------------------------------------------------------
| VUEX store.js
|-------------------------------------------------------------------------------
| Builds the data store from all of the modules for the Roast app.
*/
/*
  Adds the promise polyfill for IE 11

  Если будут ошибки в IE то добавить это (но не планирую использовать IE и не хочу чтобы рос размер JS)
  npm install es6-promise —save-dev
*/
//require('es6-promise').polyfill();

/*
    Imports Vue and Vuex
*/
import Vue from 'vue'
import Vuex from 'vuex'
/*
    Initializes Vuex on Vue.
*/
Vue.use( Vuex )

/*
    Импортирует все модули, используемые в приложении для создания хранилища данных.
*/
import { house } from './modules/house.js'

/*
  Exports our data store.
*/
export default new Vuex.Store({
    modules: {
    	house
    }
});