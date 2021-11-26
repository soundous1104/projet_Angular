<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Culture; 
use Illuminate\Support\Facades\Validator;

class CultureController extends Controller
{
    public function index(){
        $culture=Culture::all();
        //dd($domainelist);
        return $culture ;
        
    }



    public function create(){
        return view('culture.create');
       
    }

    public function store(Request $request){
       $validation = Validator::make($request->all(),[ 
        'cultures' => 'required',
        
    ]);

    if($validation->fails()){
        return response()->json([
            'error' => true,
            'messages'  => $validation->errors(),
        ], 200);
    }
    else
    {
        $culture = new Culture;
        $culture->cultures = $request->input('cultures');
        $culture->save();
 
        return response()->json([
            'error' => false,
            'customer'  => $culture,
        ], 200);
    }
    
   
}
       
       
     
    

    public function edit($id){
        $culture=Culture::find($id);
        return $culture;
    
    }

    public function update($id, Request $request){
        /*$culture=Culture::find($id);
        $culture->cultures= $request->input('culture');
        $culture->save();
        return redirect('culture');*/
        $validation = Validator::make($request->all(),[ 
            'cultures' => 'required',
            
        ]);
 
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $culture = Culture::find($id);
            $culture->cultures = $request->input('cultures');
           
            
            $culture->save();
     
            return response()->json([
                'error' => false,
                'customer'  => $culture,
            ], 200);
        

}

    }

    
    public function destroy(Request $request, $id){
        $culture=Culture::find($id);
        /*$domaine->delete();

        return response()->json($domaine, 204) ;*/
        if(is_null($culture)){
            return response()->json([
                'error' => true,
                'message'  => "domaine with id # $id not found",
            ], 404);
        }
 
        $culture->delete();
     
        return response()->json($culture, 200);
    
    }
}
