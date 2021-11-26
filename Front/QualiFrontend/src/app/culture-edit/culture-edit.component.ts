import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Culture } from '../culture';
import { CultureService } from '../services/culture.service';
@Component({
  selector: 'app-culture-edit',
  templateUrl: './culture-edit.component.html',
  styleUrls: ['./culture-edit.component.css']
})
export class CultureEditComponent implements OnInit {
  id:any;
  culture=new Culture
  data:any

  constructor(private cultureService:CultureService,
    private activeRoute:ActivatedRoute,) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.params.id
    console.log(this.activeRoute.snapshot.params.id)
    this.getCultureDetails()
  }
  edit($id){
    this.cultureService.editCulture($id).subscribe(data=>{
      console.log(data)
      console.log($id)
    })
  }
  getCultureDetails(){
    this.cultureService.getCultureById(this.id).subscribe(res=>{
      this.data=res
      this.culture=this.data
    })
  }
  update(){
    this.cultureService.updateCulture(this.id,this.culture).subscribe(res=>{
      console.log("the domaine is updated")
    })
  }

}
