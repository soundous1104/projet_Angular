import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampagneService } from '../services/campagne.service';

export interface Campagne{
  campagne:string;
}
@Component({
  selector: 'app-campagne-create',
  templateUrl: './campagne-create.component.html',
  styleUrls: ['./campagne-create.component.css']
})
export class CampagneCreateComponent implements OnInit {
  createCampagne:FormGroup
  constructor(private router: Router,
    private campagneService:CampagneService) {
      
      this.createCampagne=new FormGroup({
        campagnes:new FormControl("",[Validators.required])})
     
    }

  ngOnInit() {
    this.onSubmit()
  }

  onSubmit(){
    
    const formValue=this.createCampagne.value;
      const campagne={
        campagne:formValue.campagnes,
       
      }
      this.campagneService.insertCampagne(campagne).subscribe(value=>{
        console.log('the '+value+' is inserted to database')
       // this.router.navigate(['domaineindex'])
      })
      
     }
    

 get campagnes(){
   return this.createCampagne.get("campagnes")
 }

}
