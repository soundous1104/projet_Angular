<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Map;
use Illuminate\Support\Facades\Validator;

class MapController extends Controller
{

    public function index(){
        $map= Map::orderBy('id', 'desc')->first();
       // Map::all()->last();
       
      
        
       
       
        return $map;
       
    }
   

    public function store( Request $request){
    //   dd($request->input('type','features'));
    $validation = Validator::make($request->all(),[ 
       
        'data' => 'required'
        
    ]);

    if($validation->fails()){
        return response()->json([
            'error' => true,
            'messages'  => $validation->errors(),
        ], 200);
    }
    else
    {
        $map = new Map;
        $map->geojson = $request->data;
       

       // $map->domaine = $request->data->domaine;
       // $map->serre= $request->data->serre;

       // dd(json_encode($request->input('geojson'),JSON_UNESCAPED_SLASHES));
        $map->save();
 
        return response()->json([
            'error' => false,
            'customer'  => $map,
        ], 200);
    }
  
   
}


}
