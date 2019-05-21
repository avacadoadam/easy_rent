import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatSidenavModule} from '@angular/material';
import { RentListingsComponent } from './rent-listings/rent-listings.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListPropertyComponent } from './list-property/list-property.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LandlordComponent } from './User/landlord/landlord.component';
import {MatStepperModule} from '@angular/material/stepper';
import { RegisterLandlordComponent } from './Register/register-landlord/register-landlord.component';
import { ChooseAccountTypeComponent } from './Register/choose-account-type/choose-account-type.component';
import { EmailRegisterComponent } from './Register/registerProcess/email-register/email-register.component';
import {MatBadgeModule} from '@angular/material/badge';
import {RegisterTenantComponent} from './Register/register-tenant/register-tenant.component';
import { CardsComponent } from './cards/cards.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentListingsComponent,
    SearchBarComponent,
    HomePageComponent,
    ListPropertyComponent,
    LandlordComponent,
    RegisterTenantComponent,
    RegisterLandlordComponent,
    ChooseAccountTypeComponent,
    EmailRegisterComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatPaginatorModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatIconModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
