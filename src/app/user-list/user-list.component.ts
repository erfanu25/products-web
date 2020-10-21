import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';
import {UserService} from '../_services/user.service';
import {RULE} from '../_services/rule_enum.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  content = '';
  users: any[];
  rule = RULE;

  constructor(private dashboardService: DashboardService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.dashboardService.getAdminAccess().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.userService.getAllUser().subscribe(
      data => {
        this.users = data;
      });
  }

  editUser(user) {
    this.router.navigate(['updateUser', user.id], {
      queryParams: { username: user.username, email: user.email, roles: user.roles[0].name }
    });
  }

}
