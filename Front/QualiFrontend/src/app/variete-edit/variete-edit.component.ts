import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CultureService } from '../services/culture.service';
import { VarieteService } from '../services/variete.service';
import { Variete } from '../variete';
@Component({
  selector: 'app-variete-edit',
  templateUrl: './variete-edit.component.html',
  styleUrls: ['./variete-edit.component.css']
})
export class VarieteEditComponent implements OnInit {
  id:any;
  variete=new Variete
  data:any
  varieteCulture:any[]
  constructor(private varieteService:VarieteService,
    private cultureService:CultureService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit() {

    this.id=this.activeRoute.snapshot.params.id
    console.log(this.activeRoute.snapshot.params.id)
    this.getVarieteDetails()
    this.getCultureList()
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
        this.varieteCulture=dom
        console.log("list"+JSON.stringify(this.varieteCulture))
      }
     
     
   
    )
    
      //console.log(JSON.stringify(domaine))
}


 edit($id){
   this.varieteService.editVariete($id).subscribe(data=>{
     console.log(data)
     console.log($id)
   })
 }

   getVarieteDetails(){
     this.varieteService.getVarieteById(this.id).subscribe(res=>{
       this.data=res
       this.variete=this.data
     })
   }
   update(){
     this.varieteService.updateVariete(this.id,this.variete).subscribe(res=>{
       console.log(res+"serre is updated")
     })
   }
}
