import { createStore }  from 'redux';
import reducer from './reducer';

export class App {
    firstName: string;
    lastName: string;
    store: Redux.Store;
    
    constructor() {
        this.firstName = 'Chris';
        this.lastName = 'Yoon';
        this.store = createStore(reducer);
    }
    
    sayHello() {
        alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
    }
}