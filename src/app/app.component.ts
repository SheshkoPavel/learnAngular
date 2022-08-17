import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import {products as data} from './data/products'
import { ProductService } from './services/products.service';
import { delay, Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'first angular app'
 // products: IProduct[] = []
  loading = false
 // products$: Observable<IProduct[]>
  filterRequest = ""

  constructor(
    public productsServices: ProductService,
    public modalService: ModalService
    ){}

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsServices.getAll().pipe(
    //   tap(() => {this.loading = false} )  //Add functionality to do smth after request
    //   )
    this.productsServices.getAll().subscribe((products)=> {               //       request without streams
    this.loading = false
    })
  }
}
