import { APP_CONFIG } from '../config.js';

export default {
	/*
		GET 	/api/v1/rooms/{roomID}
	 */
	getRoom: function(roomID) {
		return axios.get( APP_CONFIG.API_URL + '/rooms/' + roomID );
	},

	postAddNewRoom: function(number, floor_id) {
		let formData = new FormData();

		formData.append('number', number);
		formData.append('floor_id', floor_id);

		return axios.post( APP_CONFIG.API_URL + '/rooms',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		)
	}
}