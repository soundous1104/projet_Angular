<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Serre extends Model
{
    use HasFactory;
    protected $table = 'serres'; 
	public $timestamps = false;

    public function domaine() {
        return $this->belongsTo('App\Models\Domaine','fk_id_01_domaines');
    }
    public function assolements() {
        return $this->hasMany('App\Models\Assolement');
    }
   
}
