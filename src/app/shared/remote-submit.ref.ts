import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class RemoteSubmitRef {
  private onSubmit = new Subject<void>();
  public onSubmit$ = this.onSubmit.asObservable();

  private onFinish = new Subject<void>();
  public onFinish$ = this.onFinish.asObservable();

  private disabled = new BehaviorSubject<boolean>(false);
  public disabled$ = this.disabled.asObservable();

  private loading = new BehaviorSubject<boolean>(false);
  public loading$ = this.loading.asObservable();

  submit(): void {
    this.onSubmit.next();
  }

  finish(): void {
    this.setLoadingState(false);
    this.onFinish.next();
  }

  setDisabledState(disabled: boolean): void {
    this.disabled.next(disabled);
  }

  setLoadingState(loading: boolean): void {
    this.loading.next(loading);
  }
}
