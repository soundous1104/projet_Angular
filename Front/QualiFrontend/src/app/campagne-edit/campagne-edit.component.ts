import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campagne } from '../Campagne';
import { Culture } from '../culture';
import { CampagneService } from '../services/campagne.service';
import { CultureService } from '../services/culture.service';
@Component({
  selector: 'app-campagne-edit',
  templateUrl: './campagne-edit.component.html',
  styleUrls: ['./campagne-edit.component.css']
})
export class CampagneEditComponent implements OnInit {
  id:any;
  campagne=new Campagne
  data:any
  constructor(
    private campagneService:CampagneService,
    private activeRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.params.id
    console.log(this.activeRoute.snapshot.params.id)
    this.getCampagneDetails()
  }

  edit($id){
    this.campagneService.editCampagne($id).subscribe(data=>{
      console.log(data)
      console.log($id)
    })
  }
  getCampagneDetails(){
    this.campagneService.getCampagneById(this.id).subscribe(res=>{
      this.data=res
      this.campagne=this.data
    })
  }
  update(){
    this.campagneService.updateCampagne(this.id,this.campagne).subscribe(res=>{
      console.log(res+"campagne is updated")
    })
  }

}
