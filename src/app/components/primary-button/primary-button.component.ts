import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      (click)="handleClick()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input('');
  handleClick() {
    console.log('Button clicked!');
  }
}
