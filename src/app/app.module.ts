import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
