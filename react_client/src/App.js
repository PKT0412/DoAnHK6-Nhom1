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
import PhoneModelList from "./Pages/Admin/PhoneModelList";
import PhoneModelAdd from "./Pages/Admin/PhoneModelAdd";
import PhoneModelEdit from "./Pages/Admin/PhoneModelEdit";
import PhoneList from "./Pages/Admin/PhoneList";
import PhoneAdd from "./Pages/Admin/PhoneAdd";
import PhoneEdit from "./Pages/Admin/PhoneEdit";
import PhoneModelImageList from "./Pages/Admin/PhoneModelImageList";
import PhoneModelImageAdd from "./Pages/Admin/PhoneModelImageAdd";
import PhoneModelImageEdit from "./Pages/Admin/PhoneModelImageEdit";
import SlideShowList from "./Pages/Admin/SlideShowList";
import SlideShowAdd from "./Pages/Admin/SlideShowAdd";
import SlideShowEdit from "./Pages/Admin/SlideShowEdit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PhoneModelByBrand/:BrandId" element={<PhoneModelByBrand />} />
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
          <Route path="/Admin/PhoneModel" element={<PhoneModelList />}/>
          <Route path="/Admin/PhoneModel/Add" element={<PhoneModelAdd />} />
          <Route path="/Admin/PhoneModel/Edit/:id" element={<PhoneModelEdit />} />
          <Route path="/Admin/Phone/:PhoneModelId" element={<PhoneList />}/>
          <Route path="/Admin/Phone/:PhoneModelId/Add" element={<PhoneAdd />}/>
          <Route path="/Admin/Phone/Edit/:id" element={<PhoneEdit />}/>
          <Route path="/Admin/PhoneModelImage/:PhoneModelId" element={<PhoneModelImageList />}/>
          <Route path="/Admin/PhoneModelImage/:PhoneModelId/Add" element={<PhoneModelImageAdd />}/>
          <Route path="/Admin/PhoneModelImage/Edit/:id" element={<PhoneModelImageEdit />}/>
          <Route path="/Admin/SlideShow" element={<SlideShowList />}/>
          <Route path="/Admin/SlideShow/Add" element={<SlideShowAdd />} />
          <Route path="/Admin/SlideShow/Edit/:id" element={<SlideShowEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
