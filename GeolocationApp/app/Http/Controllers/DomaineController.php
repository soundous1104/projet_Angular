<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use App\Models\Domaine;
use Illuminate\Support\Facades\Validator;
use App\Models\Domaine; 

class DomaineController extends Controller
{
    public function index(){
        $domainelist=Domaine::all();
        //dd($domainelist);
       // return view('domaine.i ndex',['domaine'=>$domainelist]);
       return $domainelist;
    }

   /* public functioN newDomaine(){
        $newDomaine=new Domaine();
        $newDomaine->domaines="Q100";
        $newDomaine->save();
    }*/


    public function create(){
        return view('domaine.create');
    }

    public function store(Request $request ){

        $validation = Validator::make($request->all(),[ 
            'domaines' => 'required',
            
        ]);
 
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $domaine = new Domaine;
            $domaine->domaines = $request->input('domaines');
            $domaine->save();
     
            return response()->json([
                'error' => false,
                'customer'  => $domaine,
            ], 200);
        }
        /*$domaine=new domaine();
        $domaine->domaines=$request->input('domaine');
        $domaine->save();
        session()->flash('success','le domaine a été bien enregistrer!!');
        //return $request->all();
       // $dom = Domaine::create($domaine);

        return redirect('domaine');*/
       
    }

    public function edit($id){
        $domaine=Domaine::find($id);
        //return view('domaine.edit',['domaine'=>$domaine]);
        return $domaine;
    }

    public function update(Request $request , $id){
        
            $validation = Validator::make($request->all(),[ 
                'domaines' => 'required',
                
            ]);
     
            if($validation->fails()){
                return response()->json([
                    'error' => true,
                    'messages'  => $validation->errors(),
                ], 200);
            }
            else
            {
                $domaine = Domaine::find($id);
                $domaine->domaines = $request->input('domaines');
               
                
                $domaine->save();
         
                return response()->json([
                    'error' => false,
                    'customer'  => $domaine,
                ], 200);
            

    }
}
    public function destroy(Request $request, $id){
        $domaine=Domaine::find($id);
        /*$domaine->delete();

        return response()->json($domaine, 204) ;*/
        if(is_null($domaine)){
            return response()->json([
                'error' => true,
                'message'  => "domaine with id # $id not found",
            ], 404);
        }
 
        $domaine->delete();
     
        return response()->json($domaine, 200);
    
    }

}
