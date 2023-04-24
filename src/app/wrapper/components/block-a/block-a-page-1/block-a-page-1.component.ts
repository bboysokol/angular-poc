import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-block-a-page-1',
  templateUrl: './block-a-page-1.component.html',
  styleUrls: ['./block-a-page-1.component.css'],
  imports: [ReactiveFormsModule],
})
export class BlockAPage1Component {
  @Input()
  formGroup: FormGroup;
}
