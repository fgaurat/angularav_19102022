import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestZoneComponent } from './test-zone/test-zone.component';
import { TestChangeDetectorComponent } from './test-change-detector/test-change-detector.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestZoneComponent,
    TestChangeDetectorComponent,
    ParentCompComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
