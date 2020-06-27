import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService],
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private _userService: UserService) {
    this.user = this._userService.user;
  }

  ngOnInit(): void {}

  logout() {
    this._userService.logout();
  }
}
