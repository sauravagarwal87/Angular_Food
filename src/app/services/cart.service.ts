import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Cartitems } from '../shared/models/cartitems';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart;
  constructor() { }
  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id == food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity)
      return;
    }
    this.cart.items.push(new Cartitems(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items.filter(item=> item.food.id!=foodId);
  }
  changeQuantity(quantity:number , foodId:number){
    let cartItem = this.cart.items.find(item=>item.food.id==foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart(){
    return this.cart;
  }
}
