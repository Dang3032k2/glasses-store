import { Link } from 'react-router-dom';
import ArrowIcon from '../assets/icons/arrow';
import { IProductItem } from '../types';
import { ProductList } from '../components/ProductList';
import { useEffect } from 'react';

const featuredProduct: IProductItem[] = [
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
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
        name: 'Burnikk',
        brand: 'Sexbomb'
    },
    {
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
        name: 'Burnikk',
        brand: 'Sexbomb'
    },
    {
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
        name: 'Burnikk',
        brand: 'Sexbomb'
    },
]
export function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='mx-32 mb-32'>
            <div className='h-auto bg-zinc-100 flex'>
                <div className='flex-1'>
                    <div className='h-full mx-16 flex flex-col justify-evenly'>
                        <h1 className='mt-10 text-6xl font-thin'>
                            <strong>See </strong>
                            everything
                            <br /> with
                            <strong> Clarity</strong>
                        </h1>
                        <p className='text-gray-700 text-xl font-medium'>Buying eyewear should leave you happy and good-looking,
                            with money in your pocket. Glasses, sunglasses, and
                            contacts—we’ve got your eyes covered.</p>
                        <Link
                            to={'shop'}
                            className='w-40 h-14 bg-gray-950 flex justify-center 
                                    items-center transition duration-300 hover:bg-gray-900'
                        >
                            <span className='text-white text-xl font-medium'>Shop Now </span>
                            <div className=' text-white text-xl ml-2'>
                                <ArrowIcon />
                            </div>

                        </Link>
                    </div>
                </div>
                <img src="/icons/banner-girl.png" alt="" className='w-1/2 flex-1' />
            </div>
            <div className='mx-20'>
                <div className='mt-24 mb-10 flex justify-between'>
                    <h1 className='text-4xl font-medium text-gray-900'>Featured Product</h1>
                    <Link to={'featured'} className='text-xl font-semibold underline self-end'>See All</Link>
                </div>

                <ProductList products={featuredProduct} />
            </div>
            <div className='mx-20'>
                <div className='mt-24 mb-10 flex justify-between'>
                    <h1 className='text-4xl font-medium text-gray-900'>Recommended Product</h1>
                    <Link to={'recommended'} className='text-xl font-semibold underline self-end'>See All</Link>
                </div>
                <ProductList products={featuredProduct} />
            </div>
        </div>
    );
}

