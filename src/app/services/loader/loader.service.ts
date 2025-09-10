import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private requests = 0;
  private loading = new BehaviorSubject<boolean>(false);

  // Observable for components to subscribe
  loading$ = this.loading.asObservable();


  show() {
    this.requests++;
    this.loading.next(true);
  };

  hide() {
    this.requests--;
    if (this.requests <= 0) {
      this.requests = 0;
      this.loading.next(false);
    }
  };

  constructor() { }
}
