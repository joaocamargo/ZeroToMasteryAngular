import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
} 

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: IModal[] = [];

  constructor() { }

  unregister(id: string){
    this.modals = this.modals.filter(x=>x.id !== id);
  }

  register(id: string) {
    this.modals.push({
      id, 
      visible : false
    });
  }

isModalOpen(id: string) : boolean{ 
  var modal = this.modals.find(x => x.id === id);
  return !!modal?.visible;
}

toggleModal(id: string){
let modal = this.modals.find(f=>f.id==id);
if(modal)
  modal.visible = !modal.visible;  
}

}
