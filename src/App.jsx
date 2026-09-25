import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      </Routes>
    </BrowserRouter>

  );
}

export default App;