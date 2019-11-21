import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/model/student.model";
import { DashboardPage } from "../dashboard/dashboard.page";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  public students: Array<Student> = new Array<Student>();
  sexToShow = "f";
  constructor() {
    this.students.push(new Student("Alex", 23, "m"));
    this.students.push(new Student("Alexandra", 23, "f"));
    this.students.push(new Student("Vlad", 25, "m"));
    this.students.push(new Student("Maria", 23, "f"));
    this.students.push(new Student("Alice", 27, "f"));
  }

  ngOnInit() {}
}
