import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../_services/user.service';
import {ProductService} from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form: any = {};
  id: string;
  isSuccessful = false;
  isUpdateSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = location.pathname.split('/')[2];

    this.route.queryParams.subscribe(queryParams => {
      this.form.productName = queryParams.productName;
      this.form.price = queryParams.price;
    });
  }

  onSubmit() {
    this.form.createDate = new Date();
    if (!this.id) {
      this.productService.createProduct(this.form).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    } else {
      this.form.id = this.id;
      this.productService.updateProduct(this.form).subscribe(
        data => {
          this.isUpdateSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        });
    }
  }
}
