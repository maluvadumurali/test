import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <h2>{{ "Hello " + name }}</h2>
    <button (click)="fireEvent()">send Event</button>
  `,

  styles: [``]
})
export class ChildComponent implements OnInit {
  @Input("masterData") public name;
  @Output() public childEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {
    //this.childEvent.emit("Dixit is my Kid");
  }

  fireEvent() {
    this.childEvent.emit("Dixit is my Kid");
  }
}
