import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-generic-message',
  templateUrl: './generic-message.component.html',
  styleUrls: ['./generic-message.component.css']
})
export class GenericMessageComponent implements OnInit {
  @Output() dismiss: EventEmitter<void> = new EventEmitter();
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.dismiss.emit();
  }
}
