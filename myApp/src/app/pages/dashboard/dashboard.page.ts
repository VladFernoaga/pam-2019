import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/model/student.model";
import { ApiService } from "src/app/api/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  public students: Array<Student> = new Array<Student>();
  sexToShow = "m";

  constructor(private apiService: ApiService) {
    this.students.push(new Student("Alex", 16, "m"));
    this.students.push(new Student("Vlad", 25, "m"));
    this.students.push(new Student("Alexandra", 23, "f"));
    this.students.push(new Student("Maria", 23, "f"));
    this.students.push(new Student("Alice", 15, "f"));
  }

  ngOnInit() {
    this.apiService.getAllProducts().subscribe(res => {
      console.log(res);
    });
  }
}
