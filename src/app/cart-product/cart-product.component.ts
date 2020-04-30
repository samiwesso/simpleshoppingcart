import { Component, Input,OnInit, Output, EventEmitter  } from '@angular/core';
@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  private total: number = 0;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  @Output() productRemoved = new EventEmitter();
  @Input() product: any;

  modelChanged(product) {
     if (this.product.num === 0) {
      this.productRemoved.emit(this.product)
     }
     else {

      this.loadCart();
    }
  }

loadCart(): void {
  //this.itemQuantity = 0;
  this.total = 0;
  this.product = [];


   // this.total += product.price * product.num;
   // this.itemQuantity += item.quantity;
  
}
}