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
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import BusinessSummary from './Pages/BusinessSummary/BusinessSummary';
import Offer from './Pages/Offer/Offer';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div className='max-w-7x1 mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/businessSummary' element={<BusinessSummary/>}></Route>
        <Route path='/offer' element={<Offer/>}></Route>
        <Route path='/product/:productId' element={
           <RequireAuth>
             <Purchase/>
           </RequireAuth>
         
        }></Route>
          <Route path='/pay/:order' element={ <RequireAuth><Payment/></RequireAuth>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }>
          <Route index element={<MyProfile/>}></Route>
          <Route path='orders' element={<MyOrders/>}></Route>
          <Route path='review' element={<MyReview/>}></Route>
          <Route path='profile' element={<MyProfile/>}></Route>
          {/* <Route path='manage' element={<ManageOrder/>}></Route> */}
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
