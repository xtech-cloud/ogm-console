import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { AppConfig } from '../_config/app.config'

@Component({
    selector: 'orbit',
    templateUrl: './micro.web.component.html',
})
export class MicroWebComponent {
    orbitUrl:string;
    height:string;
    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.orbitUrl = `${AppConfig.settings.web.micro}`;
        var h = document.documentElement.offsetHeight || document.body.offsetHeight;
        h-=260;
        this.height = `${h}px`;
    }
}
