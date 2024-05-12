// pages/history/history.component.ts
import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { CommonModule } from '@angular/common';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  public pageName: string = 'History';

  sessions: any[] = [];
  userEmail: string | undefined;
  loggedIn: boolean = false;
  openAccordionId: string | null = null;
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number = 0;

  constructor(
    private sessionService: SessionService,
    private authService: AuthGoogleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.profile$.subscribe((profile) => {
      if (profile) {
        this.loggedIn = true;
        this.userEmail = profile.email;
        this.retrieveUserSessions();
      }
    });
  }
  
  retrieveUserSessions() {
    if (this.userEmail) {
        this.sessionService.getUserSessions(this.userEmail).subscribe(
            (data: any[]) => {
              this.sessions = data.map(session => ({
                ...session,
                temperature: this.sessionService.roundToUnit(session.temperature)
              }));
              
              this.sessions = this.sessions.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
              
              this.totalPages = Math.ceil(data.length / this.itemsPerPage);

              if (this.sessions.length > 0) {
                this.openAccordionId = this.sessions[0]._id;
              }
            },
            (error) => {
              console.error('Failed to retrieve user sessions:', error);
            }
        );
    } else {
      console.error('User email not available');
    }
}

  toggleAccordion(sessionId: string) {
    if (this.openAccordionId === sessionId) {
      this.openAccordionId = null;
    } else {
      this.openAccordionId = sessionId;
    }
  }  

  isAccordionOpen(sessionId: string): boolean {
    return this.openAccordionId === sessionId;
  }

  login() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  nextPage() {
    this.currentPage++;
    this.retrieveUserSessions();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.retrieveUserSessions();
    }
  }
}