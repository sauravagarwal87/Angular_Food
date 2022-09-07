import { Cartitems } from "./cartitems";

export class Cart{
    items:Cartitems[] = [];

    get totalPrice():number{
        let totalprice = 0;
        this.items.forEach(item => {
            totalprice += item.price;
        });
        return totalprice;

    }
}