import { useEffect, useState } from 'react';
import ArrowIcon from '../assets/icons/arrow';
import { ShopProductList } from '../components/ShopProductList';
import { IProductItem } from '../types';
import { FilterModal } from '../components/FilterModal';


const shopProducts: IProductItem[] = [
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
    name: 'Burnikk',
    brand: 'Sexbomb',
    price: '65.50'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
    name: 'Burnikk',
    brand: 'Sexbomb',
    price: '65.50'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
    name: 'Burnikk',
    brand: 'Sexbomb',
    price: '65.50'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c',
    name: 'Burnikk',
    brand: 'Sexbomb',
    price: '65.50'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a',
    name: 'Burnikk',
    brand: 'Sexbomb',
    price: '65.50'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
    name: 'Burnikk',
    brand: 'Sexbomb',
    price: '65.50'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be',
    name: 'Burnikk',
    brand: 'Sexbomb',
    price: '65.50'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
    name: 'Burnikk',
    brand: 'Sexbomb',
    price: '65.50'
  },
]
export function Shop() {

  const [hasPagination, setHasPagination] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='mx-32'>
      <ShopProductList products={shopProducts} hasPagination={hasPagination} />
      <FilterModal />
      {!hasPagination &&
        <button
          className='flex bg-black text-white px-3 py-3 items-center font-medium my-7 mx-[46%]'
          onClick={() => setHasPagination(true)}
        >
          Show more
          <div className='rotate-90 ml-1 z-0'>
            <ArrowIcon />
          </div>
        </button>}
    </div>
  );
}
