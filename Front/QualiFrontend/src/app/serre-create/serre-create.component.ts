import { Component, OnInit } from '@angular/core';
//import { DomaineService } from '../services/domaine.service';
import { SerreService } from '../services/serre.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomaineService } from '../services/domaine.service';

export interface Serre{
  domaine:string
  num_serre:string
  sup_serre_ha:number
}
@Component({
  selector: 'app-serre-create',
  templateUrl: './serre-create.component.html',
  styleUrls: ['./serre-create.component.css']
})
export class SerreCreateComponent implements OnInit {
  serreDomaine:any[]

  createSerre:FormGroup

  constructor(private serreService:SerreService,
    private domaineService:DomaineService) { 
    this.createSerre=new FormGroup({
      domaineSelect:new FormControl("",[Validators.required]),
      num_serre:new FormControl("",[Validators.required]),
      sup_serre_ha:new FormControl("",[Validators.required])})
    }
      
  

  ngOnInit() {
    this.getDomaineList()
    
  
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
        console.log(dom)
        this.serreDomaine=dom
        //console.log("list"+JSON.stringify(this.serreDomaine))
      }
     
    
   
    )
      //console.log(JSON.stringify(domaine))
}
onSubmit(){
    
  const formValue=this.createSerre.value;
    const serre={
      domaine:formValue.domaineSelect,
      num_serre:formValue.num_serre,
      sup_serre_ha:formValue.sup_serre_ha
     
    }
    console.log(serre)
    this.serreService.insertSerre(serre).subscribe(value=>{
      console.log('the '+value+' is inserted to database')
     // this.router.navigate(['domaineindex'])
     console.log(value)
    })
    
   }




get domaineList(){
  return this.createSerre.get("domaineSelect")
}
get num_serre(){
  return this.createSerre.get("num_serre")
}
get sup_serre_ha(){
  return this.createSerre.get("sup_serre_ha")
}
}
