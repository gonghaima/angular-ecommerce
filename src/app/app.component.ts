import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <router-outlet />
    <!-- <app-product-list /> -->
  `,
  // template: `
  //   <h1>Welcome to {{title}}!</h1>

  //   <router-outlet />
  // `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
