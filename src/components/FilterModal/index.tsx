import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/filterModalSlice"
import { RootState } from "../../redux/store";
import { useRef } from "react";
import './index.css'

export function FilterModal() {
  const isModalOpen = useSelector((state: RootState) => state.filterModal.isShowing)
  const dispatch = useDispatch()
  const modalRef = useRef<HTMLDivElement | null>(null)
  const handleOverlayClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!modalRef.current?.contains(target)) {
      dispatch(closeModal());
    }
  };
  return (
    <div
      //   className={`fixed inset-0 flex items-center justify-center transition-opacity 
      // ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      className={['fixed inset-0 flex items-center justify-center transition-opacity',
        `${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`].join(" ")}
      onClick={handleOverlayClick}
    >
      {/* Overlay mờ */}
      <div className="fixed inset-0 bg-white bg-opacity-50"></div>

      {/* Modal */}
      <div className="w-[500px] bg-white px-6 py-12 mx-auto border rounded shadow-lg z-50"
        ref={modalRef}
      >
        <div>
          <div className="flex mb-5">
            <div className="flex-[50%] relative">
              <span>Brand</span>
              <select name="brand" id="brand"
                className="mt-6 w-full h-9 border pl-4 focus:outline-none appearance-none cursor-pointer">
                <div className="text-zinc-100 relative left-[84%] -top-7">
                </div>
                <option value="">All Brands</option>
                <option value="salt">Salt Maalat</option>
                <option value="betsin">Betsin Maalat</option>
                <option value="black">Black Kibal</option>
                <option value="sexbomb">Sexbomb</option>
              </select>
              <div className="w-[1px] h-6 bg-zinc-200 block absolute left-[80%] top-[54px]">

              </div>

            </div>
            <div className="flex-[50%] relative">
              <span>Sort By</span>
              <select name="sort" id="sort" className="mt-6 w-full h-9 border pl-4 focus:outline-none appearance-none cursor-pointer">
                <option value="">None</option>
                <option value="name-asc">Name Ascending A - Z</option>
                <option value="name-desc">Name Descending Z - A</option>
                <option value="price-desc">Price High - Low</option>
                <option value="price-asc">Price Low - High</option>
              </select>
              <div className="w-[1px] h-6 bg-zinc-200 block absolute left-[80%] top-[54px]"></div>
            </div>
          </div>
          <hr />
        </div>
        <div className="mt-6">
          <span>Price Range</span>
          <div className="mt-6 flex justify-between mb-7">
            <div>
              <label htmlFor="from">Từ</label>
              <input type="number" name="from" id="from" className="ml-3 pl-2 border w-[80%] focus:outline-none" min={0} />
            </div>
            <div>
              <label htmlFor="to">Đến</label>
              <input type="number" name="to" id="to" className="ml-3 pl-2 border w-[80%] focus:outline-none" max={10000000} />
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-5">
          <button
            className="w-1/2 bg-black text-white text-sm border 
            focus:outline-none px-8 py-3 transition duration-300 hover:bg-zinc-800">
            Apply Filter
          </button>
          <button
            className="w-1/2 bg-white text-black text-sm border 
            focus:outline-none px-8 py-3 transition duration-300 hover:bg-zinc-100">
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
}
