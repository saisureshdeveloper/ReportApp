import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserDetails } from '../../../models/user-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public userDetails: UserDetails;
  constructor(private authService: AuthService,
    private router: Router,
    private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'skin-blue');
    this.renderer.addClass(document.body, 'sidebar-mini');
  }

  ngOnInit() {
    this.userDetails = this.authService.userDetails;
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'skin-blue');
    this.renderer.removeClass(document.body, 'sidebar-mini');
    this.renderer.removeClass(document.body, 'sidebar-collapse');
  }

  logout() {
    this.authService.userDetails = null;
    this.router.navigate(['login']);
  }
}
