/*
|-------------------------------------------------------------------------------
| VUEX modules/floor.js
|-------------------------------------------------------------------------------
| The Vuex data store for the floors
*/

import FloorAPI from '../api/floor.js';

export const floor = {
	state: {
		floorAddStatus: 0,

		floor: {},
		floorLoadStatus: 0
	},

	actions: {
		addFloor( { commit, state, dispatch }, data ){
			commit( 'setFloorAddedStatus', 1 );

			FloorAPI.postAddNewFloor( data.number, data.door_id )
				.then( function( response ){
					commit( 'setFloorAddedStatus', 2 );
					console.log(2);
					dispatch( 'loadDoor', {id: data.door_id, root:true} );
				})
				.catch( function(){
					commit( 'setFloorAddedStatus', 3 );
				});
		},

		// Загрузка этажа
		loadFloor( {commit}, data ){
			commit( 'setFloorLoadStatus', 1 );
			FloorAPI.getFloor(data.id)
		        .then( function( response ){
		          commit( 'setFloor', response.data );
		          commit( 'setFloorLoadStatus', 2 );
		        })
		        .catch( function(){
		          commit( 'setFloor', {} );
		          commit( 'setFloorLoadStatus', 3 );
		        });
		}
	},

	mutations: {
		// state - локальное состояние модуля
    	// status - данные, которые нужно обновить
	    setFloorLoadStatus( state, status ){
	      state.floorLoadStatus = status;
	    },
	    // устанавливает парадную
	    setFloor( state, floor ){
	      state.floor = floor;
	    },

		setFloorAddedStatus( state, status ){
			state.floorAddStatus = status;
		},

		getFloorAddStatus( state ){
			return state.floorAddStatus;
		}
	},

	getters: {
		// возвращает парадную
	    getFloor( state ){
	      return state.floor;
	    },

	     getFloorLoadStatus( state ){
	      return state.floorLoadStatus;
	    },
	}
}