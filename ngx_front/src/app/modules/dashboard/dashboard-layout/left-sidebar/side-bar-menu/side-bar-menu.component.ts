import { Component, OnInit } from '@angular/core';

export enum MENU_LEVEL{
  MAIN_MENU,
  ADMIN_MENU
}
@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss']
})
export class SideBarMenuComponent implements OnInit {
  menuLevel=MENU_LEVEL;
  menuIndex:MENU_LEVEL=MENU_LEVEL.MAIN_MENU;
  constructor() { }

  ngOnInit(): void {
  }

}
