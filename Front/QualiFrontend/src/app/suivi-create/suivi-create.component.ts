import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssolementService } from '../services/assolement.service';
import { SuiviService } from '../services/suivi.service';

export interface Suivi{
  assolementSelect:string
  date:Date
  nbr_ouvrier:number
  qte_recolte:number

}
@Component({
  selector: 'app-suivi-create',
  templateUrl: './suivi-create.component.html',
  styleUrls: ['./suivi-create.component.css']
})
export class SuiviCreateComponent implements OnInit {
  assolement:any[]

  createSuivi:FormGroup
  constructor(private datePipe: DatePipe,
    private suiviService:SuiviService,
    private assolementService:AssolementService) { 
    this.createSuivi=new FormGroup({
      assolementSelect:new FormControl("",[Validators.required]),
      date:new FormControl("",[Validators.required,]),
      nbr_ouvrier:new FormControl("",[Validators.required]),
      qte_recolte:new FormControl("",[Validators.required]),
    })
    }
  

  ngOnInit() {
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
        //console.log("list"+JSON.stringify(this.assolement))
      }
     
    
   
    )
      //console.log(JSON.stringify(domaine))
}

onSubmit(){
    
  const formValue=this.createSuivi.value;
    const suivi={
      assolementSelect:formValue. assolementSelect,
      date:formValue.date,
      nbr_ouvrier:formValue.nbr_ouvrier,
      qte_recolte:formValue.qte_recolte,
     
    }
    suivi.date   = this.datePipe.transform(suivi.date, 'yyyy-MM-dd')
    console.log(suivi)
    this.suiviService.insertSuivi(suivi).subscribe(value=>{
      console.log('the '+value+' is inserted to database')
     // this.router.navigate(['domaineindex'])
     console.log(value)
    })
    
   }




get assolementList(){
  return this.createSuivi.get("assolementSelect")
}
get dates(){
  return this.createSuivi.get("date")
}
get nbrouvrier(){
  return this.createSuivi.get("nbr_ouvrier")
}
get qterecolte(){
  return this.createSuivi.get("qte_recolte")
}

}
