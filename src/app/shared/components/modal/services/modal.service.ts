import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';
import { ModalComponent } from '../modal.component';
import { BodyInjectorService } from 'src/app/shared/services/body-injector';

@Injectable()
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    this.componentFactory =
      componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;

    this.bodyInjector.stackBeforeAppRoot(componentRef);

    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  public close(): void {
    this.componentRef.destroy();
  }
}
