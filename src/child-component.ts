import {bindable} from 'aurelia-framework';
import {autoinject} from 'aurelia-dependency-injection';
import { App } from './app';

@autoinject
export class ChildComponent {
    private store: Redux.Store
    @bindable name: string = null;
    message: string = "I'm child";
    
    constructor(appParent: App) {
        this.store = appParent.store;
        this.store.subscribe(() =>{
           this.message = this.store.getState().message 
        });
    }
}