<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    /**
     * Получить список подъездов дома
     * 
     */
    public function doors() {
    	return $this->hasMany('App\Door');
    }
}
