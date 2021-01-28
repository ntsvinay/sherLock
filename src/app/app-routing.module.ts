import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {RetailComponent} from './retail/retail.component';
import {AutomotiveComponent} from './automotive/automotive.component';
const routes: Routes = [
{ path: '', redirectTo: 'home-page', pathMatch: 'full' },    
{path:'home-page',component:HomePageComponent},
{path:'retail',component:RetailComponent},
{path:'automotive',component:AutomotiveComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomePageComponent,RetailComponent,AutomotiveComponent]
