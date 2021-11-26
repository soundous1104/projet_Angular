import { Component, OnInit } from '@angular/core';
import { VarieteService } from '../services/variete.service';

@Component({
  selector: 'app-variete-index',
  templateUrl: './variete-index.component.html',
  styleUrls: ['./variete-index.component.css']
})
export class VarieteIndexComponent implements OnInit {
  varieteList:any[]

  constructor(private varieteService:VarieteService) { }

  ngOnInit() {
    this.getVarieteList();
  }
  getVarieteList(){
  
    this.varieteService.getVariete().subscribe(
      (value:any)=>{
        var list=[]
        for(let i=0 ; i<(value.length);i++){
          list.push(value[i])

        }
        this.varieteList=list
        console.log("list"+JSON.stringify(this.varieteList))
      }
     
    )
   

    }

    deleteVariete(id){
      //console.log(id)
      this.varieteService.deleteVariete(id).subscribe(data=>{
        console.log(data)
        console.log(data+' is deleted successfully')
    
      })
    }
    
}
