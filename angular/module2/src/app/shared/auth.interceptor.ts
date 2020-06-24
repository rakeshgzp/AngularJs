import { Store } from '@ngrx/store';
import { AuthService } from './../auth/auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import { take, switchMap } from 'rxjs/operators';
// We can modify request by cloning original(immutable) one and then can send the request
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService, private store: Store<any>){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted!', req);
        return this.store.select('auth')
        .pipe(switchMap((authState: fromAuth.State) => {
            const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
            return next.handle(copiedReq);
        }), take(1));
    }
}
