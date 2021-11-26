import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomaineService } from '../services/domaine.service';
import { MapService } from '../services/map.service';
import { SerreService } from '../services/serre.service';

@Component({
  selector: 'app-modalcontent',
  templateUrl: './modalcontent.component.html',
  styleUrls: ['./modalcontent.component.css']
})
export class ModalcontentComponent implements OnInit {
  domaines:any[]
  serres:any[]
  dom:number
  polyData:FormGroup
  surface:number
 
  //@Input() public polyData;
  @Input() public AreaSurface;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(private domaineService:DomaineService,
    private mapservice:MapService,
    private serreService:SerreService,
    public activeModal: NgbActiveModal
  ) {  this.polyData=new FormGroup({
    domaine:new FormControl("",[Validators.required]),
    serre:new FormControl("",[Validators.required]),
    
  })
this.surface=this.mapservice.Surface
  }

  ngOnInit() {
    this.getDomaineList()
    this.getSerreList()
   
  }
  getDomaineList(){
    this.domaineService.getDomaine().subscribe(
      (value:any)=>{
        
        var list=[] 
          this.domaines=value

      }
     
    
   
    )

}
onChange($event){
  this.polyData.controls['domaine'].setValue($event.value);
 
  //this.dom=$event.value
  this.dom=this.polyData.value.domaine
  //alert(this.dom)
    

}
onSubmit(){
  //this.passEntry.emit(this.polyData);
  
  const formValue=this.polyData.value;
    const data={
      domaine:formValue.domaine,
      serre:formValue.serre,
      
     
    }
this.mapservice.data=data
    console.log(data)
    //this.passEntry.emit(data);
   //this.passEntry.next(data)
    
   }


getSerreList(){
  this.serreService.getSerre().subscribe(
    (value:any)=>{
      
      this.serres=value  
      //var newList=this.serres
      //.filter( elem=>  elem['fk_id_01_domaines'] === this.dom)
     
    }
  )}
  
    get domaine(){
      return this.polyData.get("domaine")
    }
    get serre(){
      return this.polyData.get("serre")
    }
 

  

}
