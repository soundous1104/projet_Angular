
import {  MapsAPILoader} from '@agm/core';
import { DataMouseEvent, GoogleMap, MouseEvent } from '@agm/core/services/google-maps-types';
import { MapType } from '@angular/compiler';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';
import { NgZone , ElementRef, OnDestroy, Input } from '@angular/core';
import {  Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { privateDecrypt } from 'crypto';
import { Subscription } from 'rxjs';
import { DomaineService } from '../services/domaine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MapService } from '../services/map.service';
import { SerreService } from '../services/serre.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injector, PLATFORM_ID } from '@angular/core';

import { ModalcontentComponent } from '../modalcontent/modalcontent.component';


//import { runInThisContext } from 'vm';
//import GoogleMaps from '@agm/core'

declare const google: any

interface marker {
	lat: number;
	lng: number;
	draggable: boolean;
  iconUrl?:string;
  
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() polyData
  polyId:number
  domaines:any[]
  serres:any[]
  


  title: string = 'AGM project';
  latitude: number
  longitude: number
  zoom:number
  

 load:any=[]
  origlatlng:{lat:number,lng:number,draggable:boolean}
  destlatlng:{lat:number,lng:number,draggable:boolean}
  //mapTypeId: "roadmap"
  mapTypeControl: true
  mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ["roadmap", "terrain","satellite"]

  }
  fullscreenControl: true
 
  private geoCoder ;
  address:string;
  points:{lat:number,lng:number}[];
  marker:marker[]=[];
  _originFormat:{lat:number,lng:number}
  map:  google.maps.Map;
  distance:number;
  test:number;
  
  id:number
  dom:number
 

  
  private modalService: NgbModal
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private injector : Injector  ,
    private route :Router,
    private activeRoute:ActivatedRoute,
    private domaineService:DomaineService, 
    private serreService:SerreService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone ,
    private geoService:MapService) {
      if(isPlatformBrowser(this.platformId)){
        this.modalService=this.injector.get(NgbModal)}
      
      
      
    
    /*this.polyData.controls['domaine'].valueChanges.subscribe((id) => {
      this.polyData.controls['domaine'].setValue(id);
     // alert(id)
     this.dom=id*/
     
//});

   // console.log(this.polyData.value.domaine)
    this.id=this.activeRoute.snapshot.params.id
    console.log(this.activeRoute.snapshot.params.id)
    }

  @ViewChild('origin',{static:false}) public originElementRef: ElementRef;

  ngOnInit(){
    this.getDomaineList()
    this.getSerreList()
    
    //console.log("list"+JSON.stringify(this.domaine))
      
   
 
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
          this.setCurrentLocation();  
          this.geoCoder = new google.maps.Geocoder;
          let origine = new google.maps.places.Autocomplete(this.originElementRef.nativeElement);
          origine.addListener("place_changed", () => {
            this.ngZone.run(() => {
              let place: google.maps.places.PlaceResult = origine.getPlace();
              if (place.geometry === undefined || place.geometry === null) {
                return;
              }
              this.latitude = place.geometry.location.lat();
              this.longitude = place.geometry.location.lng();
              this.origlatlng={lat:this.latitude,lng:this.longitude,draggable:false}
              this.marker.push(this.origlatlng)
              this._originFormat={lat:this.origlatlng.lat,lng:this.origlatlng.lng}
              this.zoom = 12;
             
              
            })
          })
       }) 
        
  }
  openModal() {
    const modalRef = this.modalService.open(ModalcontentComponent);
    modalRef.componentInstance.passEntry.subscribe((emmitedValue) => {
      alert(JSON.stringify(emmitedValue))
  });
    /*modalRef.componentInstance.polyData = this.polyData;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }*/
  //  });
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }
 /* openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }*/
  onChange($event){
    this.polyData.controls['domaine'].setValue($event.value);
    //this.dom=$event.value
    this.dom=this.polyData.value.domaine
    //alert(this.dom)
      
  }
  
  
  getDomaineList(){
    this.domaineService.getDomaine().subscribe(
      (value:any)=>{
        
        var list=[]
       /* for(let val of value){
         
            console.log("sdfsdf"+JSON.stringify(value['domaines']))
            list.push(val)
          }*/
          
          this.domaines=value

        
       // this.domaine=list 
       // console.log(JSON.stringify(this.domaine))
        /* var dom=[]
        for(let l of list){
          dom.push(l["domaines"])*/
       // }
        
        
       
      }
     
    
   
    )
      //console.log(JSON.stringify(domaine))
}

getSerreList(){
  this.serreService.getSerre().subscribe(
    (value:any)=>{
      
      
      this.serres=value  
      var newList=this.serres.filter( elem=>  elem['fk_id_01_domaines'] === this.dom)
      alert(newList)
      //  )
//(elem) => { elem.fk_id_01_domaines == this.dom
      /*var list=[]
      for(let i=0 ; i<(value.length);i++){
        list.push(value[i])

      }
      var dom=[]
      for(let l of list){
        dom.push(l.num_serre)
      }
      //console.log(dom)
      this.serres=dom
      console.log("list"+JSON.stringify(this.serres))*/
    }
  )}
  
    get domaine(){
      return this.polyData.get("domaine")
    }
    get serre(){
      return this.polyData.get("serre")
    }
    get cultures(){
      return this.polyData.get("culture")
    }



Polygone() {

  var tempObject = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "letter": "G",
          "color": "blue",
          "rank": "7",
          "ascii": "71"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
            ]
          ]
        }
      }
    ]
  };


  //this.map.data.addGeoJson(tempObject);

  this.map.data.loadGeoJson(
    "http://localhost:2000/geojson" )
  // Define the LatLng coordinates for the outer path.
  const outerCoords = [
    { lat: -32.364, lng: 153.207 }, 
    { lat: -35.364, lng: 153.207 }, 
    { lat: -35.364, lng: 158.207 }, 
    { lat: -32.364, lng: 158.207 }, 
  ];

  // Define the LatLng coordinates for an inner path.
  const innerCoords1 = [
    { lat: -33.364, lng: 154.207 },
    { lat: -34.364, lng: 154.207 },
    { lat: -34.364, lng: 155.207 },
    { lat: -33.364, lng: 155.207 },
  ];

  // Define the LatLng coordinates for another inner path.
  const innerCoords2 = [
    { lat: -33.364, lng: 156.207 },
    { lat: -34.364, lng: 156.207 },
    { lat: -34.364, lng: 157.207 },
    { lat: -33.364, lng: 157.207 },
  ];

  this.map.data.add({
    geometry: new google.maps.Data.Polygon([
      outerCoords,
      innerCoords1,
      innerCoords2,
    ]),
  });
  this.map.data.setStyle({
    fillColor: 'red',
    strokeWeight: 1
  });
 
}


  setCurrentLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
        this.marker.push({lat:this.latitude,lng:this.longitude,draggable:true,iconUrl:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"})
        this.getAddress(this.latitude,this.longitude)
        this.zoom=12;
        
      })
    }     
  }
    
  mapReady(event){
    this.map=event;
  }

  markerDragEnd(marker,$event:any){
    console.log($event);
    this.latitude=$event.latLng.lat();
    this.longitude=$event.latLng.lng();
    this.getAddress(this.latitude,this.longitude);
    
  }

  mapClick($event:any){
    console.log($event)
    this.getAddress($event.coords.lat,$event.coords.lng );
    this.marker.push({lat:$event.coords.lat  , lng:$event.coords.lng , draggable:true}
 )}


  
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: this.latitude, lng:this.longitude} }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }})
  }
  
/****************************************DRAWING MANAGER**************************** */
AreaSurface:number
 coordinates = [];
 all_shapes = [];
 selectedShape;



  geojson = {
  "type": "FeatureCollection",
  "features": [
    
  ]
  
};


 save(){
   console.log(this.geoService.data)
    console.log(this.geojson.features);
   this.geojson.features[this.geojson.features.length-1].geometry.formData.domaine=this.geoService.data.domaine
   this.geojson.features[this.geojson.features.length-1].geometry.formData.serre=this.geoService.data.serre
   console.log(this.geojson)
 this.geoService.insertGeoJson({data:JSON.stringify(this.geojson)}).subscribe(value=>{
  console.log('the '+value+' is inserted to database')})
 
  
   
   
  

}

feature
poly:any
Display(){
  this.geoService.getGeoJson().subscribe((val:any)=>{
    console.log(val)
    this.polyId=val.id
   var  newData = new google.maps.Data({
      map: this.map,
      style: this.map.data.getStyle()
  });
  
  
  
    newData.addGeoJson(JSON.parse(val.geojson));
    this.polyId=val.id
      
        }
       // )
  )
     
   }

infowindow: google.maps.InfoWindow;
//area:number

DrawingManager(){

 var GeoJSON = {
    type: 'Feature',
    geometry: {
        type: 'Polygon',
        coordinates: []
    },
    properties: {}
  }
const options = {
  drawingControl: true,
  drawingControlOptions: {
    drawingModes: ["polygon",'polyline','marker']
  },
  polygonOptions: {
    draggable: true,
    editable: true
  },
  drawingMode: google.maps.drawing.OverlayType.POLYGON
};

const drawingManager = new google.maps.drawing.DrawingManager(options);
drawingManager.setMap(this.map);
//drawingManager.addListener('click', this.clickSelection);
 
google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
  
     
  // Polygon drawn
  if (event.type === google.maps.drawing.OverlayType.POLYGON) {
    
    google.maps.event.addListener(event.overlay, 'click', this.SHOW_INFO);   
   /* this.infowindow=new google.maps.InfoWindow();
         event.addListener('click',() => {
         
          this.infowindow.setContent('polygon data');
          this.infowindow.open(this.map, event);
          })*/
    
    //alert(event.overlay.getPath().getArray())
    // mouses down on it.
    var newShape = event.overlay
    newShape.type = event.type;
    var area = google.maps.geometry.spherical.computeArea(newShape.getPath());
    //alert(area);
    this.AreaSurface= area/10000
    alert(this.AreaSurface);
    this.geoService.Surface=this.AreaSurface
    
  
  
    
   /* google.maps.event.addListener(event.overlay,'click',function(){
      infowindow.open(this.map,event.overlay);
    });*/
    //google.maps.event.addListener(newShape, 'click', ()=>{
      
         
         //this.infowindow.setContent("this.content");
         //this. infowindow.open(this.map, newShape)})
     /* newShape.addListener("click", () => {
        infowindow.open({
          anchor: newShape,
          map:this.map,
          shouldFocus: false,
        });*/
     
      
       // infowindow.open(this.map, newShape)
    
     
    





    for (let point of event.overlay.getPath().getArray()) {
      GeoJSON.geometry.coordinates.push([point.lng(), point.lat()]);

  }
  GeoJSON.geometry.coordinates.push(GeoJSON.geometry.coordinates[0]);

  this.load=GeoJSON.geometry.coordinates

  this.geojson.features.push({
    "type": "Feature",
    "properties": {
      "letter": "#",
      "color": "blue",
      "rank": "#",
      "ascii": "#"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [GeoJSON.geometry.coordinates,],
      "formData":{domaine:"",
                   serre:""}


   }})
  console.log("Polygon points:"+JSON.stringify(event.overlay.getPath().getArray()));
  //alert(JSON.stringify(GeoJSON.geometry.coordinates))
  alert("geojson : "+JSON.stringify(this.geojson))
  this.geoService.insertGeoJson({data:JSON.stringify(this.geojson)})
     
    var area = google.maps.geometry.spherical.computeArea(newShape.getPath());
    //alert(area);
    this.AreaSurface= area 
    // alert("Polygon points:"+JSON.stringify(event.overlay.getPath().getArray()));
      if(event.type === google.maps.drawing.OverlayType.POLYLINE){
        
          var polylinePath = event.getPath();
          //alert("polyline : "+polylinePath.getArray());    
                
      
      }
     

    }
 
    
         






})


} 
SHOW_INFO (event) {
  var infowin = new google.maps.InfoWindow();
  
  /*var contentString =  document.createElement('div');
  var div = document.createElement('div');
  div.id = "inf";
  //div.class ="normal";
  contentString.appendChild(div);*/
 
 
  var contentString =   '<b>dsfzf</b>' 
  /*'<form [formGroup]="polyData" (ngSubmit)="save()"  >'+     
 ' <div class="form-group">'+
  '<select class="browser-default" name="domaine"  formControlName="domaine" (change)="onChange(domaine)">'+
  '<option  *ngFor="let domaine of domaines" [value]="domaine.id">+domaine["domaines"]</option>'+
  '</select>'+
 '</div>'+
'<div class="form-group">'+
  '<select class="browser-default" name="serre"  formControlName="serre">'+
  '<option  *ngFor="let serre of serres" [value]="serre.id">{{serre.num_serre}}</option>'+
  '</select>'+
 '</div>'+
 '</form>'+
 "<p><b>surface:</b>"+this.AreaSurface+ ""+
   '<button type="button" class="btn btn-primary" style="margin: 6px;"(click)="Display()" >Save</button><br>'+
    '</div>';*/
 
  infowin = new google.maps.InfoWindow();
  infowin.setContent(contentString);
  infowin.setPosition(event.latLng);
  infowin.open(this.map, this);
}

closeResult: string;
  

  



}



