import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { nameValidator } from "./validators/name.validator";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      reg_no: ["", [Validators.required]],
      name: [
        "",
        [
          Validators.required,
          nameValidator.cannotContainSpace,
          nameValidator.minimumLength
        ]
      ],
      email: ["", [Validators.required, nameValidator.checkPattern]],
      bday: ["", [Validators.required, nameValidator.checkBdayDate]],
      gender: ["", Validators.required],
      hobbies: ["", Validators.required],
      password: ["", [Validators.required, nameValidator.checkPassword]],
      accept: ["", Validators.required]
    });
  }
  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit() {}
}
