import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { RestService } from './rest.service';
import { LoginRequest } from '../models/login-request';
import { Routes } from '../constants/routes.const';
import { UserDetails } from '../models/user-details';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl = environment.baseUrl;
    public userDetails: UserDetails = null;

    constructor(private restService: RestService) { }

    public login(request: LoginRequest): Observable<UserDetails> {
        return this.restService.post(this.baseUrl + Routes.login, request)
            .pipe(
                map(x => x),
                catchError(e => of(false))
            );
            console.log("testing",this.userDetails)
    }

    public isAuthenticated(): Observable<boolean> {
        return of(!!this.userDetails);
    }
}
