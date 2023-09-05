import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const confirmedValidator = (password: string, passwordRepeat: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const passControl = control.get(password);
    const confirmControl = control.get(passwordRepeat);

    return passControl && confirmControl && passControl.value !== confirmControl.value
        ? {mismatch: true }
        : null;
  };
}

