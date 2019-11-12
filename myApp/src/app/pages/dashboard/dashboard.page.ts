import { Component, OnInit } from "@angular/core";
import { ListItem } from "src/app/shared-components/list/list.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  public students: Array<ListItem> = new Array<ListItem>();
  sexToShow = "m";
  constructor() {
    this.students.push(new ListItem("Alex", 23, "m"));
    this.students.push(new ListItem("Alexandra", 23, "f"));
    this.students.push(new ListItem("Vlad", 25, "m"));
    this.students.push(new ListItem("Maria", 23, "f"));
    this.students.push(new ListItem("Alice", 27, "f"));
  }

  ngOnInit() {}
}
