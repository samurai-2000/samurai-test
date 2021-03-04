import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  myInput:any = ''
  color:string = 'red'
  show:boolean = true
  todoList:any = [
    {
      name: 'Wolodimir',
      age: 20
    },
    {
      name: 'Ortym',
      age: 20
    },
    {
      name: 'Vald',
      age: 20
    },
    {
      name: 'Liza',
      age: 19
    },
    {
      name: 'Crab',
      age: 100
    },
  ]

  constructor() { }

  ngOnInit(): void {
    // this.search()
  }

  switch() {
    this.show = (this.show == true) ? false : true 
  }

  search() {
    this.todoList.filter((elem:any) => {
      elem.name == this.myInput
    })
    return this.todoList
  }
}
