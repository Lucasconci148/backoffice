import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public showMenu: boolean = false;
  public menuItems: any = [
    { name: 'home', url: '/home' }
  ]

  constructor(
    private router: Router,
  ) { }

  clickOverlay() {
    this.showMenu = false;
  }

  openMenu() {
    this.showMenu = true;
  }

  closedMenu() {
    this.showMenu = false;
  }

  redirectToPage(item: any) {
    this.closedMenu();
    this.router.navigate([item.url]);
  }
}
