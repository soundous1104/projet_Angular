<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compagne extends Model
{
    use HasFactory;
    protected $table = 'campagnes'; 
	public $timestamps = false;
    
    public function assolements() {
        return $this->hasMany('App\Models\Assolement');
    }
}
