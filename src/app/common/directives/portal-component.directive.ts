import {
  Directive, ViewContainerRef,
  ComponentFactoryResolver, Input, ElementRef, Renderer
} from '@angular/core';

@Directive({
  selector: '[my-portal]'
})
export class PortalDirective {

  @Input('portal-component')
  set component(component: any) {
    if (component) {
      let conmponentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
      this.viewContainer.createComponent(conmponentFactory);
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

}