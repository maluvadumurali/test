import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  template: `
    <h2>Welcome {{ name }}</h2>
    <input [id]="myId" type="text" value="Dixit" />
    <input [disabled]="isDisabled" type="text" value="Dixit" />
    <input bind-disabled="isDisabled" type="text" value="Dixit" />
  `,
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  public name = "Dixit";
  public myId = "testId";
  public isDisabled = false;

  public siteUrl = window.location.href;
  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return "Hello " + this.name;
  }
}
