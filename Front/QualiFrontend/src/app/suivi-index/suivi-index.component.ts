import { Component, OnInit } from '@angular/core';
import { SuiviService } from '../services/suivi.service';

@Component({
  selector: 'app-suivi-index',
  templateUrl: './suivi-index.component.html',
  styleUrls: ['./suivi-index.component.css']
})
export class SuiviIndexComponent implements OnInit {
 suivi:any[];
  constructor(private suiviService:SuiviService) { }

  ngOnInit() {
    this.getSuiviList()
  }

  getSuiviList(){
  
    this.suiviService.getSuivi().subscribe(
      (value:any)=>{
        var list=[]
        for(let i=0 ; i<(value.length);i++){
          list.push(value[i])
          
          
        }
       // console.log(list)
        this.suivi=list
        console.log("list"+JSON.stringify(this.suivi))
       
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
  deleteSuivi(id){
    //console.log(id)
    this.suiviService.deleteSuivi(id).subscribe(data=>{
      console.log(data)
      console.log(data+' is deleted successfully')
  
    })
  }
  

}
