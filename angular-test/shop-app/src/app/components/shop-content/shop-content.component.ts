import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.scss']
})
export class ShopContentComponent implements OnInit {

  open:boolean = false
  open2:boolean = false
  open3:boolean = false

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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

  stop(event:any) {
    event.stopPropagation()
  }

}
