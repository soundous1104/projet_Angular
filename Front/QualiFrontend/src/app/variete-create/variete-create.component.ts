import { Component, OnInit } from '@angular/core';
import { CultureService } from '../services/culture.service';
import { VarieteService } from '../services/variete.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/*export interface variete
{
  cultureSelect:string
  varietes:string

}*/
@Component({
  selector: 'app-variete-create',
  templateUrl: './variete-create.component.html',
  styleUrls: ['./variete-create.component.css']
})
export class VarieteCreateComponent implements OnInit {
  culture:any[]
  createVariete:FormGroup

  constructor(private cultureService:CultureService,
    private varieteService:VarieteService) { 
      this.createVariete=new FormGroup({
        cultureSelect:new FormControl("",[Validators.required]),
        varietes:new FormControl("",[Validators.required])})
    }

  ngOnInit() {
    this.getVarieteList()
    this.onSubmit()}
  getVarieteList(){
  
    this.cultureService.getCulture().subscribe(
      (value:any)=>{
        var list=[]
        for(let i=0 ; i<(value.length);i++){
          list.push(value[i])

        }
        this.culture=list
        console.log("list"+JSON.stringify(this.culture))
      }
     
    )
   


}

onSubmit(){
    
  const formValue=this.createVariete.value;
    const variete={
      cultureSelect:formValue.cultureSelect,
      variete:formValue.varietes
     
     
    }
    console.log(variete)
   this.varieteService.insertVariete(variete).subscribe(value=>{
      console.log('the '+value+' is inserted to database')
     // this.router.navigate(['domaineindex'])
     console.log(value)
    })
    
   }



get cultureList(){                
  return this.createVariete.get("cultureSelect")
}
get varietes(){
  return this.createVariete.get("varietes")
}

}
