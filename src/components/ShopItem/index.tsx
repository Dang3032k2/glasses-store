import { useState } from "react";
import { IProductItem } from "../../types"



interface Prop {
    product: IProductItem
}

const ShopItem = ({ product }: Prop) => {
    const [showButton, setShowButton] = useState(false);
    return (
        <div className="w-full border bg-white h-[290px] flex flex-col"
            onMouseOver={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <div className={'bg-zinc-100 flex justify-center'}>
                <img src={product.imageUrl} alt=''
                    className={showButton ? "transition-all ease-linear duration-300 w-2/3"
                        : "transition-all ease-linear duration-300 w-[80%]" + " py-2"} />
            </div>

            <div className='flex-[112px] mt-6 mb-3 font-medium flex flex-col items-center'>
                <p className='text text-gray-900'>{product.name}</p>
                <p className='text-sm italic text-gray-500'>{product.brand}</p>
                <p className='text-xl text-gray-900 mt-8'>${product.price}</p>
            </div>
            <button className={showButton ? "transition-all ease-linear duration-300 h-11 bg-black"
                : "transition-all ease-linear duration-300 h-0"}>
                <p className={showButton ? 'inline h-full text-white' : 'hidden'}>Add to cart</p>
            </button>
        </div >
    )
}
export default ShopItem;