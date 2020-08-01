import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interface/iuser";
import {UserService} from "../../services/user.service";
import {IGroup} from "../../interface/igroup";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
  groups: IGroup[] = [];

  constructor(private userService: UserService,
      private groupService: GroupService ) {
    this.getAllUser();
  }

  getAllUser(){
    this.users = this.userService.getUserList();
    this.groups = this.groupService.getAllGroup();
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    let userDelete: IUser[] = [];
    this.users.map(
      user => {
        if(user.id != id) {
          userDelete.push(user);
        }
      }
    );
    this.users = userDelete;
  }

  search(event) {
    let keyword = event;
    this.users = (keyword) ? this.filterByKeyword(keyword) : this.userService.getUserList();
  }

  filterByKeyword(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) != -1;
    });
  }

}
