import { Route, Routes } from "react-router-dom"
import Home from "../views/home/Home";
import Products from "../views/products/Products";
import Layout from "../components/layout/Layout";


const AppRouter = () => {
    return (
      <>  
          <Routes>
              <Route path='/' element={<Layout />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/productos' element={<Products />} />
                  <Route path='*' element={"<Navigate to='/' />"} />
              </Route>
          </Routes>
      </>
    )
  }
  
  export default AppRouter