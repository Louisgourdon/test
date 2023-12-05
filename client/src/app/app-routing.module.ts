import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

import {ApicryptoComponent} from "./components/widget/apicrypto/apicrypto.component";
import {UserComponent} from "./components/role/user/user.component";
import {AdministratorComponent} from "./components/role/administrator/administrator.component";
import {AnonymousComponent} from "./components/role/anonymous/anonymous.component";
import {PressComponent} from "./components/widget/articles/press.component";
import {FavArticlesComponent} from "./components/widget/favorites/fav-articles/fav-articles.component";
import {LoginComponent} from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdministratorComponent },
  { path: 'anonymous', component: AnonymousComponent },
  { path: 'apicrypto', component: ApicryptoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'press', component: PressComponent },
  { path: 'fav-articles', component: FavArticlesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
