import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { serre } from '../serre';

import { DomaineService } from '../services/domaine.service';
import { SerreService } from '../services/serre.service';

@Component({
  selector: 'app-serre-edit',
  templateUrl: './serre-edit.component.html',
  styleUrls: ['./serre-edit.component.css']
})
export class SerreEditComponent implements OnInit {
  id:any;
  serre=new serre
  data:any
  serreDomaine:any[]
  constructor(private serreService:SerreService,
    private domaineService:DomaineService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.params.id
    console.log(this.activeRoute.snapshot.params.id)
    this.getSerreDetails()
    this.getDomaineList()
    //console.log("list"+JSON.stringify(this.serreDomaine))
  }

  getDomaineList(){
    
 
     this.domaineService.getDomaine().subscribe(
       (value:any)=>{
         var list=[]
         for(let i=0 ; i<(value.length);i++){
           list.push(value[i])
 
         }
         var dom=[]
         for(let l of list){
           dom.push(l.domaines)
         }
         //console.log(dom)
         this.serreDomaine=dom
         console.log("list"+JSON.stringify(this.serreDomaine))
       }
      
      
    
     )
     
       //console.log(JSON.stringify(domaine))
 }


  edit($id){
    this.serreService.editSerre($id).subscribe(data=>{
      console.log(data)
      console.log($id)
    })
  }

    getSerreDetails(){
      this.serreService.getSerreById(this.id).subscribe(res=>{
        this.data=res
        this.serre=this.data
      })
    }
    update(){
      this.serreService.updateSerre(this.id,this.serre).subscribe(res=>{
        console.log(res+"serre is updated")
      })
    }
  }

