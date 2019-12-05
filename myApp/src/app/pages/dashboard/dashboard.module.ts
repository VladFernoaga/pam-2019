import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ApiModule } from "src/app/api/api.module";
import { SharedComponentsModule } from "src/app/shared-components/shared-components.module";
import { DashboardPage } from "./dashboard.page";

const routes: Routes = [
  {
    path: "",
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    ApiModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
