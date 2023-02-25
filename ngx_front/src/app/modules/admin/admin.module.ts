import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserByIdComponent } from './admin/user-list/user-by-id/user-by-id.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    UserByIdComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AdminModule { }
