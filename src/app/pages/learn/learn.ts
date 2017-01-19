import {
	Component, OnInit, Renderer,
	ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';
import { PortalComponent } from './portal-component';

@Component({
	selector: 'learn',
	styleUrls: ['./learn.scss'],
	templateUrl: './learn.html'
})

export class Learn implements OnInit {
	portalComponent = PortalComponent;

	@ViewChild("content") content: ElementRef;

	constructor(
		private render: Renderer,
		// private viewContainer: ViewContainerRef,     
		private _componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngOnInit() {
		this.render.createText(this.content.nativeElement, 'Render绑定文字');
		// let conmponentFactory = this._componentFactoryResolver.resolveComponentFactory(PortalComponent);
		// this.viewContainer.createComponent(conmponentFactory);  
	}  


}