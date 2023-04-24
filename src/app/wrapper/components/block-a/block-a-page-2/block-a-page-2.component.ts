import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-block-a-page-2',
  templateUrl: './block-a-page-2.component.html',
  styleUrls: ['./block-a-page-2.component.css'],
  imports: [ReactiveFormsModule],
})
export class BlockAPage2Component {
  @Input()
  formGroup: FormGroup;
}
