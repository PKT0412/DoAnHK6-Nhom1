import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/User/Home";
import PhoneDetail from "./Pages/User/PhoneDetail";
import Account from "./Pages/User/Account";
import Cart from "./Pages/User/Cart";
import Pay from "./Pages/User/Pay";
import Login from "./Pages/Component/Login/Login";
import Register from "./Pages/Component/Register/Register";
import Wishlist from "./Pages/User/Wishlist";
import BrandList from "./Pages/Admin/BrandList";
import BrandAdd from "./Pages/Admin/BrandAdd";
import BrandEdit from "./Pages/Admin/BrandEdit";
import HomeAdmin from "./Pages/Admin/HomeAdmin";
import PhoneModelByBrand from "./Pages/User/PhoneModelByBrand";
import ProductList from "./Pages/Admin/ProductList";
import ProductAdd from "./Pages/Admin/ProductAdd";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/PhoneModelByBrand/:BrandId"
            element={<PhoneModelByBrand />}
          />
          <Route path="/PhoneDetail/:id" element={<PhoneDetail />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Pay" element={<Pay />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Admin" element={<HomeAdmin />} />
          <Route path="/Admin/Brand" element={<BrandList />} />
          <Route path="/Admin/Brand/Add" element={<BrandAdd />} />
          <Route path="/Admin/Brand/Edit/:id" element={<BrandEdit />} />
          <Route path="/Admin/Product" element={<ProductList />}/>
          <Route path="/Admin/Product/Add" element={<ProductAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
