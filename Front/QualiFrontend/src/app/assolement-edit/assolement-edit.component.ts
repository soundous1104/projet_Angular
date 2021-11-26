import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Assol } from '../assol';
import { AssolementService } from '../services/assolement.service';
import { CampagneService } from '../services/campagne.service';
import { CultureService } from '../services/culture.service';
import { DomaineService } from '../services/domaine.service';
import { SerreService } from '../services/serre.service';
import { VarieteService } from '../services/variete.service';
@Component({
  selector: 'app-assolement-edit',
  templateUrl: './assolement-edit.component.html',
  styleUrls: ['./assolement-edit.component.css']
})
export class AssolementEditComponent implements OnInit {
  id:any;
  assolement=new Assol
  data:any
  domaine:any[]
variete:any[]
campagne:any[]
culture:any[]
serre:any[]


  constructor(private activeRoute:ActivatedRoute,
    private assolementService:AssolementService,
    private domaineService:DomaineService,
    private varieteService:VarieteService,
    private campagneService:CampagneService,
    private cultureService:CultureService,
    private serreService:SerreService,) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.params.id
    console.log(this.activeRoute.snapshot.params.id)
    this.getDomaineList()
    this.getVarieteList()
    this.getSerreList()
    this.getCultureList()
    this.getCampagneList()
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
        this.domaine=dom
        //console.log("list"+JSON.stringify(this.serreDomaine))
      }
     
    
   
    )
      //console.log(JSON.stringify(domaine))
}
getVarieteList(){
  this.varieteService.getVariete().subscribe(
    (value:any)=>{
      var list=[]
      for(let i=0 ; i<(value.length);i++){
        list.push(value[i])

      }
      var dom=[]
      for(let l of list){
        dom.push(l.varietes)
      }
      //console.log(dom)
      this.variete=dom
      //console.log("list"+JSON.stringify(this.serreDomaine))
    }
   
  
 
  )
    //console.log(JSON.stringify(domaine))
}

getSerreList(){
  this.serreService.getSerre().subscribe(
    (value:any)=>{
      var list=[]
      for(let i=0 ; i<(value.length);i++){
        list.push(value[i])

      }
      var dom=[]
      for(let l of list){
        dom.push(l.num_serre)
      }
      //console.log(dom)
      this.serre=dom
      //console.log("list"+JSON.stringify(this.serreDomaine))
    }
   
  
 
  )
    //console.log(JSON.stringify(domaine))
}


getCampagneList(){
  this.campagneService.getCampagne().subscribe(
    (value:any)=>{
      var list=[]
      for(let i=0 ; i<(value.length);i++){
        list.push(value[i])

      }
      var dom=[]
      for(let l of list){
        dom.push(l.campagne)
      }
      //console.log(dom)
      this.campagne=dom
      //console.log("list"+JSON.stringify(this.serreDomaine))
    }
   
  
 
  )
    //console.log(JSON.stringify(domaine))
}

getCultureList(){
  this.cultureService.getCulture().subscribe(
    (value:any)=>{
      var list=[]
      for(let i=0 ; i<(value.length);i++){
        list.push(value[i])

      }
      var dom=[]
      for(let l of list){
        dom.push(l.cultures)
      }
      //console.log(dom)
      this.culture=dom
      //console.log("list"+JSON.stringify(this.serreDomaine))
    }
   
  
 
  )
    //console.log(JSON.stringify(domaine))
}







  edit($id){
    this.assolementService.editAssolement($id).subscribe(data=>{
      console.log(data)
      console.log($id)
    })
  }

    getSerreDetails(){
      this.assolementService.getAssolementById(this.id).subscribe(res=>{
        this.data=res
        this.assolement=this.data
      })
    }
    update(){
      this.assolementService.updateAssolement(this.id,this.assolement).subscribe(res=>{
        console.log(res+"assolement is updated")
      })
    }

}
