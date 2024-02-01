import { Component, HostBinding } from '@angular/core';
import { ModalConfig } from './interfaces/modal-config';
import { fade } from '../../animations/fade';
import { ModalRef } from './models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [fade],
})
export class ModalComponent {
  @HostBinding('@fade')
  fade = true;

  config: ModalConfig;

  modalRef: ModalRef;

  close() {
    this.modalRef.close();
  }
}
