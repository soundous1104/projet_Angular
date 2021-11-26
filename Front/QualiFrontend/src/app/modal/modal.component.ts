import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalcontentComponent } from '../modalcontent/modalcontent.component';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent  {
    
      private modalService: NgbModal
    constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private injector : Injector  ){
        if(isPlatformBrowser(this.platformId)){
            this.modalService=this.injector.get(NgbModal)
        }
    }
    
  openModal() {
    const modalRef = this.modalService.open(ModalcontentComponent);
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
        console.log(receivedEntry);
       })
    /*modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
       console.log(receivedEntry);
      })*/

}}
  