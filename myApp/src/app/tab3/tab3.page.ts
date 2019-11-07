import { Component } from "@angular/core";
import { ListItem } from "../shared-components/list/list.model";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  public students: Array<ListItem> = new Array<ListItem>();
  sexToShow = "m";
  constructor() {
    this.students.push(new ListItem("Alex", 23, "m"));
    this.students.push(new ListItem("Alexandra", 23, "f"));
    this.students.push(new ListItem("Vlad", 25, "m"));
    this.students.push(new ListItem("Maria", 23, "f"));
    this.students.push(new ListItem("Alice", 27, "f"));
  }
}
