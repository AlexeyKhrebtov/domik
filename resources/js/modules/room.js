/*
|-------------------------------------------------------------------------------
| VUEX modules/room.js
|-------------------------------------------------------------------------------
| The Vuex data store for the rooms
*/

import RoomAPI from '../api/room.js';

export const room = {
	state: {
		roomAddStatus: 0,

		room: {},
		roomLoadStatus: 0
	},

	actions: {
		addRoom( { commit, state, dispatch }, data ){
			commit( 'setRoomAddedStatus', 1 );

			RoomAPI.postAddNewRoom( data.number, data.floor_id )
				.then( function( response ){
					commit( 'setRoomAddedStatus', 2 );
					console.log(2);
					dispatch( 'loadFloor', {id: data.floor_id, root:true} );
				})
				.catch( function(){
					commit( 'setRoomAddedStatus', 3 );
				});
		},

		// Загрузка этажа
		loadRoom( {commit}, data ){
			commit( 'setRoomLoadStatus', 1 );
			RoomAPI.getRoom(data.id)
		        .then( function( response ){
		          commit( 'setRoom', response.data );
		          commit( 'setRoomLoadStatus', 2 );
		        })
		        .catch( function(){
		          commit( 'setRoom', {} );
		          commit( 'setRoomLoadStatus', 3 );
		        });
		}
	},

	mutations: {
		// state - локальное состояние модуля
    	// status - данные, которые нужно обновить
	    setRoomLoadStatus( state, status ){
	      state.roomLoadStatus = status;
	    },
	    // устанавливает парадную
	    setRoom( state, room ){
	      state.room = room;
	    },

		setRoomAddedStatus( state, status ){
			state.roomAddStatus = status;
		},

		getRoomAddStatus( state ){
			return state.roomAddStatus;
		}
	},

	getters: {
		// возвращает парадную
	    getRoom( state ){
	      return state.room;
	    },

	     getRoomLoadStatus( state ){
	      return state.roomLoadStatus;
	    },
	}
}