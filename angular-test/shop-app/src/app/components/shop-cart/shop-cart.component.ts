import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  items:any
  priceAll:any
  toast:any
  toast_text!:string
  open:boolean = false
  open2:boolean = false
  open3:boolean = false

  //open_prod
  openItem:any

  constructor(private cartService: CartService,
              private http: HttpClient) {
    this.items = JSON.parse(localStorage.getItem('items') || '[]')
  }

  ngOnInit(): void {
  }

  removeCart(prod:any) {
    const index = this.items.indexOf(prod)
    this.cartService.removeProd(index as never)
    this.items = JSON.parse(localStorage.getItem('items') || '[]')
  }

  calcPrice(item:any, count:any) {
    if (item === 'all') {
      const result = this.items.reduce((a:any, b:any) => a + b.price , 0);
      this.priceAll = result * count + '₽'
    } else {
      if (item === 'none') {
        this.priceAll = 'Нужно выбрать товар!'
      } else {
        this.priceAll = item * count + '₽'
      }
    } 
  }

  postCart(name:any, tel:any, email:any) {

    const arr = []
    const fd = new FormData()
    const date = new Date()
    const fullDate = date.getDate() + '.' + (1 + date.getMonth())  + '.' + date.getFullYear() + ' (' + date.getHours() + ':' + date.getMinutes()  + ')'

    for (let i = 0; i < this.items.length; i++) {
      arr.push(this.items[i].id)
    }
      
    fd.append('name', name);
    fd.append('phoneNumber', tel);
    fd.append('email', email);
    fd.append('products', String(arr));
    fd.append('date', fullDate);

    this.http.post('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/cart/buy', fd)
    .subscribe(res => {});

    
    this.items = []
    localStorage.clear()
    this.cartService.clear()
    this.open3 = true
  }

  imgOpen(item:any) {
    this.openItem = []
    this.openItem.push(item)
  }

  stop(event:any) {
    event.stopPropagation()
  }

}
