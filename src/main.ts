import 'babel-polyfill';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot());
}