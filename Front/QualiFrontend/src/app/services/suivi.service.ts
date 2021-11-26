import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { suivi } from 'src/suivi';
import { Suivi } from '../suivi-create/suivi-create.component';

@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  constructor(private http:HttpClient) { 
    
  }

  getSuivi(){
    return this.http.get('http://127.0.0.1:8000/api/suivi')
  }
  insertSuivi(suivi:Suivi){
    return this.http.post('http://127.0.0.1:8000/api/suivi',suivi,{observe:'response'}) 
  }


  editSuivi(id){
    return this.http.get('http://127.0.0.1:8000/api/suivi/'+id+'/edit')
  }
  
  deleteSuivi(id){
    return this.http.delete('http://127.0.0.1:8000/api/suivi/'+id);
  }
  getSuiviById(id){
    return this.http.get('http://127.0.0.1:8000/api/suivi/'+id+'/edit')
  }
  updateSuivi(id,suivi:suivi){
    return this.http.put('http://127.0.0.1:8000/api/suivi/'+id,suivi,{observe:'response'}) 
    
    
  }
  
}
