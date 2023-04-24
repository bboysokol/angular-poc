import { Injectable } from '@angular/core';
import { FormBaseService } from './form-base.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from './form.interface';

@Injectable()
export class CreateFormService extends FormBaseService implements FormService {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
    this.formGroup.addControl(
      'blockA',
      formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    );
  }
  submit() {
    console.log('create submit triggered');
  }
  getFormGroup() {
    return this.formGroup;
  }
}
