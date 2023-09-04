import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./MyValidators";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  hide = true;
  registerForm! : FormGroup;

  ngOnInit() {

    // @ts-ignore
      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
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
        Validators.minLength(6),
        Validators.maxLength(30),
      ])

    },
          // @ts-ignore
          this.ConfirmedValidator('password', 'passwordRepeat') )
  }
    ConfirmedValidator(password: string, passwordRepeat: string) {
        return (formGroup: any) => {
            const control = formGroup.controls[password];
            const matchingControl = formGroup.controls[passwordRepeat];
            if (

                matchingControl.errors &&
                // @ts-ignore
                !matchingControl.errors.confirmedValidator
            ) {
                return;
            }
            console.log(formGroup)
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }
  submit() {
    console.log('Form:', this.registerForm)
    console.log('UserInfo:', this.registerForm.getRawValue())
  }
  getAuthErrorMessage(fieldName: string) {
    console.log('form', this.registerForm.get(fieldName))
    if (this.registerForm.get(fieldName)?.hasError('required')) {
      return `Поле ${fieldName} пустое`;
    }
    if (this.registerForm.get(fieldName)?.hasError('minlength')) {
      return `${fieldName} слишком короткий`;
    }
    if (this.registerForm.get(fieldName)?.hasError('maxlength')) {
      return `${fieldName} слишком длинный`;
    }

    return 'error'
  }
  getFormControl(controlName: string): FormControl {
    return this.registerForm.get(controlName) as FormControl
  }

}
