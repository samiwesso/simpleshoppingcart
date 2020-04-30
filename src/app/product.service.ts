import { Injectable } from '@angular/core';
import { Products } from './entities/products.entity';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: Products[];

  constructor() { 

   this.productList = [
      {id: '01', name: 'Z900', price: 8799},
      {id: '02', name: 'shubert helmet', price: 999},
      {id: '03', name: 'sport gloves', price: 99}
     ];
  }
  getAllProducts(): Products[] {
    return this.productList;
  }

  getOneProduct(id: string): Products {
    return this.productList[this.getSelectedIndex(id)];
  }
  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}