import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  ModalConfig,
  ModalRef,
  ModalService,
} from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal')
  modalTemplateRef: TemplateRef<any>;

  title = 'a11y-p2';
  firstName = 'Tarcisio';
  modalRef: ModalRef;

  constructor(private modalService: ModalService) {}

  show(): void {
    const config: ModalConfig = {
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    };

    this.modalRef = this.modalService.open(config);
  }

  close(): void {
    this.modalRef.close();
  }
}
