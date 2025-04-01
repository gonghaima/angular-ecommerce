import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="bg-white shadow-md p-4 flex justify-between items-center">
      {{ title() }}
    </div>
  `,
  styles: `
   
   `,
})
export class HeaderComponent {
  title = signal('My Ecommerce App');
}
