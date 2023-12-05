import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ApicryptoComponent} from './components/widget/apicrypto/apicrypto.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {AnonymousComponent} from './components/role/anonymous/anonymous.component';
import {UserComponent} from './components/role/user/user.component';
import {AdministratorComponent} from './components/role/administrator/administrator.component';
import {PressComponent} from './components/widget/articles/press.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FavArticlesComponent} from './components/widget/favorites/fav-articles/fav-articles.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatChipsModule} from "@angular/material/chips";
import {RegisterComponent} from './components/authentication/register/register.component';
import {LoginComponent} from './components/authentication/login/login.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatCardModule} from "@angular/material/card";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {UserManagementComponent} from "./components/role/administrator/user-management/user-management.component";
import {AdminDashboardComponent} from "./components/role/administrator/admin-dashboard/admin-dashboard.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidenavComponent} from './components/role/administrator/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnonymousComponent,
    UserComponent,
    AdministratorComponent,
    ApicryptoComponent,
    RegisterComponent,
    LoginComponent,
    PressComponent,
    FavArticlesComponent,
    NavbarComponent,
    UserManagementComponent,
    AdminDashboardComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    DatePipe,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    CdkDropList,
    CdkDrag,
    MatToolbarModule,
    RouterModule,
    CdkDropList,
    CdkDrag,
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
