import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import Dp from "./pages/Dp";
import Sale from "./pages/Sale";
import NewIn from "./pages/NewIn";
import Clothing from './pages/clothing';
import Dresses from './pages/Dresses';
import Petite from './pages/Petite';
import ShoeAccessories from './pages/ShoeAccessories';
import Beauty from './pages/Beauty';
import Home from './pages/Home';
import Brands from './pages/Brands';
import LoginPage from "./pages/LoginPage";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import Products from "./admin/Products";
import CreateProduct from "./admin/CreateProduct";
import Users from "./admin/Users";
import CreateUser from "./admin/CreateUser";
import Categories from "./admin/Categories";
import CreateCategory from "./admin/CreateCategory";
import AdminRegister from "./admin/AdminRegister";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dp />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/new-in" element={<NewIn />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/petite" element={<Petite />} />
        <Route path="/shoes-accessories" element={<ShoeAccessories />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/home" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/products/create" element={<CreateProduct />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/users/create" element={<CreateUser />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/categories/create" element={<CreateCategory />} />
        <Route path="/admin/register" element={<AdminRegister />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;