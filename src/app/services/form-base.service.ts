import { Injectable, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Injectable()
export class FormBaseService implements OnDestroy {
  formGroup: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      blockB: this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      }),
      blockC: this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      }),
    });
  }
  ngOnDestroy(): void {
    console.log('service cleaning triggered');
  }
}
