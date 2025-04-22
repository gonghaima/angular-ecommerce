import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <span class="text-x1">My Store</span>
      <app-primary-button
        [label]="'Cart(' + cartService.cart().length + ')'"
        (btnClicked)="showButtonClicked()"
        routerLink="/cart"
      />
    </div>
  `,
  styles: `
   
   `,
})
export class HeaderComponent {
  title = signal('My Ecommerce App');
  cartService = inject(CartService);
  showButtonClicked() {
    console.log('clicked');
  }
}
