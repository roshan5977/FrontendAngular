import { UserDetailsComponent } from './UserDetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './../model/model.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './addUser.component';
import { DarkWorldComponent } from './darkworld.component';


// let routing=RouterModule.forChild([
//   {
//     path:"darkWorld",component:DarkWorldComponent,
//     children: [
//     {
//         path:"add",component:AddUserComponent
//      },
//      {
//         path:"show",component:ShowUserComponent
//      },
//      {
//        path:"details/:id",component:UserDetailsComponent
//      }
//     ]
//   },
//   {
//      path:"**",redirectTo:"darkWorld"
//   }
// ])

@NgModule({
  imports: [ModelModule,BrowserModule,FormsModule,RouterModule],
  exports: [DarkWorldComponent,AddUserComponent,UserDetailsComponent],
  declarations: [DarkWorldComponent,AddUserComponent,UserDetailsComponent]
})
export class DarkWorldModule { }
