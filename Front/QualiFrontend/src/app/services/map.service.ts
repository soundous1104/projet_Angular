import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
    data={domaine:'',serre:''}
    Surface:number
  constructor(private http:HttpClient) { }

  getGeoJson(){
    return this.http.get('http://127.0.0.1:8000/api/map')
  }
  insertGeoJson(geojson){
    return this.http.post('http://127.0.0.1:8000/api/map',geojson,{observe:'response'}) 
  }
 
}
