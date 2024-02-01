import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  ModalRef,
  ModalService,
} from './shared/components/modal/services/modal.service';
import { ModalConfig } from './shared/components/modal/interfaces/modal-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// export class AppComponent implements AfterViewInit {
export class AppComponent {
  @ViewChild('modal')
  modalTemplateRef: TemplateRef<any>;

  // @ViewChild('template1')
  // template1: TemplateRef<any>;

  // @ViewChild('template2')
  // template2: TemplateRef<any>;

  // selected: TemplateRef<any>;

  // ngAfterViewInit(): void {
  //   this.selected = this.template1;
  // }

  title = 'a11y-p2';
  firstName = 'Tarcisio';
  modalRef: ModalRef;

  constructor(private modalService: ModalService) {}

  show(): void {
    // this.selected = this.template2;

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
