<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
	Route::get('/user', function (Request $request) {
	    return $request->user();
	});

	// Дома
	Route::get('/houses', 			'Api\HouseController@index');
	Route::get('/houses/{house}', 	'Api\HouseController@show');
	Route::post('/houses', 			'Api\HouseController@store');
	// Получить самую полную информацию о доме со всеми вложенными данными
	Route::get('/houses/{house}/full', 	'Api\HouseController@full');

	// Парадные
	Route::get('/doors/{door}', 	'Api\DoorController@show');
	Route::post('/doors', 			'Api\DoorController@store');

	// Этажи
	Route::get('/floors/{floor}', 	'Api\FloorController@show');
	Route::post('/floors', 			'Api\FloorController@store');

	// Квартиры
	Route::get('/rooms/{room}',		'Api\RoomController@show');
	Route::post('/rooms', 			'Api\RoomController@store');
});