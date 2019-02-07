<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at',
    ];
    
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
