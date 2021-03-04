import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:any
  price:any
  toast:any

  constructor() { 
    this.items = JSON.parse(localStorage.getItem('items') || '[]')
  }

  addToCart(product:any) {
    for (let i = 0; i < this.items.length; i++){
      if(this.items[i].id === product.id) {
        this.toast = 'Товар уже в корзине!'
        return this.items
      }
    }
    this.items.push(product)
    this.syncItems()
    this.toast = 'Товар добавлен!'
  }

  syncItems() {
    localStorage.setItem('items', JSON.stringify(this.items))
  }

  clear() {
    this.items = JSON.parse(localStorage.getItem('items') || '[]')
  }

  getToast() {
    return this.toast
  }

  get length():number {
    return this.items.length
  }

  removeProd(index:never) {
    this.items.splice(index, 1)
    this.syncItems()
  }
    
}
