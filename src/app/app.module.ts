import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantaModule } from './planta/planta.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PlantaModule,
    HttpClientModule
  ],
  providers: [ provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
