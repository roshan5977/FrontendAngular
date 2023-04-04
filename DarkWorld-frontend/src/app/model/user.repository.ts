import { RestDataSource } from './rest.datasource';
import { Injectable } from "@angular/core";
import { User } from './user.model';
import { Observable } from 'rxjs';


@Injectable()
export class UserRepository{

  users:User[]=[];

  constructor(private dataSource:RestDataSource){
  dataSource.getAllUser().subscribe(data=>{
  this.users=data;})
  }

  saveUser(user:User):Observable<User>{
  return this.dataSource.saveUser(user);
  }

  getAllUser(){
  return this.users;
  }

}
