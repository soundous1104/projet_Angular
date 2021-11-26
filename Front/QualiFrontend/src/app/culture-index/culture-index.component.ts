import { Component, OnInit } from '@angular/core';
import { CultureService } from '../services/culture.service';

@Component({
  selector: 'app-culture-index',
  templateUrl: './culture-index.component.html',
  styleUrls: ['./culture-index.component.css']
})
export class CultureIndexComponent implements OnInit {

  cultureList:any[];
  constructor(private cultureService:CultureService) { }

  ngOnInit() {
    this.getCultureList()
  }

  getCultureList(){
  
    this.cultureService.getCulture().subscribe(
      (value:any)=>{
        var list=[]
        for(let i=0 ; i<(value.length);i++){
          list.push(value[i])
          
          
        }
       // console.log(list)
        this.cultureList=list
        console.log("list"+JSON.stringify(this.cultureList))
       
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

  deleteCulture(id){
    //console.log(id)
    this.cultureService.deleteCulture(id).subscribe(data=>{
      console.log(data)
      console.log(data+' is deleted successfully')
  
    })
  }
}
