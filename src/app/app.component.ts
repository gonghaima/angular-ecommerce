import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductsListComponent],
  template: `
    <app-header />
    <app-product-list />
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
