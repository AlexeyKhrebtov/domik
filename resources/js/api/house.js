import { APP_CONFIG } from '../config.js';

export default {
	/*
		GET 	/api/v1/houses
	 */
	getHouses: function(){
		return axios.get( APP_CONFIG.API_URL + '/houses' );
	},
	/*
		GET 	/api/v1/houses/{houseID}
	 */
	getHouse: function( houseID ){
		return axios.get( APP_CONFIG.API_URL + '/houses/' + houseID );
	},
	/*
		POST 	/api/v1/houses
	 */
	postAddNewHouse: function( name ){
		return axios.get( APP_CONFIG.API_URL + '/houses',
			{
				name: name
			}
		);
	},
}
