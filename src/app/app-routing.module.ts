import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {RetailComponent} from './retail/retail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },    
{path:'home-page',component:HomePageComponent},
{path:'retail',component:RetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomePageComponent,RetailComponent]

