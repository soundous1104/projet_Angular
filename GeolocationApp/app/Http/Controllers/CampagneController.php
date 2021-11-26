<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Compagne; 
use Illuminate\Support\Facades\Validator;

class CampagneController extends Controller
{
    public function index(){
        $campagne=Compagne::all();
        //dd($domainelist);
        return $campagne;
        
    }

   


    public function create(){
        return view('campagne.create');
        
    }

    public function store(Request $request){
     

 
        $validation = Validator::make($request->all(),[ 
            'campagne' => 'required',
            
        ]);
 
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $campagne = new Compagne;
            $campagne->campagne = $request->input('campagne');
            $campagne->save();
     
            return response()->json([
                'error' => false,
                'customer'  => $campagne,
            ], 200);
        }
       
       
    }

    public function edit($id){
        $campagne=Compagne::find($id);
        return $campagne;
       
    }

    
    
    public function update($id, Request $request){
      /*  $campagne=Compagne::find($id);
        $campagne->campagne= $request->input('campagne');
        $campagne->save();
        return redirect('campagne');*/
        $validation = Validator::make($request->all(),[ 
            'campagne' => 'required',
            
        ]);
 
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $campagne = Compagne::find($id);
            //dd($campagne);
            $campagne->campagne = $request->input('campagne');
           
            
            $campagne->save();
     
            return response()->json([
                'error' => false,
                'customer'  =>$campagne,
            ], 200);
        

}

    }
    public function destroy(Request $request, $id){
       /* $campagne=Compagne::find($id);
        $campagne->delete();

        return redirect('campagne');*/
        $campagne=Compagne::find($id);
        /*$domaine->delete();

        return response()->json($domaine, 204) ;*/
        if(is_null($campagne)){
            return response()->json([
                'error' => true,
                'message'  => "campagne with id # $id not found",
            ], 404);
        }
 
        $campagne->delete();
     
        return response()->json($campagne, 200);
    
    
    }
}
