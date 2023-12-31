import { IProductItem } from '../../types';
import ShopItem from '../ShopItem';

interface ShopProductListProps {
  products: IProductItem[];
  hasPagination: boolean;
}

export function ShopProductList({ products, hasPagination }: ShopProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-5">
      {products.slice(0, hasPagination ? products.length : 7).map((product, index) => (
        <ShopItem product={product} key={index} />
      ))}
    </div>
  );
}
