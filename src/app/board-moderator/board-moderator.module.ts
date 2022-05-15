import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmpolyeeComponent } from './add-empolyee/add-empolyee.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ReclamComponent } from './reclam/reclam.component';



@NgModule({
  declarations: [AddEmpolyeeComponent, AddRoleComponent, ReclamComponent],
  imports: [
    CommonModule
  ]
})
export class BoardModeratorModule { }
