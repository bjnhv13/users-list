import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'http://localhost:3000/api/';
  private usersList: User[] = [];

  constructor(private http: HttpClient) { }

  public fetchUsers(): void {
    console.log('fetching...');
    this.http.get<any>(`${this.usersUrl}users`)
      .subscribe(data => this.usersList = data.details.sort((a, b) => { // sort by username
        if (a.username.toUpperCase() > b.username.toUpperCase()) {
          return 1;
        } else {
          return -1;
        }
    }));
  }

  public getUsers(): User[] {
    return this.usersList;
  }
  public updateUser(updatedUser: User): Observable<any> {
    console.log(updatedUser);
    
    // updatedUser.privileges = updatedUser.privileges.
    return this.http.post(`${this.usersUrl}user`, updatedUser  );
  }
}
