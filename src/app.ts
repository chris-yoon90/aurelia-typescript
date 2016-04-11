export class App {
    firstName: string = "Chris";
    lastName: string = "Yoon";
    
    sayHello() {
        alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
    }
}