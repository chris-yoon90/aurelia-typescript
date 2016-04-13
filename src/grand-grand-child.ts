import {autoinject} from 'aurelia-dependency-injection';
import { App } from './app';

@autoinject
export class GrandGrandChild {
    message: string;
    store: Redux.Store;
    
    constructor(appParent: App) {
        this.message = 'I grand grand child';
        this.store = appParent.store;
    }
    
    changeMessage() {
        this.store.dispatch({ type: 'CHANGE_MESSAGE', message: "I'm changed!" });
    }
}