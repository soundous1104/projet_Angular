<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Suivi extends Model
{
    use HasFactory;
    protected $table = 'suivi'; 
	public $timestamps = false;
}
