import { Injectable } from '@angular/core';
import {IUser} from "../interface/iuser";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 1
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },
    {
      id: 1,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 1
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },
    {
      id: 4,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 5,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 1
    },
    {
      id: 6,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },
    {
      id: 7,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 8,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 1
    },
    {
      id: 9,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    },
    {
      id: 10,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 11,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 1
    },
    {
      id: 12,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    }
  ];



  constructor(private http: HttpClient) { }

  // -------------------------------------------------------------

  private readonly API_URL = 'http://localhost:8080/users' ;
  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.API_URL);
  }

  getUser(id: number): Observable<IUser>{
    const url = `${this.API_URL}/${id}`;
    return this.http.get<IUser>(url);
  }

  updateUser(user: IUser): Observable<IUser> {
    const url =  `${this.API_URL}/${user.id}`;
    return this.http.put<IUser>(url, user, this.httpOptions);
  }

  deleteUser(id: number): Observable<{}>  {
    const url =  `${this.API_URL}/${id}`;
    return this.http.delete<IUser>(url, this.httpOptions);
  }

  addUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.API_URL, user, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // -----------------------------------------------------------

  getUserList(){
    return this.users;
  }

  add(user: IUser) {
    this.users.push(user);
  }

  findById(id: number) : IUser{
    let index =  this.getIndexUser(id);
    return this.users[index];
  }

  edit(id: number, data: IUser) {
    let index =  this.getIndexUser(id);
    this.users[index].name = data.name;
    this.users[index].email = data.email;
    this.users[index].group_id = data.group_id;
  }

  getIndexUser(id: number) {
    for (let i=0; i< this.users.length; i++) {
      if (this.users[i].id === id) {
        return i;
      }
    }
  }

}
