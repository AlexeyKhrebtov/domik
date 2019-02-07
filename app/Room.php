<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
	/**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 
    ];

	// Получить подъезд, к которому относится квартира
    public function floor() {
    	return $this->belongsTo('App\Floor');
    }
}
