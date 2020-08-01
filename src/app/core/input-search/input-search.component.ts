import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Input()
  messageInputSearch_userList: string;
  @Input()
  messageInputSearch_groupList: string;

  @Output()
  keyWord: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  getKeyWord(event){
    console.log(event);
    let value = event.target.value;
    this.keyWord.emit(value);
  }
}
