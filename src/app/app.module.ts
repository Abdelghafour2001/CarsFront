import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {GarageService} from "./garage.service"
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [GarageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
