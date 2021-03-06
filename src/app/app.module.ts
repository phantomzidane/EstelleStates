import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { BodyComponent } from './home/body/body.component';
import { ServicesComponent } from './home/services/services.component';
import { ChooseComponent } from './home/choose/choose.component';
import { FeaturesComponent } from './home/features/features.component';
import { AgentComponent } from './home/agent/agent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { CountdownComponent } from './home/countdown/countdown.component';
import { FooterComponent } from './footer/footer.component';
import { SpaceComponent } from './space/space.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyComponent } from './properties/property/property.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    ServicesComponent,
    ChooseComponent,
    FeaturesComponent,
    AgentComponent,
    NavbarComponent,
    MainComponent,
    CountdownComponent,
    FooterComponent,
    SpaceComponent,
    PropertiesComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:MainComponent},
      {path:'main', component:MainComponent},
      {path:'properties', component:PropertiesComponent},
      {path: 'property/:id',component:PropertyComponent},   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
