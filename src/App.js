import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Home/Blog/Blog';
import Login from './Pages/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import Product from './Pages/Product/Product';
import Register from './Pages/Login/Register';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className='max-w-7x1 mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/purchase' element={<Purchase/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
