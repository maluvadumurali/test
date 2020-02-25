import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { BindComponent } from './bind/bind.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent, TestComponent, ClassbindingComponent, BindComponent, ChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
