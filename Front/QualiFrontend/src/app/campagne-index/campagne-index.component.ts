import { Component, OnInit } from '@angular/core';
import { CampagneService } from '../services/campagne.service';

@Component({
  selector: 'app-campagne-index',
  templateUrl: './campagne-index.component.html',
  styleUrls: ['./campagne-index.component.css']
})
export class CampagneIndexComponent implements OnInit {
  campagneList:any[]

  constructor(private campagneService:CampagneService) { }

  ngOnInit() {
    this.getCultureList()
  }

  getCultureList(){
  
    this.campagneService.getCampagne().subscribe(
      (value:any)=>{
        var list=[]
        for(let i=0 ; i<(value.length);i++){
          list.push(value[i])
          
          
        }
       // console.log(list)
        this.campagneList=list
        console.log("list"+JSON.stringify(this.campagneList))
       
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

  deleteCampagne(id){
    //console.log(id)
    this.campagneService.deleteCampagne(id).subscribe(data=>{
      console.log(data)
      console.log(data+' is deleted successfully')
  
    })
  }
  

}
