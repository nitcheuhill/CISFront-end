import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterModule],
  template: `
    // <header>Header Client</header>
    // <router-outlet></router-outlet>
    // <footer>Footer Client</footer>
  `,
})
export class ClientComponent {}
