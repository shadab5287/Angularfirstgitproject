import { Component } from "@angular/core";
import { OrderService } from "../service/order.service";

@Component ({
    selector: 'app-custom',
    templateUrl: './custom.component.html',
})
export class CustomComponent {
    orderstatus:any="";
    constructor(private orderdetails:OrderService ){
        this.orderstatus=this.orderdetails.myorder();
    }
    
}
