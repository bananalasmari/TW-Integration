import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();

  show() {
    this._isLoading.next(true);
    console.log('Loader shown');  // Add console logs for debugging
  }

  hide() {
    this._isLoading.next(false);
    console.log('Loader hidden');  // Add console logs for debugging
  }
}
