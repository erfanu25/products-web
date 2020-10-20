import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';
import {UserService} from '../_services/user.service';
import {RULE} from '../_services/rule_enum.model';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';
  users: any[];
  rule = RULE;

  constructor(private dashboardService: DashboardService,
              private userService: UserService) { }

  ngOnInit() {
    this.dashboardService.getAdminBoard().subscribe(
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
}
