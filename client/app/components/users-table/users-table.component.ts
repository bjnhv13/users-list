import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users: User[];
  editIndexes: boolean[];
  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.users = this.usersService.getUsers().concat({_id:null, username:"",privileges:[""],description:""});
    this.editIndexes = new Array(this.users.length - 1).fill(false).concat(true);
  }

  toggleEdit(index: number, user: User) {
    if (user) {
      console.log(user);
      this.usersService.updateUser(user).subscribe( result => console.log(result) )
    }
    this.editIndexes[index] = !this.editIndexes[index];
  }

}
