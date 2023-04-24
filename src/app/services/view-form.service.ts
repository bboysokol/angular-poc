import { Injectable, OnDestroy } from '@angular/core';
import { FormBaseService } from './form-base.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from './form.interface';

@Injectable()
export class ViewFormService extends FormBaseService implements FormService {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
    this.formGroup.addControl(
      'blockA',
      formBuilder.group({
        email: ['', Validators.required],
      })
    );
  }
  submit() {
    console.log('view submit triggered');
  }
  getFormGroup() {
    return this.formGroup;
  }
}
