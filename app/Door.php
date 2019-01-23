<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Door extends Model
{
    /**
     * Получить дом, к которому относится подъезд
     * 
     */
    public function house() {
    	return $this->belongsTo('App\House');
    }
}
