import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  hide = true;
  form! : FormGroup
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

  protected readonly onsubmit = onsubmit;

  submit() {
    console.log('Form:', this.form)
    const UserData={...this.form.value}
    console.log('UserInfo:', UserData)
  }
}
