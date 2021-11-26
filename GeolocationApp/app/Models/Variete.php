<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variete extends Model
{
    use HasFactory;
    protected $table = 'varietes'; 
	public $timestamps = false;
    public function culture() {
        return $this->belongsTo('App\Models\Culture','fk_id_03_cultures');
    }

    public function assolements() {
        return $this->hasMany('App\Models\Assolement');
    }
    

}
