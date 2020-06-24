import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { map, switchMap, mergeMap, exhaustMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects{

    @Effect()
    authSignup = createEffect(() => this.actions$
    .pipe(ofType(AuthActions.TRY_SIGNUP), map((action: AuthActions.TrySignup) => {
        return action.payload;
    }))
    .pipe(switchMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().createUserWithEmailAndPassword(authData.username
            , authData.password));
    }))
    .pipe(switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
    }))
    .pipe(mergeMap((token: string) => {
        return [
            {
                type: AuthActions.SIGNUP
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ];
    }))
    );

authSignin = createEffect(() => this.actions$
.pipe(ofType(AuthActions.TRY_SIGNIN), map((action: AuthActions.TrySignin) => {
    console.log(action.payload);
    return action.payload;
    }))
    .pipe(switchMap((authData: {username: string, password: string}) => {
        console.log(authData.username, authData.password);
        return from(firebase.auth().signInWithEmailAndPassword(authData.username
            , authData.password));
    }))
    .pipe(switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
    }))
    .pipe(mergeMap((token: string) => {
        this.router.navigate(['/']);
        return [
            {
                type: AuthActions.SIGNIN
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ];
    }))
);

// @Effect({dispatch: false})
//  authLogout = createEffect(() => this.actions$
//  .pipe(ofType(AuthActions.LOGOUT))
//  .pipe(tap(() => {
//         this.router.navigate(['/']);
//      }));
//  );


    constructor(private actions$: Actions, private router: Router){

    }
}