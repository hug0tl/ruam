import { Component } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from '../components/nav-bar/nav-var.component';
import { TitleService } from '../services/title.service';
import { filter, map, mergeMap } from 'rxjs';


@Component({
  selector: 'admin',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [ SidebarComponent, RouterOutlet, TopNavbarComponent
  ],
})
export class HomeAdmComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: TitleService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if (data['title']) {
        this.titleService.setTitle(data['title']);
      }
    });
  }
}