<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
	// Получить подъезд, к которому относится квартира
    public function floor() {
    	return $this->belongsTo('App\Floor');
    }
}
