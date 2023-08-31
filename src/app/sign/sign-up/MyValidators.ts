import {FormControl} from '@angular/forms'

export class MyValidators {
  static control: FormControl;
  static confirmPassword(): {[key: string]: boolean} {
    const pass = this.control.get('password')?.value;
    const confirmPass = this.control.get('passwordRepeat')?.value;
    // @ts-ignore
    return pass === confirmPass ? null : { confirmPass: true }

  }
}


