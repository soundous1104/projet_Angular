import { Component, OnDestroy, OnInit } from '@angular/core';
import { SerreService } from '../services/serre.service';
import { Observable, Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-serre-index',
  templateUrl: './serre-index.component.html',
  styleUrls: ['./serre-index.component.css']
})


export class SerreIndexComponent implements OnInit{

  /*{id:number,
    fk_id_01_domaines:number,
    num_serre:string,
    sup_serre_ha:string,
    cereated_at:Date,
    updated_at:Date}*/
  serreList:any[];
  serreSubscription:Subscription
 

  constructor(private serreService:SerreService) {
    this.getSerreData()
   }
  
 
  
  ngOnInit() {
   //this.getSerreData()
   //console.log(this.serreList.toString())
   
  }
 
  getSerreData(){
      this.serreSubscription=this.serreService.getSerre().subscribe(
        (value:any)=>{
          var list=[]
          for(let i=0 ; i<(value.length);i++){
            list.push(value[i])
            
            
          }
         // console.log(list)
          this.serreList=list
          console.log("list"+JSON.stringify(this.serreList))
         
            //this.serreList.concat(value)
          
         
         /* for(let obj of value){
            console.log(obj)
            this.serreList+=obj   
          }*/
        },
        (err)=>{
          console.log("there is an api error!!"+err)
        }
      )
     

   
    
  }
  deleteSerre(id){
    //console.log(id)
    this.serreService.deleteSerre(id).subscribe(data=>{
      console.log(data)
      console.log(data+' is deleted successfully')
  
    })
  }
  
  


}
