import {bindable} from 'aurelia-framework';

export class ChildComponent {
    
    @bindable name: string = null;
    message: string = "I'm child";
}