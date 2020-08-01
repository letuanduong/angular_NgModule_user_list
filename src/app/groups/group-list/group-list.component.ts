import {Component, Input, OnInit} from '@angular/core';
import {IGroup} from "../../interface/igroup";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  groups: IGroup[] = [];

  getAllGroup(){
    this.groups = this.groupService.getAllGroup();
  }
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getAllGroup();
  }

}
