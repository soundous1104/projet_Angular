import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerreIndexComponent } from './serre-index/serre-index.component';
import { SerreEditComponent } from './serre-edit/serre-edit.component';
import { SerreCreateComponent } from './serre-create/serre-create.component';
import { SerreService } from './services/serre.service';
import { DomaineIndexComponent } from './domaine-index/domaine-index.component';
import { DomaineEditComponent } from './domaine-edit/domaine-edit.component';
import { DomaineCreateComponent } from './domaine-create/domaine-create.component';

import { CultureIndexComponent } from './culture-index/culture-index.component';
import { CultureEditComponent } from './culture-edit/culture-edit.component';
import { CultureCreateComponent } from './culture-create/culture-create.component';
import { CampagneIndexComponent } from './campagne-index/campagne-index.component';
import { CampagneEditComponent } from './campagne-edit/campagne-edit.component';
import { CampagneCreateComponent } from './campagne-create/campagne-create.component';
import { VarieteIndexComponent } from './variete-index/variete-index.component';
import { VarieteEditComponent } from './variete-edit/variete-edit.component';
import { VarieteCreateComponent } from './variete-create/variete-create.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AssolementComponent } from './assolement/assolement.component';
import { AssolementIndexComponent } from './assolement-index/assolement-index.component';
import { AssolementCreateComponent } from './assolement-create/assolement-create.component';
import { AssolementEditComponent } from './assolement-edit/assolement-edit.component';
import { SuiviCreateComponent } from './suivi-create/suivi-create.component';
//import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule, MatDatepickerModule,MatDialogModule,MatIconModule,MatNativeDateModule, MatTabsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { SuiviEditComponent } from './suivi-edit/suivi-edit.component';
import { SuiviIndexComponent } from './suivi-index/suivi-index.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';

import { ModalComponent } from './modal/modal.component';
import { ModalcontentComponent } from './modalcontent/modalcontent.component';
import {  NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';

import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    
    AppComponent,
    SerreIndexComponent,
    SerreEditComponent,
    SerreCreateComponent,
    DomaineIndexComponent,
    DomaineEditComponent,
    DomaineCreateComponent,
    CultureIndexComponent,
    CultureEditComponent,
    CultureCreateComponent,
    CampagneIndexComponent,
    CampagneEditComponent,
    CampagneCreateComponent,
    VarieteIndexComponent,
    VarieteEditComponent,
    VarieteCreateComponent,
    //AssolementComponent,
    AssolementIndexComponent,
    AssolementCreateComponent,
    AssolementEditComponent,
    SuiviCreateComponent,
    SuiviEditComponent,
    SuiviIndexComponent,
    MapComponent,
    
    ModalComponent,
    ModalcontentComponent,
  
    HeaderComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
   // NgbModalBackdrop,
   NgbModule,
    MatTabsModule,
    
    
    
   
   
   // MatLabel,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAI3vjvnWKk0ip1XkYLi0HoQzHu5t4NIYA',
      libraries: ['places','geometry','drawing'] 
    }),
   
  ],
  providers: [SerreService,DatePipe ],
  bootstrap: [AppComponent],
 /* entryComponents: [
    NgbModalBackdrop,
   
  ],*/
  
})
export class AppModule { }
