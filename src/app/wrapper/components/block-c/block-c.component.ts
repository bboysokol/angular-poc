import { Component, Inject, OnInit } from '@angular/core';
import { FORM_SERVICE } from '../../../tokens';
import { FormService } from '../../../services/form.interface';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'block-c',
  templateUrl: './block-c.component.html',
  styleUrls: ['./block-c.component.css'],
  imports: [ReactiveFormsModule],
})
export class BlockCComponent implements OnInit {
  formGroup: FormGroup;
  constructor(@Inject(FORM_SERVICE) readonly formService: FormService) {}

  ngOnInit() {
    this.formGroup = this.formService.getFormGroup().controls.blockC;
  }
}
