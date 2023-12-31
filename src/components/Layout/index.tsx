import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Basket } from '../Basket';


export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Basket />
      <Footer />
    </>
  );
}
