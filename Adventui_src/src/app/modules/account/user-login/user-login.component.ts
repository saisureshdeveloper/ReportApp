import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  Renderer2
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Subscription
} from 'rxjs';

import {
  LoginRequest
} from '../../../shared/models/login-request';
import {
  AuthService
} from '../../../shared/services/auth.service';
import {
  DashboardService
} from '../../../shared/services/dashboard.service';
import {
  RestService
} from 'src/app/shared/services/rest.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit, OnDestroy {
  private subscriptions: Array < Subscription > = [];
  model: LoginRequest = new LoginRequest();
  invaidUser = false;

  @ViewChild('f') form: any;

  constructor(private authService: AuthService,
    private service: RestService,
    private router: Router, private renderer: Renderer2,
    private dashboardService: DashboardService) {
    this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'login-page');
    this.authService.userDetails = null;
    localStorage.clear()
  }

  ngOnInit() {
   
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
    this.renderer.removeClass(document.body, 'login-page');
  }
  login(loginRequest: LoginRequest) {
    this.dashboardService.showSpinner();
    this.service.login(loginRequest)
      .subscribe((res : any) => {
        if (res.status) {
          let obj: any = {
            Id: res.data.userId,
            Name: res.data.userName,
            Role: res.data.role,
            Module: res.data.module
          };
          this.authService.userDetails = obj;
          this.router.navigate(['home/dashboard']);

        } else {
          this.dashboardService.hideSpinner();
          this.invaidUser = true;
        }

      })
  }

  onSubmit() {
    if (this.form.valid) {
      const loginRequest = < LoginRequest > {
        UserId: this.form.controls.userName.value,
        Password: this.form.controls.password.value
      };
      this.login(loginRequest);
    }
  }
}
