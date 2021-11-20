import { Component, Input } from '@angular/core';
import { Module } from 'src/app/models/module-model';  
    
@Component({    
    selector:'modulegallery',    
    templateUrl:'./modulegallery.component.html',    
    styleUrls:['./modulegallery.component.css']    
})

export class ModuleGallery {
    @Input() moduleList?: Module[];
}