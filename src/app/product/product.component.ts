import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  public cmpName: string = "product doe not works!";

  public products: ProdModel[] = [
    {
      "name": "Classic White T-Shirt",
      "imageUrl": "https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500",
      "price": 19.99,
      "color": "White",
      "size": ["S", "M", "L", "XL"]
    },
    {
      "name": "Blue Denim Jeans",
      "imageUrl": "https://via.placeholder.com/150/0000FF/FFFFFF?text=Blue+Jeans",
      "price": 49.99,
      "color": "Blue",
      "size": ["32", "34", "36", "38"]
    },
    {
      "name": "Red Hoodie",
      "imageUrl": "https://via.placeholder.com/150/FF0000/FFFFFF?text=Red+Hoodie",
      "price": 39.99,
      "color": "Red",
      "size": ["M", "L", "XL"]
    },
    {
      "name": "Black Leather Jacket",
      "imageUrl": "https://via.placeholder.com/150/000000/FFFFFF?text=Leather+Jacket",
      "price": 129.99,
      "color": "Black",
      "size": ["M", "L", "XL", "XXL"]
    },
    {
      "name": "Green Running Shoes",
      "imageUrl": "https://via.placeholder.com/150/00FF00/000000?text=Running+Shoes",
      "price": 59.99,
      "color": "Green",
      "size": ["8", "9", "10", "11"]
    },
    {
      "name": "Yellow Summer Dress",
      "imageUrl": "https://via.placeholder.com/150/FFFF00/000000?text=Summer+Dress",
      "price": 34.99,
      "color": "Yellow",
      "size": ["S", "M", "L"]
    },
    {
      "name": "Gray Sweatpants",
      "imageUrl": "https://via.placeholder.com/150/808080/FFFFFF?text=Gray+Sweatpants",
      "price": 29.99,
      "color": "Gray",
      "size": ["S", "M", "L", "XL"]
    },
    {
      "name": "Purple Baseball Cap",
      "imageUrl": "https://via.placeholder.com/150/800080/FFFFFF?text=Baseball+Cap",
      "price": 14.99,
      "color": "Purple",
      "size": ["One Size"]
    },
    {
      "name": "Brown Leather Belt",
      "imageUrl": "https://via.placeholder.com/150/8B4513/FFFFFF?text=Leather+Belt",
      "price": 24.99,
      "color": "Brown",
      "size": ["S", "M", "L", "XL"]
    },
    {
      "name": "Orange Backpack",
      "imageUrl": "https://via.placeholder.com/150/FFA500/FFFFFF?text=Backpack",
      "price": 49.99,
      "color": "Orange",
      "size": ["One Size"]
    }
  ];


  ngOnInit(): void {
    this.products.forEach(item => {
      console.log(item.name)
    })
  }

}

export class ProdModel {
  public name: string | undefined;
  public imageUrl: string | undefined;
  public price: number | undefined;
  public color: string | undefined;
  public size: string[] | undefined;
}

