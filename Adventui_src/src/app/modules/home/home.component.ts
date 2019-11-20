import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery().bindTreeEvents();
  }

}
