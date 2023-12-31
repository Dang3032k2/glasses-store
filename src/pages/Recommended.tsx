import { useEffect } from 'react';
import { ProductList } from '../components/ProductList';
import { IProductItem } from '../types';

const rcmProduct: IProductItem[] = [
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
    name: 'Burnikk',
    brand: 'Sexbomb'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
    name: 'Burnikk',
    brand: 'Sexbomb'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
    name: 'Burnikk',
    brand: 'Sexbomb'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c',
    name: 'Burnikk',
    brand: 'Sexbomb'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a',
    name: 'Burnikk',
    brand: 'Sexbomb'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
    name: 'Burnikk',
    brand: 'Sexbomb'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be',
    name: 'Burnikk',
    brand: 'Sexbomb'
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
    name: 'Burnikk',
    brand: 'Sexbomb'
  },
]
export function Recommended() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='mx-32 mb-32'>
      <div className='w-full h-[460px] bg-zinc-100 flex '>
        <div className='ml-14 mt-14 flex flex-col flex-1 justify-center text-6xl font-medium'>
          <p>Recommended</p>
          <p>Products</p>
        </div>
        <img src="/icons/banner-woman.png" alt="" className='w-full flex-1 object-cover' />
      </div>
      <div className='mx-20 my-32'>
        <ProductList products={rcmProduct} />
      </div>
    </div>
  );
}
