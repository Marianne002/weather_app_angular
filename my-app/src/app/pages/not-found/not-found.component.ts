import { Component } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  constructor(
    private authService: AuthGoogleService,
    private router: Router
  ) {}
  
  login() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
