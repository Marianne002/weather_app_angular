import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-cgu',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './cgu.component.html',
  styleUrl: './cgu.component.css'
})
export class CguComponent {
  public pageName: string = 'CGU';
}
