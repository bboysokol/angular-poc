import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RemoteSubmitRef } from './shared/remote-submit.ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private readonly submitRef: RemoteSubmitRef
  ) {}

  public submit() {
    this.submitRef.submit();
  }

  public changeQueryParams(step: number) {
    const queryParams: Params = { step };

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
