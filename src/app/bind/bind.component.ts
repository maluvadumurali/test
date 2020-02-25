import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bind",
  template: `
    <h2>Welcome {{ name }}</h2>

    <input type="text" />
    <button>Log</button>
  `,
  styles: [``]
})
export class BindComponent implements OnInit {
  public name = "Dixit";
  constructor() {}

  ngOnInit(): void {}
}
