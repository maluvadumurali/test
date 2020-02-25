import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-classbinding",
  template: `
    <h2>welcome {{ name }}</h2>
    <h2 class="text-success">Dixit</h2>
    <h2 [class]="successClass">Dixit</h2>

    <h2 class="text-special" [class]="successClass">Dixit</h2>

    <h2 [class.text-danger]="hasError">Dixit</h2>

    <h2 [ngClass]="messageClasses">Dixit</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `
  ]
})
export class ClassbindingComponent implements OnInit {
  public name = "Dixit";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };

  constructor() {}

  ngOnInit(): void {}
}
