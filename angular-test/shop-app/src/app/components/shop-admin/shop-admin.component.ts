import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop-admin',
  templateUrl: './shop-admin.component.html',
  styleUrls: ['./shop-admin.component.scss']
})
export class ShopAdminComponent implements OnInit {


  subCategory:string[] = ['Молдинги',
  '3D-панели','Карнизы гладкие','Карнизы с узором','Панно',
  'Колонны','Камины','Розетки',
  'Картуши','Кронштейны','Балясины',
  'Пилястры','Вентиляционные решения',
  'Середники','Ниши','Кессоны',
  'Фасадная лепнина','Фризы'];

  subCategory2:string[] = ['Наливные полы',
  'Мебель','Освещение',
  'Подоконники','Столешницы']

  img!:File;
  open:boolean = false
  open2:boolean = false
  open3:boolean = false
  prodLepnina!:any
  cart:any
  pass:boolean = false
  call:any
  active:boolean = false
  active2:boolean = false
  active3:boolean = false
  cartsOff:any
  clientAll:any
  CartOpen:any
  blur:any = {
    'filter': 'blur(5px)'
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProd()
    this.getCart()
    this.getCall()
    this.getOff()
    this.getAll()
  }

  getProd() {
    this.http.get('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/products/allProducts')
    .subscribe(p=> {
      this.prodLepnina = p;
      const result = this.prodLepnina.sort((a:any, b:any) => a.id < b.id ? 1 : -1);
      this.prodLepnina = result;
    })
  }

  FileSelected(event:any) {
    this.img = <File>event.target.files[0] 
  }

  addProd(name:any, 
    category:any, 
    subcategory:any, 
    description:any, 
    price:any, 
    width:any, 
    height:any, 
    length:any,) {

    const fd = new FormData() 
  
    fd.append('name', name)
    fd.append('category', category)
    fd.append('subcategory', subcategory)
    fd.append('description', description)
    fd.append('price', String(price))
    fd.append('width', String(width))
    fd.append('height', String(height))
    fd.append('length', String(length))
    fd.append('imageFile', this.img)

    this.http.post('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/admin/addProduct', fd)
    .subscribe(res => {})

    this.open = false
  }

  searchProd(event:any) {
    if (event == '') {
      this.getProd()
    } else {
      const result = this.prodLepnina.filter((prod:any)=>
        prod.name == event
      )
      this.prodLepnina = result
    }
  }

  getCart() {
    this.http.get('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/admin/activeCarts')
    .subscribe(p=> {
      this.cart = p;
    })
  }

  getCall() {
    this.http.get('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/admin/activeClients')
    .subscribe(p=> {
      this.call = p;
    })
  }

  removeProd(id:any) {
    this.http.delete(`http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/admin/deleteProduct/${id}` )
    .subscribe(res => {})
    setTimeout(() => this.prodLepnina = this.getProd(), 1000);
  }

  check(pass:any) {
    if (pass == '7tJ6CU8qFnNeaHc') {
      this.pass = true
      this.blur = {}
    } else {
      this.pass = false
    }
    
  }

  offClient(item:any, event:any) {
    if (event == 'client') {
      this.http.delete(`http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/admin/offCart/${item.id}`)
      .subscribe(res => {})
      setTimeout(() => {
        this.cart = this.getCart()
        this.getOff()
      }, 1000);
    }
    if (event == 'call') {
      this.http.delete(`http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/admin/activeClients/${item.id}`)
      .subscribe(res => {})
      setTimeout(() => {
        this.call = this.getCall()
        this.getAll()
      }, 1000);
    }

  }

  getOff() {
    this.http.get('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/admin/offCarts')
    .subscribe(res => {
      this.cartsOff = res
      const sort = this.cartsOff.sort((a:any, b:any) => a.id < b.id ? 1 : -1);
      this.cartsOff = sort
    })
  }

  getAll() {
    this.http.get('http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/admin/allClients')
    .subscribe(res => {
      this.clientAll = res
      const sort = this.clientAll.sort((a:any, b:any) => a.id < b.id ? 1 : -1);
      this.clientAll = sort
    })
  }

  openCart(cart:any) {

    this.CartOpen = []

    this.http.get(`http://zakartlepnina-env.eba-jxk6p23f.eu-central-1.elasticbeanstalk.com/api/admin/carts/${cart}`)
    .subscribe(res => {
      this.CartOpen = res
    })
  }

}
