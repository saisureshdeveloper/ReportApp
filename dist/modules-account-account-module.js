(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-account-account-module"],{

/***/ "./src/app/modules/account/account-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/account/account-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/modules/account/user-login/user-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/modules/account/user-login/user-login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/modules/account/account-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"]
            ],
            declarations: [_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/modules/account/user-login/user-login.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/account/user-login/user-login.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-footer {\r\n    margin-left: 0px !important;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/modules/account/user-login/user-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/account/user-login/user-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\r\n  <div class=\"login-logo\">\r\n    <a><b><img style=\"height: 100px;width: 100%;\" src=\"assets/images/dashboard.png\"></b></a>\r\n  </div>\r\n  <div class=\"login-box-body\">\r\n    <!-- <p class=\"login-box-msg\">Sign in to start your session</p> -->\r\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"invaidUser\">\r\n      Your user name or password is incorrect!\r\n    </div>\r\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" [ngClass]=\"{\r\n      'was-validated': f.invalid && (f.dirty || f.touched),\r\n      'needs-validation': f.valid && (f.dirty || f.touched)\r\n    }\">\r\n      <div class=\"form-group has-feedback\" [ngClass]=\"{\r\n        'is-invalid': userName.invalid && (userName.dirty || userName.touched),\r\n        'is-valid': userName.valid && (userName.dirty || userName.touched)\r\n      }\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" autocomplete=\"off\" name=\"userName\" [(ngModel)]=\"model.UserId\"\r\n          #userName=\"ngModel\" required>\r\n        <div class=\"invalid-feedback\" *ngIf=\"userName.errors && (userName.dirty || userName.touched)\">\r\n          <p *ngIf=\"userName.errors.required\">User Name is required</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group has-feedback\" [ngClass]=\"{\r\n        'is-invalid': userName.invalid && (userName.dirty || userName.touched),\r\n        'is-valid': userName.valid && (userName.dirty || userName.touched)\r\n      }\">\r\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"off\" name=\"password\"\r\n          [(ngModel)]=\"model.Password\" #password=\"ngModel\" required>\r\n        <div class=\"invalid-feedback\" *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n          <p *ngIf=\"password.errors.required\">Password is required</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<footer class=\"main-footer\" style=\"margin-left: 0px\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <a class=\"logo\">\r\n          <span class=\"logo-lg\"><b><img style=\"width: 60;height: 30px;margin-bottom: 4px;\" src=\"assets/images/dashboard.png\"></b></span>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-6 footer-copyright\">\r\n        <span><strong>Copyright &copy; 2018.</strong> All rights reserved.</span>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  \r\n"

/***/ }),

/***/ "./src/app/modules/account/user-login/user-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/account/user-login/user-login.component.ts ***!
  \********************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_login_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/login-request */ "./src/app/shared/models/login-request.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dashboard.service */ "./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var src_app_shared_services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/rest.service */ "./src/app/shared/services/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(authService, service, router, renderer, dashboardService) {
        this.authService = authService;
        this.service = service;
        this.router = router;
        this.renderer = renderer;
        this.dashboardService = dashboardService;
        this.subscriptions = [];
        this.model = new _shared_models_login_request__WEBPACK_IMPORTED_MODULE_2__["LoginRequest"]();
        this.invaidUser = false;
        this.renderer.addClass(document.body, 'hold-transition');
        this.renderer.addClass(document.body, 'login-page');
        this.authService.userDetails = null;
        localStorage.clear();
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
        this.renderer.removeClass(document.body, 'login-page');
    };
    UserLoginComponent.prototype.login = function (loginRequest) {
        var _this = this;
        //console.log("loginRequest",loginRequest)
        // {UserId: "reapprover1", Password: "reapprover1"}
        this.dashboardService.showSpinner();
        this.service.login(loginRequest)
            .subscribe(function (res) {
            // console.log("responze login",res/)
            if (res.status) {
                // localStorage.setItem('token', res.token);
                var obj = {
                    Id: res.data.userId,
                    Name: res.data.userName,
                    Role: res.data.role,
                    Module: res.data.module
                };
                _this.authService.userDetails = obj;
                // localStorage.setItem('user', JSON.stringify(this.userData));
                console.log(localStorage.getItem('token'));
                console.log(localStorage.getItem('id'));
                _this.router.navigate(['home/dashboard']);
                setTimeout(function () {
                }, 6000);
            }
            else {
                _this.dashboardService.hideSpinner();
                _this.invaidUser = true;
            }
        });
        // if(loginRequest.UserId =="reapprover1" && loginRequest.Password =='reapprover1')
        // {
        //   let obj:any={Id: 6, Name: "RE Approver 1", Role: "RECO_APPROVER", Module: "RECO"};
        //   this.authService.userDetails = obj;
        //   this.router.navigate(['home/dashboard']);
        //   } else {
        //     this.dashboardService.hideSpinner();
        //     this.invaidUser = true;
        //   }
        // this.subscriptions.push(this.authService.login(loginRequest).subscribe((userDetails) => {
        //   if (userDetails) {
        //     //console.log("userdetails",userDetails)
        //     this.authService.userDetails = userDetails;
        //     this.router.navigate(['home/dashboard']);
        //   } else {
        //     this.dashboardService.hideSpinner();
        //     this.invaidUser = true;
        //   }
        // }));
    };
    UserLoginComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            var loginRequest = {
                UserId: this.form.controls.userName.value,
                Password: this.form.controls.password.value
            };
            this.login(loginRequest);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], UserLoginComponent.prototype, "form", void 0);
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/modules/account/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.css */ "./src/app/modules/account/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_shared_services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/login-request.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/login-request.ts ***!
  \************************************************/
/*! exports provided: LoginRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequest", function() { return LoginRequest; });
var LoginRequest = /** @class */ (function () {
    function LoginRequest(UserId, Password) {
        if (UserId === void 0) { UserId = ''; }
        if (Password === void 0) { Password = ''; }
        this.UserId = UserId;
        this.Password = Password;
    }
    return LoginRequest;
}());



/***/ })

}]);
//# sourceMappingURL=modules-account-account-module.js.map