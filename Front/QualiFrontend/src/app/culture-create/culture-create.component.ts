import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CultureService } from '../services/culture.service';


export interface Culture{
  cultures:string;
}
@Component({
  selector: 'app-culture-create',
  templateUrl: './culture-create.component.html',
  styleUrls: ['./culture-create.component.css']
})
export class CultureCreateComponent implements OnInit {

  createCulture:FormGroup
  constructor(
    private router: Router,
    private cultureService:CultureService) {

    this.createCulture=new FormGroup({
      cultures:new FormControl("",[Validators.required])})
   
   }

  ngOnInit() { 
   this.onSubmit()         
  }


  onSubmit(){
    
     const formValue=this.createCulture.value;
       const culture={
         cultures:formValue.cultures,
        
       }
       this.cultureService.insertCulture(culture).subscribe(value=>{
         console.log('the '+value+' is inserted to database')
        // this.router.navigate(['domaineindex'])
       })
       
      }
     

  get cultures(){
    return this.createCulture.get("cultures")
  }
  
  
 
  


}
