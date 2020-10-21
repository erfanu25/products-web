import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';
import {ProductService} from '../_services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  content = '';
  moderatorAccess = '';
  products: any[];

  constructor(private dashboardService: DashboardService,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    this.dashboardService.getUserAccess().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.dashboardService.getModeratorAccess().subscribe(
      data => {
        this.moderatorAccess = data;
      },
      err => {
        this.moderatorAccess = JSON.parse(err.error).message;
      }
    );

    this.productService.getAllProduct().subscribe(
      data => {
        this.products = data;
      });
  }

  editProduct(product) {
    this.router.navigate(['updateProduct', product.id], {
      queryParams: { productName: product.productName, price: product.price }
    });
  }

}
