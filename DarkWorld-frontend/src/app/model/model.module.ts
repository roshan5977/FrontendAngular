import { UserRepository } from './user.repository';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RestDataSource } from './rest.datasource';



@NgModule({
  imports: [HttpClientModule],
  providers: [RestDataSource,UserRepository],
})
export class ModelModule { }
