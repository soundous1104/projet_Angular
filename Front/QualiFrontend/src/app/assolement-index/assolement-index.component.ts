import { Component, OnInit } from '@angular/core';
import { AssolementService } from '../services/assolement.service';

@Component({
  selector: 'app-assolement-index',
  templateUrl: './assolement-index.component.html',
  styleUrls: ['./assolement-index.component.css']
})
export class AssolementIndexComponent implements OnInit {

  constructor(private assolementService:AssolementService) { }
assolementList:any[]
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
        console.log(list)
        this.assolementList=list
        console.log("list"+JSON.stringify(this.assolementList))
       
          //this.serreList.concat(value)
        
       
       /* for(let obj of value){
          console.log(obj)
          this.serreList+=obj   
        }*/
      },
      (err)=>{
        console.log("there is an api error!!"+err)
      }
    )
   
  
  
  
  }
  deleteAssolement(id){
    //console.log(id)
    this.assolementService.deleteAssolement(id).subscribe(data=>{
      console.log(data)
      console.log(data+' is deleted successfully')
  
    })
  }
  
  
}
