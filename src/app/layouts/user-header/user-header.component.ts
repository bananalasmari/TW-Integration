import { Component } from '@angular/core';
import { UserService } from '../../_shared/services/user-service.service';

@Component({
  selector: 'app-user-header',
  standalone: false,
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss'
})
export class UserHeaderComponent {
  userFullName: string = 'عبدالله القحطاني';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUserFullName();
  }

  fetchUserFullName(): void {
    this.userService.getUserFullName()
      .then((name) => {
        this.userFullName = name;
      })
      .catch((error) => {
        console.error('Error fetching user full name:', error);
      });
  }
}
