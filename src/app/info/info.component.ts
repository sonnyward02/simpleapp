import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  quantity!: number;
  products!: any[];
  selectedProduct: any;
  @Input()
  name!: string;

  ngOnInit(): void {
    this.quantity = 10;
    this.products = [
      { id: 1, name: 'Revenge of the Sith' },
      { id: 2, name: 'Return of the Jedi' },
      { id: 3, name: 'A New Hope' }
    ];
    this.selectedProduct = this.products[0];
  }

  onSubmit(): void {
    console.log(`Quantity: ${this.quantity}`);
    console.log(`Selected Product: ${this.selectedProduct.name}`);
  }

  newInfo(): void {
    this.quantity = 0;
    this.selectedProduct = this.products[0];
  }
}
