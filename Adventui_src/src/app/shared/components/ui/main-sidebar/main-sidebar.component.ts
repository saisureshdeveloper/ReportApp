import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { menuLabels } from './main-sidebar.constant';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {

  menuLabels: Array<any> = menuLabels;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }  

  private menuClick( obj: any ) {
    this.menuLabels.map(val => {
      val.activeClass = false;
    });
    obj.activeClass = true;
    this.router.navigate([obj.route]);
  }

}
