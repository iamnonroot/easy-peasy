import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: number): unknown {
    return price - Math.floor((price * discount) / 100);
  }
}
