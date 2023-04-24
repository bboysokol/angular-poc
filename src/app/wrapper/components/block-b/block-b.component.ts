import { Component, Inject, OnInit } from '@angular/core';
import { FORM_SERVICE } from '../../../tokens';
import { FormService } from '../../../services/form.interface';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'block-b',
  templateUrl: './block-b.component.html',
  styleUrls: ['./block-b.component.css'],
  imports: [ReactiveFormsModule],
})
export class BlockBComponent implements OnInit {
  formGroup: FormGroup;
  constructor(@Inject(FORM_SERVICE) readonly formService: FormService) {}

  ngOnInit() {
    this.formGroup = this.formService.getFormGroup().controls.blockB;
  }
}
