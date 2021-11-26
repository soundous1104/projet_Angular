<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assolement extends Model
{
    use HasFactory;
    protected $table = 'assolement'; 
	public $timestamps = false;
    
    public function serre() {
        return $this->belongsTo('App\Models\Serre','fk_id_02_serres');
    }
    public function campagne() {
        return $this->belongsTo('App\Models\Compagne','id_fk_06_campagnes');
    }
    public function variete() {
        return $this->belongsTo('App\Models\Variete','fk_id_04_variete');
    }




    
    
    
   
}
