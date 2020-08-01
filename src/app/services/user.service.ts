import { Injectable } from '@angular/core';
import {IUser} from "../interface/iuser";

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
  constructor() { }

  getUserList(){
    return this.users;
  }
}
