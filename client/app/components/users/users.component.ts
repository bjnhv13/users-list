import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  tableOpen: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.fetchUsers();
   }

  toggleTable() {
    this.tableOpen = !this.tableOpen;
  }

}
