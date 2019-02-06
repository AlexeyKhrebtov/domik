<?php

namespace App\Http\Controllers\Api;

use App\House;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHouseRequest;

include __DIR__.'/../../Requests/StoreHouseRequest.php';
class HouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $houses= House::all();
        return response()->json( $houses );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHouseRequest $request)
    {        
        $house = new House();
        $house->name = $request->name;
        $house->save();

        return response()->json($house, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function show(House $house)
    {
        return response()->json( $house->load('doors') );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, House $house)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function destroy(House $house)
    {
        //
    }


    /**
     * Получить самую полную информацию о доме со всеми вложенными данными
     * @param  \App\House  $house
     * @return \Illuminate\Http\Response
     */
    public function full(House $house) 
    {
        return response()->json( $house->load('doors.floors.rooms') );
    }
}
