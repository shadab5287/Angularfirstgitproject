import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'deliverydate'
})
export class DatePipe implements PipeTransform {
    transform (value:any){
        return value + " and will be delivered 01/09/2021"
    }
}