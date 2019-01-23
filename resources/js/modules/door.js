/*
|-------------------------------------------------------------------------------
| VUEX modules/door.js
|-------------------------------------------------------------------------------
| The Vuex data store for the doors
*/

import DoorAPI from '../api/door.js';

export const door = {
	state: {
		doorAddStatus: 0
	},

	actions: {
		addDoor( { commit, state, dispatch }, data ){
			commit( 'setDoorAddedStatus', 1 );

			DoorAPI.postAddNewDoor( data.number, data.house_id )
				.then( function( response ){
					commit( 'setDoorAddedStatus', 2 );
					//dispatch( 'loadDoors' );
				})
				.catch( function(){
					commit( 'setDoorAddedStatus', 3 );
				});
		}
	},

	mutations: {
		setDoorAddedStatus( state, status ){
			state.doorAddStatus = status;
		},
		getDoorAddStatus( state ){
			return state.doorAddStatus;
		}
	},

	getters: {

	}
}