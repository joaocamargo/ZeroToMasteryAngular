import { ModalService } from './../../services/modal.service';
import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'], 
  //providers : [ModalService]
})
export class ModalComponent implements OnInit {

  @Input() idModal: string = '';

  constructor(public modal: ModalService, public el: ElementRef) { 
    
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }


  closeModal() {      
      this.modal.toggleModal(this.idModal);
    }

}
