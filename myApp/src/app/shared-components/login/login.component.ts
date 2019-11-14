import { Component, OnInit } from "@angular/core";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  myColor = "#777777";
  buttonClass = "btn-outline-primary";

  constructor() {}

  ngOnInit() {}
}
