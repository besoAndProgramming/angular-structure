import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './app-primary-button.component.html',
  styleUrls: ['./app-primary-button.component.scss']
})
export class AppPrimaryButtonComponent implements OnInit {

  @Input() id: number = 0;
  @Output() onClickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
