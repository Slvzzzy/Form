import {AbstractControl, AbstractControlOptions, ValidationErrors, ValidatorFn} from '@angular/forms'

export class MyValidators {
  confirmPassword: ValidatorFn = (registerForm: AbstractControl):  ValidationErrors | null => {
    // @ts-ignore
    let pass = registerForm.get('password').value;

    // @ts-ignore
    let confirmPass = registerForm.get('passwordRepeat').value
      console.log(registerForm, pass === confirmPass ? null : { notSame: true })
    return pass === confirmPass ? null : { notSame: true }
  }
  static confirmPassword: AbstractControlOptions | ValidatorFn | ValidatorFn[] | null | undefined;
}


