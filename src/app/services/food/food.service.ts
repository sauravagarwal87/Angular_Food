import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id==id)!;
  }

  getAllFoodByTag(tag: string): Food[] {
    if (tag == 'All')
      return this.getAll()
    else
      return this.getAll().filter(food => food.tags?.includes(tag));

  }
getAllTag():Tag[]{
  return[
    {name:'All',count:8},
    {name:'FastFood',count:4},
    {name:'Pizza',count:2},
    {name:'Soup',count:1},
    {name:'Lunch',count:1},
  ]

}

getAll(): Food[]{
  return [
    {
      id: 1,
      price: 10,
      name: 'Pizza',
      favourite: false,
      star: 4.5,
      tags: ['Pizza'],
      imageUrl: '/assets/image1.jpg',
      cookTime: '10-20',
      origins: ['italy'],
    },
    {
      id: 2,
      price: 10,
      name: 'Veg Burger',
      favourite: false,
      star: 4.5,
      tags: ['FastFood'],
      imageUrl: '/assets/image1.jpg',
      cookTime: '10-20',
      origins: ['italy'],
    },
    {
      id: 3,
      price: 10,
      name: 'Chicken Burger',
      favourite: true,
      star: 4.5,
      tags: ['FastFood'],
      imageUrl: '/assets/image1.jpg',
      cookTime: '10-20',
      origins: ['italy'],
    },
    {
      id: 4,
      price: 10,
      name: 'Chicken Pizza',
      favourite: true,
      star: 4.5,
      tags: ['Pizza'],
      imageUrl: '/assets/image1.jpg',
      cookTime: '10-20',
      origins: ['italy'],
    },
    {
      id: 5,
      price: 10,
      name: 'Momos',
      favourite: false,
      star: 4.5,
      tags: ['FastFood'],
      imageUrl: '/assets/image1.jpg',
      cookTime: '10-20',
      origins: ['italy'],
    },
    {
      id: 6,
      price: 10,
      name: 'Chicken Tikka',
      favourite: true,
      star: 4.5,
      tags: ['Lunch'],
      imageUrl: '/assets/image1.jpg',
      cookTime: '10-20',
      origins: ['italy'],
    },
    {
      id: 7,
      price: 10,
      name: 'Veg Soup',
      favourite: false,
      star: 4.5,
      tags: ['Soup'],
      imageUrl: '/assets/image1.jpg',
      cookTime: '10-20',
      origins: ['italy'],
    },
    {
      id: 8,
      price: 10,
      name: 'Chowming',
      favourite: false,
      star: 4.5,
      tags: ['FastFood'],
      imageUrl: '/assets/image1.jpg',
      cookTime: '10-20',
      origins: ['italy'],
    }
  ]

}

}