import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertModel } from './models/alert-model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject: Subject<AlertModel> = new Subject<AlertModel>();
  public alert$:Observable<AlertModel> = this.alertSubject.asObservable();

  setAlert(alert: AlertModel) {
    this.alertSubject.next(alert);
  }
  constructor() { }
}
