import { APP_CONFIG } from '../config.js';

export default {

	postAddNewDoor: function(number, house_id) {
		let formData = new FormData();

		formData.append('number', number);
		formData.append('house_id', house_id);

		return axios.post( APP_CONFIG.API_URL + '/doors',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		)
	}
}