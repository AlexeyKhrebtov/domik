<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Door extends Model
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
     * Получить дом, к которому относится подъезд
     * 
     */
    public function house() {
    	return $this->belongsTo('App\House');
    }

    /**
     * Получить список этажей в подъезде
     * @return [type] [description]
     */
    public function floors() {
    	return $this->hasMany('App\Floor');
    }
}
