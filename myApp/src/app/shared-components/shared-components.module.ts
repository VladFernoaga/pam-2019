import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CardsComponent } from "./cards/cards.component";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ListComponent, LoginComponent, CardsComponent],
  exports: [ListComponent, LoginComponent, CardsComponent]
})
export class SharedComponentsModule {}
