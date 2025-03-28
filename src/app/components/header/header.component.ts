import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <p>
      {{ title }}
    </p>
  `,
  styles: ``,
})
export class HeaderComponent {
  title = 'My Ecommerce App';
}
