/*
|-------------------------------------------------------------------------------
| VUEX modules/door.js
|-------------------------------------------------------------------------------
| The Vuex data store for the doors
*/

import DoorAPI from '../api/door.js';

export const door = {
	state: {
		doorAddStatus: 0,

		door: {},
		doorLoadStatus: 0
	},

	actions: {
		addDoor( { commit, state, dispatch }, data ){
			commit( 'setDoorAddedStatus', 1 );

			DoorAPI.postAddNewDoor( data.number, data.house_id )
				.then( function( response ){
					commit( 'setDoorAddedStatus', 2 );
					console.log(1);
					dispatch( 'loadHouse', {id: data.house_id, root:true} );
				})
				.catch( function(){
					commit( 'setDoorAddedStatus', 3 );
				});
		},

		// Загрузка этажа
		loadDoor( {commit}, data ){
			commit( 'setDoorLoadStatus', 1 );
			DoorAPI.getDoor(data.id)
		        .then( function( response ){
		          commit( 'setDoor', response.data );
		          commit( 'setDoorLoadStatus', 2 );
		        })
		        .catch( function(){
		          commit( 'setDoor', {} );
		          commit( 'setDoorLoadStatus', 3 );
		        });
		}
	},

	mutations: {
		// state - локальное состояние модуля
    	// status - данные, которые нужно обновить
	    setDoorLoadStatus( state, status ){
	      state.doorLoadStatus = status;
	    },
	    // устанавливает парадную
	    setDoor( state, door ){
	      state.door = door;
	    },

		setDoorAddedStatus( state, status ){
			state.doorAddStatus = status;
		},

		getDoorAddStatus( state ){
			return state.doorAddStatus;
		}
	},

	getters: {
		// возвращает парадную
	    getDoor( state ){
	      return state.door;
	    },

	     getDoorLoadStatus( state ){
	      return state.doorLoadStatus;
	    },
	}
}