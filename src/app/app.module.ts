import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RotinaComponent } from './rotina/rotina.component';
import { CardRotinaComponent } from './components/card-rotina/card-rotina.component';
import { CardListComponent } from './components/card-list/card-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { ExercicioCardComponent } from './exercicio-card/exercicio-card.component';
import { TransformExercicioPipePipe } from './pipe/transform-exercicio-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddExercicioCardComponent } from './components/add-exercicio-card/add-exercicio-card.component'
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    LoginComponent,
    HomeComponent,
    RotinaComponent,
    CardRotinaComponent,
    CardListComponent,
    LeftComponent,
    RightComponent,
    ExercicioCardComponent,
    TransformExercicioPipePipe,
    AddExercicioCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
