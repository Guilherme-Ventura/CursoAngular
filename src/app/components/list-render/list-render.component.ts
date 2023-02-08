import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: "Turca", type: "Dog", age: 10 },
    { name: "Tom", type: "Cat", age: 5 },
    { name: "Bob", type: "Turtle", age: 1 },
    { name: "Frida", type: "Dog", age: 12 }
  ]

  animalDetails = '';

  showAge(animal: Animal): void{
    if (animal.age > 1) {
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
    } else {
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano!`;
    }
  }
}
