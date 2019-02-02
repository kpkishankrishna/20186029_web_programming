import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KpComponent } from './kp/kp.component';
import { InputFormComponent } from './input-form/input-form.component';
import { GameComponent } from './game/game.component';
import { ScoresheetComponent } from './scoresheet/scoresheet.component';

@NgModule({
  declarations: [
    AppComponent,
    KpComponent,
    InputFormComponent,
    GameComponent,
    ScoresheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
