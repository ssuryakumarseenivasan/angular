import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutAsComponent } from './about-as/about-as.component';
import { ContectComponent } from './contect/contect.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
const routes: Routes = [{ path: "HomeComponent", component: HomeComponent }, {
  path: "AboutAsComponent", component: AboutAsComponent},
{ path: "ContectComponent", component: ContectComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule {

}