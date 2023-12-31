import { IProductItem } from "../../types";

interface Props {
  product: IProductItem
}

export function ProductItem({ product }: Props) {
  return (
    <div className="w-full border">
      <div className='bg-zinc-100 flex justify-center'>
        <img src={product.imageUrl} alt='' className="w-[80%] transform transition-transform duration-300 hover:scale-110" />
      </div>

      <div className='ml-7 my-6 font-medium'>
        <p className='text-3xl text-gray-900'>{product.name}</p>
        <p className='text-xl italic text-gray-500'>{product.brand}</p>
      </div>

    </div>
  );
}
