import { Component, OnInit } from '@angular/core';
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
  constructor(
    private userService: UserService,
    private groupService: GroupService         ) {
    this.getAllUser();
  }

  getAllUser(){
    this.users = this.userService.getUserList();
    this.groups = this.groupService.getAllGroup();
  }

  getAllGroup(){
    this
  }

  ngOnInit(): void {
  }

}
