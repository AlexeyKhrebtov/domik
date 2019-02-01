import { APP_CONFIG } from '../config.js';

export default {
	/*
		GET 	/api/v1/floors/{floorID}
	 */
	getFloor: function(floorID) {
		return axios.get( APP_CONFIG.API_URL + '/floors/' + floorID );
	},

	postAddNewFloor: function(number, door_id) {
		let formData = new FormData();

		formData.append('number', number);
		formData.append('door_id', door_id);

		return axios.post( APP_CONFIG.API_URL + '/floors',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		)
	}
}