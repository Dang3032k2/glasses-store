import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { Featured } from "../pages/Featured"
import { Shop } from "../pages/Shop"
import { Recommended } from "../pages/Recommended"
import { ItemDetail } from "../pages/ItemDetail"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='featured' element={<Featured />} />
                    <Route path='shop' element={<Shop />} />
                    <Route path='recommended' element={<Recommended />} />
                    <Route path='detail' element={<ItemDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;