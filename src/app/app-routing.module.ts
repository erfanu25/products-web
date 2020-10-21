import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { UserListComponent } from './user-list/user-list.component';
import {ProductComponent} from './products/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'updateUser/:id', component: RegisterComponent },
  { path: 'createProduct', component: ProductComponent },
  { path: 'updateProduct/:id', component: ProductComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: ProductListComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'userList', component: UserListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
