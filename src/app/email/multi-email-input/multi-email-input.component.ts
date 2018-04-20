import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sm-multi-email-input',
  templateUrl: './multi-email-input.component.html',
  styleUrls: ['./multi-email-input.component.scss']
})
export class MultiEmailInputComponent implements OnInit {
  @Input() id: string;
  @Input() isRequired: boolean;
  @Output() onUpdate = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
}
