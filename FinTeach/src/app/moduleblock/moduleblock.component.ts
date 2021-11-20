import { Component, Input } from '@angular/core'; 
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';  
    
@Component({    
    selector:'moduleblock',    
    templateUrl:'./moduleblock.component.html',    
    styleUrls:['./moduleblock.component.css']    
})

export class ModuleBlock {
    @Input() name?: string;
    @Input() description?: string;
    @Input() img_ref?: string;

    showBase = true;
    constructor(private modalService: NgbModal) { }

    open(content: any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    }
}