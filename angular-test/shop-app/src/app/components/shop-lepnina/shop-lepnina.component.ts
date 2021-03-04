import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'shop-lepnina',
  templateUrl: './shop-lepnina.component.html',
  styleUrls: ['./shop-lepnina.component.scss']
})
export class ShopLepninaComponent implements OnInit {

  subCategory:string[] = ['Молдинги',
  '3D-панели','Карнизы гладкие','Карнизы с узором','Панно',
  'Колонны','Камины','Розетки',
  'Картуши','Кронштейны','Балясины',
  'Пилястры','Вентиляционные решения',
  'Середники','Ниши','Кессоны',
  'Фасадная лепнина','Фризы'];

  prodLepnina:any
  items:any
  toast:any
  open:boolean = false
  open2:boolean = false
  open3:boolean = false
  open4:boolean = false
  _height:any = window.innerHeight

  //open_prod
  openItem:any


  constructor(private http: HttpClient,
    private cartService: CartService) {
      this.items = JSON.parse(localStorage.getItem('items') || '[]')
    }

  ngOnInit(): void {
    this.subCategory.sort()
    this.getProd();
  }

  getProd() {
    this.http.get('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/products/allProducts')
    .subscribe(p=> {
      this.prodLepnina = p;
      const result = this.prodLepnina.filter((prod:any)=>
      prod.category == 'Лепнина'
      );
      result.sort((a:any, b:any) => a.id < b.id ? 1 : -1);
      this.prodLepnina = result;
    })
  }

  addCart(prod:any) {  
    this.cartService.addToCart(prod as never)
    this.open4 = true
    this.toast = this.cartService.getToast()
    setTimeout(()=> this.open4 = false, 1000)
  }

  sortPrice(data:any) {
    if (data == 'priceUp') {
      const result = this.prodLepnina.sort((a:any, b:any) => a.price > b.price ? 1 : -1);
      this.prodLepnina = result
      return this.prodLepnina
    }
    if (data == 'priceDown') {
      const result = this.prodLepnina.sort((a:any, b:any) => a.price < b.price ? 1 : -1);
      this.prodLepnina = result
      return this.prodLepnina
    }
  }

  sortSubcategory(sub:string) {

    this.http.get('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/products/allProducts')
    .subscribe(p=> {
      this.prodLepnina = p;
      const result = this.prodLepnina.filter((prod:any)=>
      prod.subcategory == sub
      );
      this.prodLepnina = result;
    })
    
  }

  addCall(name:any, tel:any) {

    const date = new Date()
    const fullDate = date.getDate() + '.' + (1 + date.getMonth())  + '.' + date.getFullYear() + ' (' + date.getHours() + ':' + date.getMinutes()  + ')'
    const call = {
      name: name,
      active: true,
      phoneNumber: tel,
      email: '-',
      date: fullDate
    }

    this.http.post('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/clients/addNewClient', call)
    .subscribe(res => {})

    this.open3 = true
    setTimeout(() => {
      this.open = false
      this.open3 = false
    }, 2000);
  } 

  imgOpen(item:any) {
    this.openItem = []
    this.openItem.push(item)
  }

  stop(event:any) {
    event.stopPropagation()
  }

}
