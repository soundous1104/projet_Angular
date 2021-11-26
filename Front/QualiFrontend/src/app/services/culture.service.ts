import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Culture } from '../culture';

@Injectable({
  providedIn: 'root'
})
export class CultureService {

  constructor(private http: HttpClient) { }
  getCulture(){
    return this.http.get('http://127.0.0.1:8000/api/cultures')}

    insertCulture(culture:Culture){
      return this.http.post('http://127.0.0.1:8000/api/cultures',culture,{observe:'response'}) 
    }
    editCulture(id){
      return this.http.get('http://127.0.0.1:8000/api/cultures/'+id+'/edit')
    }
  
    deleteCulture(id){
      return this.http.delete('http://127.0.0.1:8000/api/cultures/'+id);
    }
    getCultureById(id){
      return this.http.get('http://127.0.0.1:8000/api/cultures/'+id+'/edit')
    }
    updateCulture(id,culture:Culture){
      return this.http.put('http://127.0.0.1:8000/api/cultures/'+id,culture,{observe:'response'}) 
      
      
    }
}
