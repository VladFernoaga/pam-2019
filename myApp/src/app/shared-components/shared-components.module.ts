import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ListComponent, LoginComponent],
  exports: [ListComponent, LoginComponent]
})
export class SharedComponentsModule {}
