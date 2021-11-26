import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campagne } from '../Campagne';

@Injectable({
  providedIn: 'root'
})
export class CampagneService {

  constructor(private http:HttpClient) { }
  getCampagne(){
    return this.http.get('http://127.0.0.1:8000/api/campagnes')
  }

  insertCampagne(campagne:Campagne){ 
    return this.http.post('http://127.0.0.1:8000/api/campagnes',campagne,{observe:'response'}) 
  }
  editCampagne(id){
    return this.http.get('http://127.0.0.1:8000/api/campagnes/'+id+'/edit')
  }

  deleteCampagne(id){
    return this.http.delete('http://127.0.0.1:8000/api/campagnes/'+id);
  }
  getCampagneById(id){
    return this.http.get('http://127.0.0.1:8000/api/campagnes/'+id+'/edit')
  }
  updateCampagne(id,campagne:Campagne){
    return this.http.put('http://127.0.0.1:8000/api/campagnes/'+id,campagne,{observe:'response'}) 
    
    
  }
}
