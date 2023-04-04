import { User } from './../model/user.model';
import { UserRepository } from './../model/user.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dark-world',
  templateUrl: 'darkworld.component.html'
})

export class DarkWorldComponent implements OnInit {
  // users: User[]=[];
  constructor(private repo:UserRepository) { }

  get users():User[]{
  return this.repo.getAllUser()
  }


  ngOnInit() { }
}
