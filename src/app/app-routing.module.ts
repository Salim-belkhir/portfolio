import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./components/about/about.component";


const routes = [
  {path : '', component : HomeComponent},
  {path : 'about', component: AboutComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
