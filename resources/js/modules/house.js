/*
|-------------------------------------------------------------------------------
| VUEX modules/house.js
|-------------------------------------------------------------------------------
| The Vuex data store for the houses
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
    	houseLoadStatus: 0,

    	houseFull: {},

    	houseAddStatus: 0
    },

    /*
    	Определяет действия, используемые для извлечения данных.
    	Вызывается через dispatch('имя_действия')
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
    		HouseAPI.getHouse(data.id)
		        .then( function( response ){
		          commit( 'setHouse', response.data );
		          commit( 'setHouseLoadStatus', 2 );
		        })
		        .catch( function(){
		          commit( 'setHouse', [] );
		          commit( 'setHouseLoadStatus', 3 );
		        });
        },

        loadHouseFull( {commit}, data ) {
        	HouseAPI.getHouseFull(data.id)
        		.then( function( response ){
        			commit( 'setHouseFull', response.data)
        		})
        		.catch( function(){
		          commit( 'setHouseFull', [] );
		        });
        },

		// добавить новый дом
        addHouse( { commit, state, dispatch }, data ){
			commit( 'setHouseAddedStatus', 1 );

			HouseAPI.postAddNewHouse( data.name )
				.then( function( response ){
					commit( 'setHouseAddedStatus', 2 );
					dispatch( 'loadHouses' );
				})
				.catch( function(){
					commit( 'setHouseAddedStatus', 3 );
				});
		}
    },

    /*
    	Определяет используемые мутации
     */
    mutations: {
    	// state - локальное состояние модуля
    	// status - данные, которые нужно обновить
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
	    },

	    setHouseFull( state, house_full ){
	    	state.houseFull = house_full;
	    },

	    setHouseAddedStatus( state, status ){
			state.houseAddStatus = status;
		},
		getHouseAddStatus( state ){
			return state.houseAddStatus;
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
	      return state.house;
	    }
	}
}

/*
	* status = 0 -> No loading has begun
	* status = 1 -> Loading has started
	* status = 2 -> Loading completed successfully
	* status = 3 -> Loading completed unsuccessfully
 */