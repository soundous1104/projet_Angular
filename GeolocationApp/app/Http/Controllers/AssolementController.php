<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Compagne; 
use App\Models\Serre; 
use App\Models\Domaine; 
use App\Models\Culture; 
use App\Models\Variete; 
use App\Models\Assolement;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
class AssolementController extends Controller
{
    public function index(){
        $assolement=Assolement::all();
        $domaine=Domaine::all();
       // $serre=Serre::all();
       $assolement = DB::table('assolement')
            ->join('serres','serres.id','=','assolement.fk_id_02_serres')
            ->join('domaines','domaines.id','=','serres.fk_id_01_domaines')
            ->join('varietes','varietes.id','=','assolement.fk_id_04_variete')
            ->join('cultures','cultures.id','=','varietes.fk_id_03_cultures')
            ->select('domaines.domaines','serres.num_serre','serres.sup_serre_ha','cultures.cultures','varietes.varietes','assolement.id_cycle',"assolement.id")
            ->get();

        return $assolement;
    }
    public function create(){
        $assolement=Assolement::all();
        $domaine=Domaine::all();
        $serre=Serre::all();
        $culture=Culture::all();
        $variete=Variete::all();
        $campagne=Compagne::all();
        return view('assolement.create',['assolements'=>$assolement,
                                         'domaines'=>$domaine,
                                         'serres'=>$serre,
                                         'cultures'=>$culture,
                                         'varietes'=>$variete,
                                         'campagnes'=>$campagne]);
    }



    public function store(Request $request){
            $validation = Validator::make($request->all(),[ 
              'domaineSelect' => 'required',
              'varieteSelect'=>'required',
              'campagneSelect'=>'required',
              'cultureSelect'=>'required',
              'serreSelect'=>'required'
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
            
            $assolement = new Assolement;
            $serre=$request->input('serreSelect');
            $campagne=$request->input('campagneSelect');
            $variete=$request->input('varieteSelect');
              
              $serre=Serre::where('num_serre',$serre)->get();
              foreach($serre as $serre){
                $serreId=$serre->id;
              }
              $campagne=Compagne::where('campagne',$campagne)->get();
              foreach($campagne as $campagne){
                $campagneId=$campagne->id;
              }
              $variete=Variete::where('varietes',$variete)->get();
              foreach($variete as $variete){
                $varieteId=$variete->id;
              }



              $assolement->fk_id_02_serres=$serreId;
              $assolement->id_fk_06_campagnes=$campagneId;
              $assolement->fk_id_04_variete=$varieteId;
             // $serre->num_serre=$request->input('num_serre');
             // $serre->sup_serre_ha=$request->input('sup_serre_ha');
             //dd($assolement);
              $assolement->save();
              //dd($serre);
              return response()->json([
                  'error' => false,
                  'customer'  => $assolement,
              ], 200);
          }
          
       
       }


       public function edit($id,Request $request){
        $assolement=Assolement::find($id);
        $domaine = Domaine::all();
        $serre=Serre::all();
        $culture=Culture::all();
        $variete=Variete::all();
        $campagne=Compagne::all();
        $selection=$request->get('domaines');
        return view('assolement.edit',['assolement'=>$assolement,
                                       'serres'=>$serre,
                                       'domaines'=>$domaine,
                                       'cultures'=>$culture,
                                       'varietes'=>$variete,
                                       'campagnes'=>$campagne]);
        
                                       
    }




    public function update(Request $request , $id){
       // $assolement=Assolement::find($id);
       // $selection=$request->get('domaines');
       // dd($selection);
       
       $validation = Validator::make($request->all(),[ 
             'domaineSelect' => 'required',
              'varieteSelect'=>'required',
              'campagneSelect'=>'required',
              'cultureSelect'=>'required',
              'serreSelect'=>'required'
        
    ]);
  
    if($validation->fails()){
        return response()->json([
            'error' => true,
            'messages'  => $validation->errors(),
        ], 200);
    }
    else
    {
      // $assolement=Assolement::find($id);
       
       $serre=$request->input('serreSelect');
       $campagne=$request->input('campagneSelect');
       $variete=$request->input('varieteSelect');
         
         $serre=Serre::where('num_serre',$serre)->get();
         foreach($serre as $serre){
           $serreId=$serre->id;
         }
         $campagne=Compagne::where('campagne',$campagne)->get();
         foreach($campagne as $campagne){
           $campagneId=$campagne->id;
         }
         $variete=Variete::where('varietes',$variete)->get();
         foreach($variete as $variete){
           $varieteId=$variete->id;
         }

        $assolement=Assolement::find($id);
        $assolement->fk_id_02_serres=$serreId;
        $assolement->id_fk_06_campagnes=$campagneId;
        $assolement->fk_id_04_variete=$varieteId;
        $assolement->save();
        return response()->json([
            'error' => false,
            'customer'  => $assolement,
        ], 200);
    
  
  }
      }

    





       public function destroy(Request $request, $id){
        
        $assolement=Assolement::find($id);
        if(is_null($assolement)){
            return response()->json([
                'error' => true,
                'message'  => "assolement with id # $id not found",
            ], 404);
        }
    
        $assolement->delete();
     
        return response()->json($assolement, 200);
    
        
    
    
    }
}
