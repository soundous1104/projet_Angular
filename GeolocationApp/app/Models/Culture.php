<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Culture extends Model
{
    use HasFactory;
    protected $table = 'cultures'; 
	public $timestamps = false;
    public function varietes() {
        return $this->hasMany('App\Models\Variete');
    }
    
    /*public function assolement() {
        return $this->belongsTo('App\Models\Assolement','id');
    }*/
}
