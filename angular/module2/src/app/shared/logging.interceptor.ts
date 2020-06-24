import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';

// We can receive and use the HttpResponse as a resonse of HttpRequest
@Injectable()
export class LoggingInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap(
            event => {
                console.log('Logging Interceptor', event);
            }
        ));            // Do Allows execute any code data which goes through observable w/o consuming it 
    }
}
