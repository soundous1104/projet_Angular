import { Component, OnInit } from '@angular/core';
import { DomaineService } from '../services/domaine.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


export interface Domaine{
  domaines:string;
}
@Component({
  selector: 'app-domaine-create',
  templateUrl: './domaine-create.component.html',
  styleUrls: ['./domaine-create.component.css']
})


export class DomaineCreateComponent implements OnInit {
  createDomaine:FormGroup
  constructor(
    private router: Router,
    private domaineService:DomaineService) {

    this.createDomaine=new FormGroup({
      domaines:new FormControl("",[Validators.required])})
   
   }

  ngOnInit() { 
   this.onSubmit()         
  }
  onSubmit(){
    
     const formValue=this.createDomaine.value;
       const domaine={
         domaines:formValue.domaines,
        
       }
       this.domaineService.insertDomaine(domaine).subscribe(value=>{
         console.log('the '+value+' is inserted to database')
        // this.router.navigate(['domaineindex'])
       })
       
      }
     

  get domaines(){
    return this.createDomaine.get("domaines")
  }
  
  
 
  

}
