import 'babel-polyfill';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot());
}

async function main() {
    await ping();
}

async function ping() {
    for (var i = 0; i < 10; i++) {
        await delay(1000);
        console.log("ping");
    }
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

main();