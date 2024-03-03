import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/app.component';


const routes: Routes =[
  { path: '' , component:LoginComponent },
  { path: 'first' , component: FirstComponent },
  { path: 'register', component:RegisterComponent},
]
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }) ],
  exports: [RouterModule],
})
export class AppRoutingModule {

 };
