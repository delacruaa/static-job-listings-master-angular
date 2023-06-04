import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public langs = new BehaviorSubject<string[]>([]);
  constructor() {}

  getJobsArr() {
    return this.langs.asObservable();
  }
}
