import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http'
import { NgModule } from '@angular/core';

import { Inject, OpaqueToken } from '@angular/core'
import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';

import { jsonLoader } from './components/jsonLoader/jsonLoader.component';
//import { Comp2Component } from './comp2/comp2.component';
//import { Comp3Component } from './comp3/comp3.component';

import {Container} from './container';

export const BOOTSTRAP_COMPONENTS_TOKEN = new OpaqueToken('bootstrap_components');

export class MyContainer {
  container = new Container();

  constructor() {
    // Register our components
    this.container.register('jsonLoader', jsonLoader);
    //this.container.register('comp2', Comp2Component);
    //this.container.register('comp3', Comp3Component);
  }
}


@NgModule({
  imports: [
    BrowserModule, HttpModule
  ],
  declarations: [
    jsonLoader,
    //Comp2Component,
   // Comp3Component,
  ],
  entryComponents: [
    jsonLoader,
   // Comp2Component,
    //Comp3Component,
  ]
})
export class AppModule {

  constructor(
      private resolver : ComponentFactoryResolver
  ) {}

  ngDoBootstrap(): void {}
}
