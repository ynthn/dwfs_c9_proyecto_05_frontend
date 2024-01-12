import { Route, Routes } from "react-router-dom"
import Home from "../views/home/Home";
import Layout from "../components/layout/Layout";
import Products from "../views/products/Products";
import Product from "../views/product/Product";
import Account from "../views/account/Account";
import NewAccount from "../views/account/NewAccount";
import Login from "../views/account/Login";
import Checkout from "../views/checkout/Checkout";


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/productos' element={<Products />} />
                    <Route path='/producto/:id' element={<Product />} />
                    <Route path='/mi-cuenta' element={<Account />} />
                    <Route path='/crear-cuenta' element={<NewAccount />} />
                    <Route path='/iniciar-sesion' element={<Login />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter