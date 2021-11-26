<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\SoftDeletes;

class Domaine extends Model
{
   // use SoftDeletes;
    use HasFactory;
    protected $table = 'domaines'; 
	public $timestamps = false;
    public $primaryKey='id';

   // protected $date=['deleted_at'];

    public function serre() {
        return $this->hasMany('App\Models\Serre','id');
    }
  
}
