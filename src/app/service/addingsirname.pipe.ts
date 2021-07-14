import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addingsirname'
})
export class AddingsirnamePipe implements PipeTransform {

  transform(value:any){
    return value + " kumar "
  }
  

}
