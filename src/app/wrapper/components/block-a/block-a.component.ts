import { Component, Inject, OnInit } from '@angular/core';
import { FORM_SERVICE } from '../../../tokens';
import { FormService } from '../../../services/form.interface';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RemoteSubmitRef } from '../../../shared/remote-submit.ref';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlockAPage1Component } from './block-a-page-1/block-a-page-1.component';
import { BlockAPage2Component } from './block-a-page-2/block-a-page-2.component';

@Component({
  standalone: true,
  selector: 'block-a',
  templateUrl: './block-a.component.html',
  styleUrls: ['./block-a.component.css'],
  imports: [
    ReactiveFormsModule,
    BlockAPage1Component,
    BlockAPage2Component,
    CommonModule,
  ],
})
export class BlockAComponent implements OnInit {
  formGroup: FormGroup;
  path = 'page-1';
  private onDestroy$ = new Subject<void>();
  constructor(
    @Inject(FORM_SERVICE) readonly formService: FormService,
    private submitRef: RemoteSubmitRef,
    private activatedRoute: ActivatedRoute
  ) {
    this.submitRef.onSubmit$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.formService.submit());
    this.path = this.activatedRoute.snapshot.url[0].path;
  }

  ngOnInit() {
    this.formGroup = this.formService.getFormGroup().controls.blockA;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
