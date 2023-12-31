import { ReactNode } from 'react';
import { IProductItem } from '../../types';
import { ProductItem } from '../ProductItem';
import { Link } from 'react-router-dom';


interface ProductList {
  products: IProductItem[];
}

export function ProductList({ products }: ProductList) {
  return (
    <Link to={'detail'} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {products.map((product, index) => (
        <ProductItem product={product} key={index} />
      ))}
    </Link>
  );
}
