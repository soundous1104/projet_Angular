import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { suivi } from 'src/suivi';
import { AssolementService } from '../services/assolement.service';
import { SuiviService } from '../services/suivi.service';
@Component({
  selector: 'app-suivi-edit',
  templateUrl: './suivi-edit.component.html',
  styleUrls: ['./suivi-edit.component.css']
})
export class SuiviEditComponent implements OnInit {
  id:any;
  suivi=new suivi
  data:any
  assolement:any[]
  constructor(private suiviService:SuiviService,
    private assolementService:AssolementService,
    private activeRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.params.id
    console.log(this.activeRoute.snapshot.params.id)
    this.getSuiviDetails()
    this.getAssolementList()
  }
  getAssolementList(){
    
 
    this.assolementService.getAssolement().subscribe(
      (value:any)=>{
        var list=[]
        for(let i=0 ; i<(value.length);i++){
          list.push(value[i])

        }
        var dom=[]
        for(let l of list){
          dom.push(l.id)
        }
        //console.log(dom)
        this.assolement=dom
        console.log("list"+JSON.stringify(this.assolement))
      }
     
     
   
    )
    
      //console.log(JSON.stringify(domaine))
}


 edit($id){
   this.suiviService.editSuivi($id).subscribe(data=>{
     console.log(data)
     console.log($id)
   })
 }

   getSuiviDetails(){
     this.suiviService.getSuiviById(this.id).subscribe(res=>{
       this.data=res
       this.suivi=this.data
     })
   }
   update(){
     this.suiviService.updateSuivi(this.id,this.suivi).subscribe(res=>{
       console.log(res+"suivi is updated")
     })
   }

}
