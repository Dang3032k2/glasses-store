import { useEffect, useState } from 'react';
import { HeaderContent } from './HeaderContent';
export function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  const handleScroll = () => {
    if (window.scrollY > 40) {
      setIsHeaderVisible(true)
    }
    else setIsHeaderVisible(false)
  }
  return (
    <>
      {!isHeaderVisible && <div className='h-36 px-14 w-full flex items-center justify-center z-20'>
        <div className='flex justify-between w-full'>
          <HeaderContent />
        </div>
      </div>}

      <div className={isHeaderVisible ? 'h-20 z-20 px-14 w-full flex items-center justify-center bg-white shadow-md fixed transition duration-300 ease-linear translate-y-0' : '-translate-y-full'}>
        {isHeaderVisible &&
          <div className='flex justify-between w-full bg-white'>
            <HeaderContent />
          </div>
        }
      </div>
    </>
  );
}
