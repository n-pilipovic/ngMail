import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { InputText } from 'primeng/primeng';

let menu = [
  { path: 'New', name: 'New' },
  { path: 'Inbox', name: 'Inbox' },
  { path: 'Sent', name: 'Sent' },
  { path: 'Drafts', name: 'Drafts' }
]

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives: [ROUTER_DIRECTIVES, InputText]
})
export class MenuComponent implements OnInit {

  public items: Array<Object>;

  constructor() { }

  ngOnInit() {
    this.items = menu;
  }

}
