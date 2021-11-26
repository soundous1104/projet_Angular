import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssolementCreateComponent } from './assolement-create/assolement-create.component';
import { AssolementEditComponent } from './assolement-edit/assolement-edit.component';
import { AssolementIndexComponent } from './assolement-index/assolement-index.component';
//import { AssolementComponent } from './assolement/assolement.component';
import { CampagneCreateComponent } from './campagne-create/campagne-create.component';
import { CampagneEditComponent } from './campagne-edit/campagne-edit.component';
import { CampagneIndexComponent } from './campagne-index/campagne-index.component';
import { CultureCreateComponent } from './culture-create/culture-create.component';
import { CultureEditComponent } from './culture-edit/culture-edit.component';
import { CultureIndexComponent } from './culture-index/culture-index.component';

import { DomaineCreateComponent } from './domaine-create/domaine-create.component';
import { DomaineEditComponent } from './domaine-edit/domaine-edit.component';
import { DomaineIndexComponent } from './domaine-index/domaine-index.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { ModalComponent } from './modal/modal.component';
import { ModalcontentComponent } from './modalcontent/modalcontent.component';
import { SerreCreateComponent } from './serre-create/serre-create.component';
import { SerreEditComponent } from './serre-edit/serre-edit.component';
import { SerreIndexComponent } from './serre-index/serre-index.component';
import { SuiviCreateComponent } from './suivi-create/suivi-create.component';
import { SuiviEditComponent } from './suivi-edit/suivi-edit.component';
import { SuiviIndexComponent } from './suivi-index/suivi-index.component';

import { VarieteCreateComponent } from './variete-create/variete-create.component';
import { VarieteEditComponent } from './variete-edit/variete-edit.component';
import { VarieteIndexComponent } from './variete-index/variete-index.component';


const routes: Routes = [
  {path:'serreindex' , component:SerreIndexComponent},
  {path:'serreedit/:id',component:SerreEditComponent},
  {path:'serrecreate',component:SerreCreateComponent},
  {path:'domaineindex',component:DomaineIndexComponent},
  {path:'domaineedit/:id',component:DomaineEditComponent},
  {path:'domainecreate',component:DomaineCreateComponent},
  {path:'cultureindex',component:CultureIndexComponent},
  {path:'cultureedit/:id',component:CultureEditComponent},
  {path:'culturecreate',component:CultureCreateComponent},
  {path:'campagneindex',component:CampagneIndexComponent},
  {path:'campagneedit/:id',component:CampagneEditComponent},
  {path:'campagnecreate',component:CampagneCreateComponent},
  {path:'varieteindex',component:VarieteIndexComponent},
  {path:'varieteedit/:id',component:VarieteEditComponent},
  {path:'varietecreate',component:VarieteCreateComponent},
  {path:'assolementindex',component:AssolementIndexComponent},
  {path:'assolementedit/:id',component:AssolementEditComponent},
 
  {path:'assolementcreate',component:AssolementCreateComponent},
  {path:'suivicreate',component:SuiviCreateComponent},
  {path:'suiviedit/:id',component:SuiviEditComponent},
  {path:'suiviindex',component:SuiviIndexComponent},
  {path:'map',component:MapComponent},
  {path:'modal',component:ModalComponent},
  {path:'modalcontent',component:ModalcontentComponent},
  {path:'header',component:HeaderComponent}
 
  
 

 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
