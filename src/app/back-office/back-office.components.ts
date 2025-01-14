import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-office',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>Navigation Back-Office</nav>
    <router-outlet></router-outlet>
  `,
})
export class BackOfficeComponent {}
