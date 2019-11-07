import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class SharedComponentsModule {}
