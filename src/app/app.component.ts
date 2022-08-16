import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import {products as data} from './data/products'
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'first angular app'
  products: IProduct[] = []

  constructor(private productsServices: ProductService){}

  ngOnInit(): void {
    this.productsServices.getAll().subscribe((products)=> {
      this.products = products
      
    })
  }
}
