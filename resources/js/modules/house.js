/*
|-------------------------------------------------------------------------------
| VUEX modules/house.js
|-------------------------------------------------------------------------------
| The Vuex data store for the cafes
*/

import HouseAPI from '../api/house.js';

export const house = {
	/*
		Определяет состояние, отслеживаемое для модуля.
	 */
    state: {
    	houses: [],
    	housesLoadStatus: 0,

    	house: {},
    	houseLoadStatus: 0
    },

    /*
    	Определяет действия, используемые для извлечения данных.
     */
    actions: {
    	// загрузка списка домов
    	loadHouses( { commit } ){
    		commit( 'setHousesLoadStatus', 1 );
    		HouseAPI.getHouses()
		        .then( function( response ){
		          commit( 'setHouses', response.data );
		          commit( 'setHousesLoadStatus', 2 );
		        })
		        .catch( function(){
		          commit( 'setHouses', [] );
		          commit( 'setHousesLoadStatus', 3 );
		        });
        },

        // загрузки индивидуального дома
        loadHouse( { commit }, data ){
        	commit( 'setHouseLoadStatus', 1 );
    		HouseAPI.getHouses()
		        .then( function( response ){
		          commit( 'setHouse', response.data );
		          commit( 'setHouseLoadStatus', 2 );
		        })
		        .catch( function(){
		          commit( 'setHouse', [] );
		          commit( 'setHouseLoadStatus', 3 );
		        });
        }
    },

    /*
    	Определяет используемые мутации
     */
    mutations: {
	    setHousesLoadStatus( state, status ){
	      state.housesLoadStatus = status;
	    },
	    // устанавливает дома
	    setHouses( state, houses ){
	      state.houses = houses;
	    },

	    setHouseLoadStatus( state, status ){
	      state.houseLoadStatus = status;
	    },
	    // устанавливает дом
	    setHouse( state, house ){
	      state.house = house;
	    }
	},

	/*
		Определяет геттеры, используемые модулем
	 */
	getters: {
	    getHousesLoadStatus( state ){
	      return state.housesLoadStatus;
	    },

	    // возвращает дома
	    getHouses( state ){
	      return state.houses;
	    },

	    getHouseLoadStatus( state ){
	      return state.houseLoadStatus;
	    },

	    // возвращает индивидуальный дом
	    getHouse( state ){
	      return state.housee;
	    }
	}
}

/*
	* status = 0 -> No loading has begun
	* status = 1 -> Loading has started
	* status = 2 -> Loading completed successfully
	* status = 3 -> Loading completed unsuccessfully
 */