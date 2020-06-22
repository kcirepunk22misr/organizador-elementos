import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService],
})
export class HeaderComponent implements OnInit {
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}

  logout() {
    this._userService.logout();
  }
}
