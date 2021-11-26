import { Component, OnInit } from '@angular/core';
import { DomaineService } from '../services/domaine.service';

@Component({
  selector: 'app-domaine-index',
  templateUrl: './domaine-index.component.html',
  styleUrls: ['./domaine-index.component.css']
})
export class DomaineIndexComponent implements OnInit {
  domaineList:any[];

  constructor(private domaineService : DomaineService) { }

  ngOnInit() {
    this.getDomaineList()
  }
  getDomaineList(){
  
  this.domaineService.getDomaine().subscribe(
    (value:any)=>{
      var list=[]
      for(let i=0 ; i<(value.length);i++){
        list.push(value[i])
        
        
      }
     // console.log(list)
      this.domaineList=list
      console.log("list"+JSON.stringify(this.domaineList))
     
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
deleteDomaine(id){
  //console.log(id)
  this.domaineService.deleteDomaine(id).subscribe(data=>{
    console.log(data)
    console.log(data+' is deleted successfully')

  })
}


}
