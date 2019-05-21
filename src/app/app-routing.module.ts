import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {LandlordComponent} from './User/landlord/landlord.component';
import {RegisterTenantComponent} from './Register/register-tenant/register-tenant.component';
import {RegisterLandlordComponent} from './Register/register-landlord/register-landlord.component';
import {ChooseAccountTypeComponent} from './Register/choose-account-type/choose-account-type.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'register', component: ChooseAccountTypeComponent},
  {path: 'account', component: LandlordComponent},
  {path: 'register/Landlord', component: RegisterLandlordComponent},
  {path: 'register/Tenant', component: RegisterTenantComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
