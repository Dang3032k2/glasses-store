import { useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { open } from '../../redux/slices/basketStateSlice';
import { openModal } from '../../redux/slices/filterModalSlice';
import { Basket } from '../Basket';
import ShoppingIcon from '../../assets/icons/shopping';
import SearchIcon from '../../assets/icons/search';
import FilterIcon from '../../assets/icons/filter';

export function HeaderContent() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAtShop = location.pathname.includes('shop');
  interface Screen {
    lable: string,
    link: string
  }
  const navigator: Screen[] = [
    {
      lable: 'Home',
      link: '/'
    },
    {
      lable: 'Shop',
      link: '/shop'
    },
    {
      lable: 'Featured',
      link: '/featured'
    },
    {
      lable: 'Recommended',
      link: '/recommended'
    },
  ]

  return (
    <>
      <div className='flex items-center flex-[30%]'>
        <Link to={'/'}><img src="/icons/logo.png" alt="" /></Link>
        {
          navigator.map((screen, index) => (
            <NavLink key={index} to={screen.link}
              className='px-4 py-3 text-lg transition-all duration-300 hover:bg-zinc-100'
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}>{screen.lable}</NavLink>
          ))
        }

      </div>
      <div className='flex justify-between items-center flex-[30%]'>

        <div className='flex justify-end'>
          {isAtShop &&
            <button className='w-28 h-12 flex justify-center items-center -mr-6 bg-zinc-200 
          text-zinc-500 font-medium border border-zinc-300 transition duration-300
            hover:bg-zinc-100'
              onClick={() => dispatch(openModal())}
            >
              <p className='text-sm mr-2'>Filters</p>
              <FilterIcon />
            </button>}
          <SearchIcon />
          <input className='w-96 h-12 pl-16 border focus: outline-none' placeholder="Search product..." />
          <button className='transition duration-300 hover:bg-gray-200' onClick={() => dispatch(open())} >
            <ShoppingIcon
            />
          </button>
        </div>
        <div className='flex w-48 justify-between font-medium'>
          <button className='h-12 px-4 bg-black text-white transition duration-300 hover:bg-slate-800'>Sign up</button>
          <button className='h-12 px-4 bg-zinc-200 text-gray-700 transition duration-300 hover:bg-zinc-100'>Sign in</button>
        </div>
      </div>
      <Basket />
    </>
  );
}
