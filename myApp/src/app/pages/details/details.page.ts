import { Component, OnInit } from "@angular/core";
import { ListItem } from "src/app/shared-components/list/list.model";
import { DashboardPage } from "../dashboard/dashboard.page";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  public students: Array<ListItem> = new Array<ListItem>();
  sexToShow = "f";
  constructor() {
    this.students.push(new ListItem("Alex", 23, "m"));
    this.students.push(new ListItem("Alexandra", 23, "f"));
    this.students.push(new ListItem("Vlad", 25, "m"));
    this.students.push(new ListItem("Maria", 23, "f"));
    this.students.push(new ListItem("Alice", 27, "f"));
  }

  ngOnInit() {}
}
