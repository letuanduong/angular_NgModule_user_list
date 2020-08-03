import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interface/iuser";

@Component({
  selector: 'app-user-server',
  templateUrl: './user-server.component.html',
  styleUrls: ['./user-server.component.css']
})
export class UserServerComponent implements OnInit {

  users: IUser[] = [];

  user: IUser;

  userTest: IUser = {
    id: 5,
    name: 'tuan',
    email: 'tuan@gmail',
    group_id: 1
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    // this.getUser(2);
    // this.addUser(this.userTest);
    // this.updateUser(1);
  }

  // -----------------------------------------------------------------------

  getUsers(){
    this.userService.getUsers()   //return mang phan tu trong obserable
      .subscribe(user_list => {
        this.users = user_list;
        console.log(user_list);
      } );
  }

  getUser(id: number) {
    this.userService.getUser(id)   //return 1 phan tu trong mang observable
      .subscribe(user_simple =>{
        this.user = user_simple;
        console.log(user_simple);
      });
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe();
    this.getUsers();
  }

  addUser(user: IUser){
    console.log(this.userTest);
    this.userService.addUser(user).subscribe();
  }

  updateUser(id: number) {
    this.userService.updateUser(this.userTest).subscribe();
  }

}
