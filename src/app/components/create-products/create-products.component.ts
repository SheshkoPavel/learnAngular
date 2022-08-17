import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title(){
    return this.form.controls.title as FormControl  
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value)
  }

}
