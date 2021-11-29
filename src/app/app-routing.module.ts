import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { HomeComponent } from './home/home.component';
import { LeftComponent } from './left/left.component';
import { LoginComponent } from './login/login.component';
import { RightComponent } from './right/right.component';
import { RotinaComponent } from './rotina/rotina.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent, 
    children:[
      {path:'rotina', component: RotinaComponent, data:{ animation: 'isLeft' }},
      {path:'cards', component: CardListComponent, data:{ animation: 'isRight' }}
    ], data:{ animation: 'isLeft' }},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'right', component:RightComponent, data:{ animation: 'isRight' }},
  {path:'left', component:LeftComponent, data:{ animation: 'isLeft' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
