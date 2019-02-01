<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{
    /**
     * Получить подъезд, к которому относится этаж
     * 
     */
    public function door() {
    	return $this->belongsTo('App\Door');
    }


    /**
     * Получить список квартир на этаже
     * @return [type] [description]
     */
    public function rooms() {
    	return $this->hasMany('App\Room');
    }
}
