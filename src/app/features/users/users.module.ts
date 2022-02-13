import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserAvatorComponent } from './components/user-avator/user-avator.component';
import { BlogsModule } from '../blogs/blogs.module';



@NgModule({
  declarations: [
    UserCreateComponent,
    UserDetailsComponent,
    UserListComponent,
    UserListItemComponent,
    UserAvatorComponent
  ],
  imports: [
    CommonModule,
    BlogsModule
  ]
})
export class UsersModule { }
