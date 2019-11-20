import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup
} from "@angular/forms";

export enum LoginMsg {
  SUCCESS = "success",
  FAILED = "failed"
}
@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @Output()
  loginSucceed: EventEmitter<LoginMsg> = new EventEmitter();

  myColor = "#777777";
  buttonClass = "btn-outline-primary";

  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  constructor(private formBuilder: FormBuilder) {}

  onLogin(formValues: any) {
    if (this.loginForm.valid) {
      if (formValues.email === "ana@co.ro" && formValues.password === "123") {
        // login success
        console.log("Login success");
        this.loginSucceed.emit(LoginMsg.SUCCESS);
      } else {
        console.log("Login fail");
        this.loginSucceed.emit(LoginMsg.FAILED);
        // fail
      }
    } else {
      console.log("Form is not valid");
    }
  }

  ngOnInit() {}
}
