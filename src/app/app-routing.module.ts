import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AddEmpolyeeComponent } from './board-moderator/add-empolyee/add-empolyee.component';
import { AddRoleComponent } from './board-moderator/add-role/add-role.component';
import { ReclamComponent } from './board-moderator/reclam/reclam.component';
import { StatComponent } from './stat/stat.component';
import { BoardFpComponent } from './board-fp/board-fp.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent},
  {path: 'stat', component: StatComponent},
  { path: 'mod', component: BoardModeratorComponent,children: [
    {path: 'add', component: AddEmpolyeeComponent},
    {path: 'add-role', component: AddRoleComponent},
    {path: 'recla', component: ReclamComponent},
  ] },
  { path: 'admin', component: BoardAdminComponent, },
  { path: 'fp', component: BoardFpComponent, },



  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
