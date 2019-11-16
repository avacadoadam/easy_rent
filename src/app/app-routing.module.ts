import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {LandlordComponent} from './User/landlord/landlord.component';
import {ChooseAccountTypeComponent} from './Register/choose-account-type/choose-account-type.component';
import {TenantInformationComponent} from './Register/tenant-information/tenant-information.component';
import {TestComponent} from './test/test.component';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'register', component: ChooseAccountTypeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'tenantRegisterProcess', component: TenantInformationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
