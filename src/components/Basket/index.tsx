import { useDispatch, useSelector } from 'react-redux';
import { close } from '../../redux/slices/basketStateSlice';
import { RootState } from '../../redux/store';

export function Basket() {
  const isOpen = useSelector((state: RootState) => state.basket.isShowing)
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(close())
  };
  return (
    <div
      className={["fixed inset-y-0 right-0 z-30 bg-white shadow-lg transform ease-in-out duration-500 transition-transform w-[800px]",
        isOpen ? 'translate-x-0' : 'translate-x-full'].join(" ")}
    >
      <div className='mx-6 my-10'>
        <div className='flex justify-between'>
          <div>
            <span className='font-medium text-2xl'>My Basket</span>
            <span className='ml-2 font-medium'>( 0 item)</span>
          </div>
          <div>
            <button
              className='w-20 h-12 border border-gray-300 font-medium transition duration-300 hover:bg-gray-300'
              onClick={onClose}
            >Close</button>
            <button className='w-32 h-12 border border-gray-300 font-medium transition duration-300 hover:bg-gray-300'>Clear Basket</button>
          </div>
        </div>
        <div className='mt-10'>
          <p className='flex justify-center items-center'>Your basket is empty</p>
        </div>

        <div className='h-40 absolute bottom-0 left-6 right-6'>
          <hr />
          <div className='h-36 flex justify-between items-center'>
            <div>
              <p>Subtotal Amount</p>
              <p className='text-3xl pt-4 font-bold'>$0.00</p>
            </div>
            <button className='h-14 w-36 bg-slate-500 text-white font-bold text-lg'>
              CHECK OUT
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
