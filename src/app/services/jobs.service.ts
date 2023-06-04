import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IJobs } from '../models/IJob';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private httpClient: HttpClient) {}

  public getAllJobs(): Observable<IJobs[]> {
    let dataUrl: string = `https://run.mocky.io/v3/50d38f59-778f-48a2-b0f5-ac61d1c852c1`;
    return this.httpClient
      .get<IJobs[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
