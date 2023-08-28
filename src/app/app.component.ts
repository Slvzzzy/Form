import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  hide = true;
  form! : FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)] ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)])
    })
  }


  submit() {
    console.log('Form:', this.form)
    console.log('UserInfo:', this.form.getRawValue())

  }
  getErrorLoginMessage() {

    if (this.form.get('login')?.hasError('required')) {
      return 'Поле login пустое';
    }
    if (this.form.get('login')?.hasError('minLength')) {
      return 'Логин слишком короткий';
    }
    if (this.form.get('login')?.hasError('maxLength')) {
      return 'Логин слишком длинный';
    }
    return 'error'
  }

  getErrorPasswordMessage() {
    return 'error'
  }
}
