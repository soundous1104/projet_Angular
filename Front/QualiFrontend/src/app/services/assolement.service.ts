import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assol } from '../assol';
import { Assolement } from '../assolement-create/assolement-create.component';

@Injectable({
  providedIn: 'root'
})
export class AssolementService {

  
  constructor(private http: HttpClient) { }


getAssolement(){
     return this.http.get('http://127.0.0.1:8000/api/assolements')
    
}
insertAssolement(assolement:Assol){
  return this.http.post('http://127.0.0.1:8000/api/assolements',assolement,{observe:'response'}) 
}
editAssolement(id){
  return this.http.get('http://127.0.0.1:8000/api/assolements/'+id+'/edit')
}

deleteAssolement(id){
  return this.http.delete('http://127.0.0.1:8000/api/assolements/'+id);
}
getAssolementById(id){
  return this.http.get('http://127.0.0.1:8000/api/assolements/'+id+'/edit')
}
updateAssolement(id,assolement:Assol){
  return this.http.put('http://127.0.0.1:8000/api/assolements/'+id,assolement,{observe:'response'}) 
  
  
}
}
