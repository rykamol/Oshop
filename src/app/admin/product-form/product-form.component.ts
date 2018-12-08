import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from './../../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any[]>;

  constructor(private categoryService:CategoryService,private productService:ProductService) {
       this.categories$ = this.categoryService.get()
      // .pipe(map(items => { 
      //   return items.map(a => {
      //     const data = a.payload.val().name;
      //     const key = a.payload.key;
      //     return {key, data};           
      //   });
      // }));
  }
  
   save(product){
     this.productService.create(product);
   }
  ngOnInit() {
  }

}
