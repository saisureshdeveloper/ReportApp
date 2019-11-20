// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { UserRole } from '../enums/user-roles.enum';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.isAuthenticated().pipe(map(e => {
            // this.authService.userDetails = {
            //     Id: 1,
            //     Module: '11',
            //     Name: 'test',
            //     Role: UserRole.APPROVER
            // };
            // return true;
            if (!e) {
                this.router.navigate(['/login']);
            }
            return e;
        }), catchError(() => this.catchError()));
    }

    private catchError(): Observable<boolean> {
        this.router.navigate(['/login']);
        return of(false);
    }
}

