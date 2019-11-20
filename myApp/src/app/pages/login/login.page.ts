import { Component, OnInit } from "@angular/core";
import { LoginMsg } from "src/app/shared-components/login/login.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLoginSucceed($event: LoginMsg) {
    switch ($event) {
      case LoginMsg.SUCCESS:
        this.router.navigate(["/dashboard"]);
        break;
      default:
        console.log("Error while login");
    }
  }
}
