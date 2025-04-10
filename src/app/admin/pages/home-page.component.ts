import { Component } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [ SidebarComponent, RouterOutlet
  ],
})
export class HomeAdmComponent {

}