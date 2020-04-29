import { Component, Input,OnInit, Output, EventEmitter  } from '@angular/core';
@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() productRemoved = new EventEmitter();
  @Input() product: any;
  //@Output() productRemoved = new EventEmitter();
  modelChanged(product) {
     if (this.product.num === 0) {
      this.productRemoved.emit(this.product)
     }
  }
  
}