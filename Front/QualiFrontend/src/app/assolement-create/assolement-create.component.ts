import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssolementService } from '../services/assolement.service';
import { CampagneService } from '../services/campagne.service';
import { CultureService } from '../services/culture.service';
import { DomaineService } from '../services/domaine.service';
import { SerreService } from '../services/serre.service';
import { VarieteService } from '../services/variete.service';
export interface Assolement{

  domaine:string
  variete:string
  campagne:string
  culture:string
  serre:string
 
  

}
@Component({
  selector: 'app-assolement-create',
  templateUrl: './assolement-create.component.html',
  styleUrls: ['./assolement-create.component.css']
})
export class AssolementCreateComponent implements OnInit {
domaine:any[]
variete:any[]
campagne:any[]
culture:any[]
serre:any[]


createAssolement:FormGroup

  constructor(private assolementService:AssolementService,
    private domaineService:DomaineService,
    private varieteService:VarieteService,
    private campagneService:CampagneService,
    private cultureService:CultureService,
    private serreService:SerreService,

  ){ 
    this.createAssolement=new FormGroup({
      domaineSelect:new FormControl("",[Validators.required]),
      varieteSelect:new FormControl("",[Validators.required]),
      campagneSelect:new FormControl("",[Validators.required]),
      cultureSelect:new FormControl("",[Validators.required]),
      serreSelect:new FormControl("",[Validators.required]),
    
    })
    
      
  }
  ngOnInit() {
    this.getDomaineList()
    this.getVarieteList()
    this.getSerreList()
    this.getCultureList()
    this.getCampagneList()
    this.onSubmit()
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

  onSubmit(){
    
    const formValue=this.createAssolement.value;
      const assolement={
        domaineSelect:formValue.domaineSelect,
        varieteSelect:formValue.varieteSelect,
        campagneSelect:formValue.campagneSelect,
        cultureSelect:formValue.cultureSelect,
        serreSelect:formValue.serreSelect
       
      }
      console.log(assolement)
      this.assolementService.insertAssolement(assolement).subscribe(value=>{
        console.log('the '+value+' is inserted to database')
       // this.router.navigate(['domaineindex'])
       console.log(value)
      })
      
     }
  
  
  
  
  get domaines(){
    return this.createAssolement.get("domaineSelect")
  }
  get serres(){
    return this.createAssolement.get("serreSelect")
  }
  get varietes(){
    return this.createAssolement.get("varieteSelect")
  }
  get campagnes(){
    return this.createAssolement.get("campagneSelect")
  }
  get cultures(){
    return this.createAssolement.get("cultureSelect")
  }

}
