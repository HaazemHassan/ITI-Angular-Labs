import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseWord',
  pure: false,
})
export class ReverseWordPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      const transformedValue = value.split('').reverse().join('');
      return transformedValue;
    } else {
      console.error('Error');
      return 'No Value';
    }
  }
}
