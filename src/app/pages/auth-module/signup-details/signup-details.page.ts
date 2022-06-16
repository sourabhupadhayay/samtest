import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { format, parseISO, getDate, getMonth, getYear } from "date-fns";

@Component({
  selector: "app-signup-details",
  templateUrl: "./signup-details.page.html",
  styleUrls: ["./signup-details.page.scss"],
})
export class SignupDetailsPage implements OnInit {
  signUpDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpDetailsForm = this.formBuilder.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, Validators.required],
      birthDate: [null, Validators.required],
      phone: [null],
      teamName: [null],
      teamState: [null],
      school: [null],
    });
  }

  formatDate(value: string) {
    return format(parseISO(value), "MM/dd/yyyy");
  }

  patchDateValue(date: string) {
    let formattedDate = this.formatDate(date);
    this.signUpDetailsForm.controls.birthDate.patchValue(formattedDate);

    console.log(new Date(formattedDate));
  }

  onSubmit() {
    console.log(this.signUpDetailsForm);
  }
}
