// components/sidebar/sidebar.component.ts
import { Component, Input } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,
    CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(
    private authService: AuthGoogleService,
    private router: Router
  ) {}

  @Input() pageName!: string;
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
