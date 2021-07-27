import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'deliverydate'
})
export class DatePipe implements PipeTransform {
    transform (value:any){
        return value + " and will be delivered very soon"
    }
}