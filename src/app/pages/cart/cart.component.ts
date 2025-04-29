import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping cart</h2>
      @for (item of cartServcie.cart(); track $index) {
      <app-cart-item [item]="item"></app-cart-item>
      }
      <app-order-summary></app-order-summary>
    </div>
  `,
  styles: ``,
})
export class CartComponent {
  cartServcie = inject(CartService);
}
