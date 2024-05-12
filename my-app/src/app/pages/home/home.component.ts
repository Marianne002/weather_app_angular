// pages/home/home.component.ts
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../../services/auth-google.service';
import { MapComponent } from '../../components/map/map.component';
import { SessionService } from '../../services/session.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MapComponent,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public pageName: string = 'Home';
  
  profile: any;
  locationData: any;
  weatherData: any;
  greeting: string = '';

  constructor(
    private authService: AuthGoogleService, 
    private cdr: ChangeDetectorRef,
    private router: Router,
    private sessionService: SessionService
  ) {}  

  ngOnInit(): void {
    this.authService.profile$.subscribe((profile) => {
      if (profile) {
        this.profile = profile;
        this.sendSessionData();
      }
      this.cdr.detectChanges();
    });
    this.determineGreeting();
  }

  determineGreeting() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      this.greeting = 'Bonjour';
    } else {
      this.greeting = 'Bonsoir';
    }
  }
  
  onLocationFound(latlng: any) {
    this.locationData = latlng;
    this.sendSessionData();
  }

  sendSessionData() {
    if (this.profile && this.locationData) {

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const sessionData = {
        email: this.profile.email,
        lat: this.locationData.lat,
        lng: this.locationData.lng,
        timezone: timezone
      };
      this.sessionService.createSession(sessionData).subscribe({
        next: (res: any) => {
          setTimeout(() => {
              this.retrieveSessionData();
          }, 1000);
        },
        error: (err: any) => console.error('Error creating session', err)
      });
    }
  }

  retrieveSessionData() {
    this.sessionService.getSessionData(this.profile.email).subscribe({
      next: (data: any) => {
        this.weatherData = data;
        this.weatherData.temperature = this.sessionService.roundToUnit(data.temperature);
        this.weatherData.minTemperature = this.sessionService.roundToUnit(data.minTemperature);
        this.weatherData.maxTemperature = this.sessionService.roundToUnit(data.maxTemperature);
      },
      error: (err: any) => console.error('Error retrieving session data', err)
    });
  }
  
 
  login() {
    this.router.navigate(['/login']);
  }
}
