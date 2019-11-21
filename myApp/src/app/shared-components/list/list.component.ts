import { Component, Input } from "@angular/core";
import { Student } from "../../model/student.model";

@Component({
  selector: "list",
  templateUrl: "list.component.html"
})
export class ListComponent {
  @Input()
  public listItems: Array<Student>;
  @Input()
  public sexToShow: string;

  listTitle = `My fancy list name`;

  nr1 = 23;
  nr2 = 17;

  sum(nr1, nr2) {
    return nr1 + nr2;
  }

  getListDetails() {
    return "This are just details";
  }
  constructor() {}
}
