import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'top-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
// export class TopNavbarComponent {}
export class TopNavbarComponent implements OnInit {
  pageTitle = '';

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.currentTitle.subscribe((title: string) => {
      this.pageTitle = title;
    });
  }
}