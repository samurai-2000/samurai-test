import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {

  items:any

  constructor(private cartService: CartService) {
    
  }

  ngOnInit(): void {}

  get count() {
    return this.cartService.items.length
  }

  
}
