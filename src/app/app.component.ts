import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ModalService } from './shared/components/modal/services/modal.service';
import { ModalConfig } from './shared/components/modal/interfaces/modal-config';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
// export class AppComponent implements AfterViewInit {
export class AppComponent implements OnInit {
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
  surname = '';
  age = '';
  info = false;

  modalRef: ModalRef;
  form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Tarcisio', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    });
  }

  show(): void {
    // this.selected = this.template2;

    const config: ModalConfig = {
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    };

    this.modalRef = this.modalService.open(config);
  }

  submit(): void {

    if(this.form.invalid) return;

    console.log(this.form.value);
    this.close();
  }

  close(): void {
    this.modalRef.close();
  }
}
