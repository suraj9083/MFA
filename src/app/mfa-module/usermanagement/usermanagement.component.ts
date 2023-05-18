import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {

  regiForm = new FormGroup({
    username: new FormControl(''),
    phone: new FormControl('', [Validators.maxLength(10)]),
    email: new FormControl(''),
    password: new FormControl(''),
    confpassword: new FormControl('')
  });

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  userDetails: any[] = [
    {
      email: "something@example.com",
      password: "xyz"
    }
  ];
  isAnyRegiKeyEmpty = false;
  isAnyLoginKeyEmpty = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleForm = () => {
    let container = document.querySelector('.container') as HTMLElement;
    container.classList.toggle('active');
  };

  onRegSubmit() {
    let regiDetails: any = this.regiForm.value;
    Object.keys(regiDetails).forEach(key => {
      if (regiDetails[key] == '') {
        this.isAnyRegiKeyEmpty = true;
      }
    });
    if (this.isAnyRegiKeyEmpty) {
      alert("Empty filed not allowd!!")
      this.isAnyRegiKeyEmpty = false;
    } else {
      if (this.regiForm.value.password == this.regiForm.value.confpassword) {
        this.userDetails.forEach(e => {
          if (e.email == this.regiForm.value.email) {
            alert("email is already exists!!");
            this.regiForm.reset();
          }
          else {
            this.userDetails.push({
              email: this.regiForm.value.email,
              password: this.regiForm.value.password
            })
            alert("User registration successfully!!")
            this.regiForm.reset();
            let container = document.querySelector('.container') as HTMLElement;
            container.classList.toggle('active');
          }
        })
      }
      else {
        alert("Confirm password invalid!!");
        this.regiForm.controls.password.reset();
        this.regiForm.controls.confpassword.reset();
      }
    }
  }

  onLogSubmit() {
    let loginDetails: any = this.loginForm.value;
    Object.keys(loginDetails).forEach(key => {
      if (loginDetails[key] == '') {
        this.isAnyLoginKeyEmpty = true;
      }
    });
    if (this.isAnyLoginKeyEmpty) {
      alert("Empty filed not allowd!!")
      this.isAnyLoginKeyEmpty = false;
    }
    else {
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.password;
      this.userDetails.forEach(elm => {
        if (elm.email == email) {
          if (elm.password == password) {
            alert("Login Successfully!!");
            sessionStorage.setItem("login", "success");
            this.router.navigate(['/user/mfa']);
          }
          else {
            alert("email or password invalid");
            this.loginForm.controls.password.reset();
          }
        }
      });
    }
  }

}