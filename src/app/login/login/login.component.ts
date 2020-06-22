import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(private _userServices: UserService, private router: Router) {}

  ngOnInit(): void {}

  login(f: NgForm) {
    if (f.invalid) {
      Object.values(f.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }

    this._userServices.login(f.value).subscribe(
      (resp) => {
        f.reset();
        window.location.href = '/';
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }
}
