import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {confirmedValidator} from "./MyValidators";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  hide = true;
  registerForm! : FormGroup;

  ngOnInit() {
      this.registerForm = new FormGroup({
          login: new FormControl('', [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(30)] ),
          password: new FormControl(null, [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(30)]),
          passwordRepeat: new FormControl(null, [
              Validators.required,
          ])

      }, confirmedValidator('password', 'passwordRepeat'))
  }
  submit() {
    console.log('Form:', this.registerForm)
    console.log('UserInfo:', this.registerForm.getRawValue())
  }
  getAuthErrorMessage(fieldName: string) {
    console.log('form', this.registerForm.get(fieldName))
    if (this.registerForm.get(fieldName)?.hasError('required')) {
      return `Поле пустое`;
    }
    if (this.registerForm.get(fieldName)?.hasError('minlength')) {
      return `${fieldName} слишком короткий`;
    }
    if (this.registerForm.get(fieldName)?.hasError('maxlength')) {
      return `${fieldName} слишком длинный`;
    }
    return
  }
  getFormControl(controlName: string): FormControl {
    return this.registerForm.get(controlName) as FormControl
  }

}
