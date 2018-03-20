import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number, args?: any): any {
    if (!value) {
      return null;
    }
    // limit is optional and any number of args can be added
    const actualLimit = limit ? limit : 40;
    return value.substr(0, actualLimit) + '...';
  }

}
