import { Component, OnInit } from '@angular/core';
import { DomaineService } from '../services/domaine.service';
import { ActivatedRoute } from '@angular/router';
import { Domaine } from '../domaine';
@Component({
  selector: 'app-domaine-edit',
  templateUrl: './domaine-edit.component.html',
  styleUrls: ['./domaine-edit.component.css']
})
export class DomaineEditComponent implements OnInit {
  id:any;
  domaine=new Domaine
  data:any
  constructor(private domaineService:DomaineService,
              private activeRoute:ActivatedRoute,
              ) { }

  ngOnInit() {
    this.id=this.activeRoute.snapshot.params.id
    console.log(this.activeRoute.snapshot.params.id)
    this.getDomaineDetails()
  }
  edit($id){
    this.domaineService.editDomaine($id).subscribe(data=>{
      console.log(data)
      console.log($id)
    })
  }
  getDomaineDetails(){
    this.domaineService.getDomaineById(this.id).subscribe(res=>{
      this.data=res
      this.domaine=this.data
    })
  }
  update(){
    this.domaineService.updateDomaine(this.id,this.domaine).subscribe(res=>{
      console.log("the domaine is updated")
    })
  }

}
