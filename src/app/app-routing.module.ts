import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LandlordComponent} from './User/landlord/landlord.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'account', component: LandlordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
