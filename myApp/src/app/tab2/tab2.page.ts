import { Component } from "@angular/core";
import { ListItem } from "../shared-components/list/list.model";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  public students: Array<ListItem> = new Array<ListItem>();
  sexToShow = "f";
  constructor() {
    this.students.push(new ListItem("Alex", 23, "m"));
    this.students.push(new ListItem("Alexandra", 23, "f"));
    this.students.push(new ListItem("Vlad", 25, "m"));
    this.students.push(new ListItem("Maria", 23, "f"));
    this.students.push(new ListItem("Alice", 27, "f"));
  }
}
