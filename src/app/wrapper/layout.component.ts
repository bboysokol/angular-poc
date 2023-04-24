import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { CreateFormService } from '../services/create-form.service';
import { ViewFormService } from '../services/view-form.service';
import { FORM_SERVICE } from '../tokens';
import { BlockAComponent } from './components/block-a/block-a.component';
import { BlockBComponent } from './components/block-b/block-b.component';
import { BlockCComponent } from './components/block-c/block-c.component';

@Component({
  standalone: true,
  selector: 'layout',
  templateUrl: './layout.component.html',
  providers: [
    {
      provide: FORM_SERVICE,
      useFactory: (
        activatedRoute: ActivatedRoute,
        viewFormService: ViewFormService,
        createFormService: CreateFormService
      ) => buildFormService(activatedRoute, viewFormService, createFormService),
      deps: [ActivatedRoute, ViewFormService, CreateFormService],
    },
    ViewFormService,
    CreateFormService,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BlockAComponent,
    BlockBComponent,
    BlockCComponent,
  ],
})
export class LayoutComponent {
  step$ = inject(ActivatedRoute).queryParamMap.pipe(
    map((paramMap) => paramMap.get('step') ?? '1')
  );
}

export const buildFormService = (
  activatedRoute: ActivatedRoute,
  viewFormService: ViewFormService,
  createFormService: CreateFormService
) => {
  const path = activatedRoute.snapshot.url[0].path;
  switch (path) {
    case 'page-1':
      return viewFormService;
    case 'page-2':
      return createFormService;
  }
};
