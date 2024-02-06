import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  searchAll() {
    return 'this will returns all products';
  }
}
