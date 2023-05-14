import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as BooksActions from './books.actions';
import * as BooksFeature from './books.reducer';

@Injectable()
export class BooksEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.initBooks),
      switchMap(() => of(BooksActions.loadBooksSuccess({ books: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(BooksActions.loadBooksFailure({ error }));
      })
    )
  );
}
