import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatter'})
export class Formatter implements PipeTransform {
  transform(value: any): string {
    return value !== null ? value.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : value;
  }
}