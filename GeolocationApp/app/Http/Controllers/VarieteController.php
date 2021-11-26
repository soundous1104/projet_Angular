<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\Variete; 
use App\Models\Culture; 
use Illuminate\Support\Facades\Validator;
class VarieteController extends Controller
{
    public function index(){
        $varietelist=Variete::all();
        $varietelist = DB::table('varietes')
            ->join('cultures', 'cultures.id', '=', 'varietes.fk_id_03_cultures')
            ->select('varietes.*', 'cultures.cultures')
            ->get();
    
    
     return  $varietelist;
        
    
        //dd($varietelist);
        return $varietelist;
    
      }
      #Afficher le formulaire de creation du formulaire
    
      public function create(){
        $culture = Culture::all();
        $variete= Variete::with('culture')->get();
        //$S=$serre->$domaine->id;
        return view('variete.create')->with('culture',$culture);
    
      }
      public function store(Request $request){
        
      
         $validation = Validator::make($request->all(),[ 
          'cultureSelect' => 'required',
          'varietes'=>'required'
          
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
        
        $variete = new Variete;
        $c=$request->input('cultureSelect');
        
          
          $culture=Culture::where('cultures',$c)->get();
          foreach($culture as $culture){
            $cultureId=$culture->id;
          }
          $variete->fk_id_03_cultures=$cultureId;
          $variete->varietes=$request->input('varietes');
          
          $variete->save();
          //dd($serre);
          return response()->json([
              'error' => false,
              'customer'  => $variete,
          ], 200);
      }
      
       }
       public function edit($id,Request $request){
        $variete=Variete::find($id);
        $culture = Culture::all();
        $selection=$request->get('cultures');
        return view('variete.edit',['variete'=>$variete,'selection'=>$selection])->with('culture',$culture);;
    }
       public function update(Request $request , $id){
       /* $variete=Variete::find($id);
        $selection=$request->get('cultures');
       // dd($selection);
       $variete->fk_id_03_cultures= $selection;
       $variete->varietes=$request->input('variete');
       $variete->save();
        return redirect('variete');*/
        $validation = Validator::make($request->all(),[ 
          'cultureSelect' => 'required',
          'varietes'=>'required'
          
      ]);
    
      if($validation->fails()){
          return response()->json([
              'error' => true,
              'messages'  => $validation->errors(),
          ], 200);
      }
      else
      {
        $variete = Variete::find($id);
        $s=$request->input('cultureSelect');
         /* $domaineId=DB::table('domaines')
          ->select('domaines.id')
          ->where('domaines',$s)
          ->get();*/
          
          $culture=Culture::where('cultures',$s)->get();
          foreach($culture as $culture){
            $cultureId=$culture->id;
          }
         
          
         // dd($domaineId);
          //$domaineId=$table->select('domaines.id')->where('domains.domaines','=',$request->input('domaineSelect')->get();
          //dd($domaineId);
          $variete->fk_id_03_cultures=$cultureId;
          $variete->varietes=$request->input('varietes');
          $variete->save();
          return response()->json([
              'error' => false,
              'customer'  => $variete,
          ], 200);
      
    
    }
      }





      
      #supprimer un serre
      public function destroy(Request $request, $id){
        $variete=Variete::find($id);
        $variete->delete();
    
       
        if(is_null($variete)){
            return response()->json([
                'error' => true,
                'message'  => "variete with id # $id not found",
            ], 404);
        }
    
        $variete->delete();
     
        return response()->json($variete, 200);
    
    }
    
}
