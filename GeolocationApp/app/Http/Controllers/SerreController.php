<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Serre; 
use App\Models\Domaine; 
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
class SerreController extends Controller
{
    
    /*public function newSerre(){
        $newSerre =new Serre();
        $newSerre->fk_id_01_domaines= 3;
        $newSerre->num_serre= 3;
        $newSerre->sup_serre_ha=4.1;
        $newSerre->save();
    }

    public function serreList(){
        $serrelist=Serre::all();
       # dd($serrelist);
       return view('serres',['serres'=>$serrelist]);
    }*/
    public function domaineList(){
      $domainelist=App\Domaine::all();
      
      //dd($domainelist);
      return view('serre.create',['domaine'=>$domainelist]);
  }

  public function index(){
    //$serrelist=Serre::all();
   //s $serrelist = DB::table('serres')->get();
    $serrelist = DB::table('serres')
            ->join('domaines', 'domaines.id', '=', 'serres.fk_id_01_domaines')
            ->select('serres.*', 'domaines.domaines')
            ->get();
    
    
     return  $serrelist;

    

    //dd($domainelist);
    //return view('serre.index',['serres'=>$serrelist]);
   // return $serreList;
  }
  #Afficher le formulaire de creation du formulaire

  public function create(){
    $domaine = Domaine::all();
    $serre= Serre::with('domaine')->get();
    //$S=$serre->$domaine->id;
    return view('serre.create')->with('domaine',$domaine);

  }
  #Enregistrer le serre dans la base de donnee
  public function store(Request $request){
   
    $validation = Validator::make($request->all(),[ 
      'domaineSelect' => 'required',
      'num_serre'=>'required',
      'sup_serre_ha'=>'required'
      
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
    
    $serre = new Serre;
    $s=$request->input('domaineSelect');
    
      
      $domaine=Domaine::where('domaines',$s)->get();
      foreach($domaine as $domaine){
        $domaineId=$domaine->id;
      }
      $serre->fk_id_01_domaines=$domaineId;
      $serre->num_serre=$request->input('num_serre');
      $serre->sup_serre_ha=$request->input('sup_serre_ha');
      $serre->save();
      //dd($serre);
      return response()->json([
          'error' => false,
          'customer'  => $serre,
      ], 200);
  }
  
  }
  #recuperer un serre puis le mettre dans un formulaire 
  public function edit($id,Request $request){
    $serre=Serre::find($id);
    $domaine = Domaine::all();
    $selection=$request->get('domaines');
    return view('serre.edit',['serre'=>$serre,'selection'=>$selection])->with('domaine',$domaine);;
}
  #permet de modifier un serre 
  public function update(Request $request , $id){

    $validation = Validator::make($request->all(),[ 
      'domaineSelect' => 'required',
      'num_serre'=>'required',
      'sup_serre_ha'=>'required'
      
  ]);

  if($validation->fails()){
      return response()->json([
          'error' => true,
          'messages'  => $validation->errors(),
      ], 200);
  }
  else
  {
    $serre = Serre::find($id);
    $s=$request->input('domaineSelect');
     /* $domaineId=DB::table('domaines')
      ->select('domaines.id')
      ->where('domaines',$s)
      ->get();*/
      
      $domaine=Domaine::where('domaines',$s)->get();
      foreach($domaine as $domaine){
        $domaineId=$domaine->id;
      }
     
      
     // dd($domaineId);
      //$domaineId=$table->select('domaines.id')->where('domains.domaines','=',$request->input('domaineSelect')->get();
      //dd($domaineId);
      $serre->fk_id_01_domaines=$domaineId;
      $serre->num_serre=$request->input('num_serre');
      $serre->sup_serre_ha=$request->input('sup_serre_ha');
      $serre->save();
      return response()->json([
          'error' => false,
          'customer'  => $serre,
      ], 200);
  

}
  }
  #supprimer un serre
  public function destroy(Request $request, $id){
    $serre=Serre::find($id);
    if(is_null($serre)){
        return response()->json([
            'error' => true,
            'message'  => "serre with id # $id not found",
        ], 404);
    }

    $serre->delete();
 
    return response()->json($serre, 200);

    

}
}
