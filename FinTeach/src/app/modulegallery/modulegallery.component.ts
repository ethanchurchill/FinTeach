//Class defining the Module Gallery Component
//This encompasses the gallery displayed on the dashboard
//Since there are are only UI elements, there were no functions to be defined.

import { Component, Input } from '@angular/core';
import { Module } from 'src/app/models/module-model';

@Component({
    selector:'app-module-gallery',
    templateUrl:'./modulegallery.component.html',
    styleUrls:['./modulegallery.component.css']
})

export class ModuleGalleryComponent {
    //A list of modules consumed by the HTML
    @Input() moduleList?: Module[];
}
