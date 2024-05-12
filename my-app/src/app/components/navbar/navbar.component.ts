import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthGoogleService } from '../../services/auth-google.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() pageName!: string;

  constructor( private authService: AuthGoogleService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
