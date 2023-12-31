import { Link } from "react-router-dom";
import ArrowIcon from "../assets/icons/arrow";
import { useState } from "react";
import Select from "react-select";

export function ItemDetail() {
    const item = {
        brand: 'Sexbomb',
        name: 'Burnikk',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
            'Quaerat placeat similique dicta nulla praesentium deserunt.' +
            'Corporis repellendus deleniti dolores eligendi.',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
            'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FVoHKtd0erYsCIsVv9lDz?alt=media&token=49ca485e-f76b-4ff3-a406-356a58ec30df',
            'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FT913J5mmk503vnIrmlUb?alt=media&token=99a49867-2afb-4fcc-abf4-8da7afde0f3b'],
        colors: [
            '#000000',
            '#C500C5',
            '#004d84',
            '#753600',
            '#F70808',
            '#09E1B6',
            '#FF6F00'
        ],
        price: '240.00',
    }
    const [selectedImage, setSelectedImage] = useState('https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7')
    const options = [
        { value: '28', label: '28 mm' },
        { value: '36', label: '36 mm' },
        { value: '42', label: '42 mm' }
    ]
    return (
        <div className="ml-[10%] mr-[22%]">
            <Link to='/shop' className="flex items-center">
                <div className="w-4 rotate-180 mr-2">
                    <ArrowIcon />
                </div>
                <span className="text-[26px] font-medium">Back to shop</span>
            </Link>
            <div
                className="mt-10 mb-14 border bg-white flex">
                <div className="w-[14%] p-4 overflow-y-auto">
                    {item.images.map((image, index) => (
                        <button
                            key={index}
                            className="border mb-2 py-3 flex justify-center"
                            onClick={() => setSelectedImage(image)}>
                            <img src={image} alt="" />
                        </button>
                    ))}
                </div>
                <div className="w-1/3 bg-neutral-50 flex justify-center items-center">
                    <img className="w-[110%]" src={selectedImage} alt="" />
                </div>
                <div className="w-[50%]">
                    <div className="mx-[5%] mt-[7%]">
                        <div>
                            <span className="text-lg font-bold text-zinc-400">{item.brand}</span>
                            <h1 className="text-5xl font-medium text-zinc-700">{item.name}</h1>
                        </div>
                        <div className="mt-9 mb-7 text-lg font-medium text-zinc-600">
                            {item.desc}
                        </div>
                        <hr />
                        <div className="mt-7">
                            <p className="mb-7 text-lg font-medium text-zinc-500">Lens Width and Frame Size</p>
                            <Select name="lenswidth" id="lenswidth"
                                className="text-xl font-medium text-zinc-900"
                                placeholder="--Select Size--"
                                options={options}
                            />
                        </div>
                        <div className="mt-7">
                            <p className="mb-7 text-lg font-medium text-zinc-500">Choose Color</p>
                            <div>
                                {item.colors.map(color => (
                                    <div className='w-12 h-12 mr-7 inline-flex rounded-full' style={{ backgroundColor: color }}></div>
                                ))}
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}