import { Component } from '@angular/core';
import {Model} from "./model/Model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sort-demo';
  private isIdDescending = false
  private isNameDescending = false
  private isDescDescending = false

  public modelList: Model[] = [
    new Model(1, "A", "Coconut"),
    new Model(2, "C", "Dear"),
    new Model(3, "D", "Apple"),
    new Model(4, "B", "Fox"),
    new Model(5, "F", "Goat"),
    new Model(6, "G", "Bird")
  ]

  sortId() {
    this.isIdDescending = !this.isIdDescending
      this.modelList.sort((m1, m2) => {
        return this.isIdDescending ? m2.id - m1.id : m1.id - m2.id
    })
  }

  sortName() {
    this.isNameDescending = !this.isNameDescending
    this.modelList.sort((m1, m2) => {
      return this.isNameDescending ? m2.name.localeCompare(m1.name) : m1.name.localeCompare(m2.name)
    })
  }

  sortDescription() {
    this.isDescDescending = !this.isDescDescending
    this.modelList.sort((m1, m2) => {
      return this.isDescDescending ? m2.description.localeCompare(m1.description) : m1.description.localeCompare(m2.description)
    })
  }
}
