<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class House extends Model
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
     * Получить список подъездов дома
     * 
     */
    public function doors() {
    	return $this->hasMany('App\Door');
    }

}
