<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Suivi; 
use App\Models\Assolement;

class SuiviController extends Controller
{




    public function index(){
        $suivi=Suivi::all();
        return $suivi;
       
    }
   


    public function store(Request $request){
   
        $validation = Validator::make($request->all(),[ 
          'assolementSelect' => 'required',
          'date'=>'required',
          'nbr_ouvrier'=>'required',
          'qte_recolte'=>'required'

          
      ]);
     // dd($request->input('num_serre'));
      if($validation->fails()){
          return response()->json([
              'error' => true,
              'messages'  => $validation->errors(),
          ], 200);
      }
      else
      {
        
          $suivi = new Suivi;
          $suivi->id_fk_06_assolement=$request->input('assolementSelect');;
          $suivi->date_w=$request->input('date');
          $suivi->nbr_ouvriers=$request->input('nbr_ouvrier');
          $suivi->qt_recolte_kg=$request->input('qte_recolte');
          $suivi->save();
          //dd($serre);
          return response()->json([
              'error' => false,
              'customer'  => $suivi,
          ], 200);
      }
      
      }


      public function update(Request $request,$id){
        $validation = Validator::make($request->all(),[ 
            'assolementSelect' => 'required',
            'date'=>'required',
            'nbr_ouvrier'=>'required',
            'qte_recolte'=>'required'
        ]);
      
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
          $suivi = Suivi::find($id);
          //dd($suivi);
          $suivi->id_fk_06_assolement=$request->input('assolementSelect');
          $suivi->date_w=$request->input('date');
          $suivi->nbr_ouvriers=$request->input('nbr_ouvrier');
          $suivi->qt_recolte_kg=$request->input('qte_recolte');
          $suivi->save();
            return response()->json([
                'error' => false,
                'customer'  => $suivi,
            ], 200);
        
      
      }
      }
      public function destroy(Request $request, $id){
        $suivi=Suivi::find($id);
        if(is_null($suivi)){
            return response()->json([
                'error' => true,
                'message'  => "suivi with id # $id not found",
            ], 404);
        }
    
        $suivi->delete();
     
        return response()->json($suivi, 200);
    
        
    
    }
}
