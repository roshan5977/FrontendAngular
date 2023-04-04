import { AddUserComponent } from './darkworld/addUser.component';
import { DarkWorldModule } from './darkworld/darkworld.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DarkWorldComponent } from './darkworld/darkworld.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './darkworld/UserDetails.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DarkWorldModule,
    RouterModule.forRoot([
      {
        path:"darkWorld",component:DarkWorldComponent
     },
      {
        path:"add",component:AddUserComponent
     },
     {
       path:"details/:id",component:UserDetailsComponent
     },
     {
      path:"**",redirectTo:"/darkWorld"
   }
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
