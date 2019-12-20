import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/model/student.model";
import { ApiService } from "src/app/api/api.service";
import { Product } from "src/app/model/product.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  public students: Array<Student> = new Array<Student>();
  public products: Array<Product> = [];
  sexToShow = "m";

  constructor(private apiService: ApiService) {
    this.students.push(new Student("Alex", 16, "m"));
    this.students.push(new Student("Vlad", 25, "m"));
    this.students.push(new Student("Alexandra", 23, "f"));
    this.students.push(new Student("Maria", 23, "f"));
    this.students.push(new Student("Alice", 15, "f"));
  }

  ngOnInit() {
    this.apiService.getAllProducts().subscribe(apiProducts => {
      for (let prod of apiProducts) {
        this.products.push(new Product(prod.name, prod.description, prod.id));
      }
    });
  }
}
