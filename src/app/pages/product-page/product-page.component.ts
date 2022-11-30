import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {


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
