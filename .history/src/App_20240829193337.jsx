import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Product from "./Product";
import ShoppingCart from './ShoppingCart';
import SignUp from './SignUp';
import Login from './Login'
import Banner from "./Banner";
import './App.css';
import commerce from './lib/commerce';
import { useEffect, useState } from 'react';
import { Switch } from '@mui/material';


function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState(1);


const fetchProducts = async()=>{
  const response = await commerce.products.list()
  setProductsList(response.data)
}
const fetchCart = async()=>{
setCart(await commerce.cart.retrieve())
}


const addToCart = async(productId,  quantity)=>{
  console.log('addTocart Started ')
  const response = await commerce.cart.add(productId, quantity)
  console.log(response);
  console.log(response.cart);
  setCart(cart+1)
}


useEffect(() => {
  fetchProducts();
  fetchCart(); 
  // Fetch the cart initially
}, []);

  return (
    <Router>
      <div className='App'>
        <Header cart={cart} />
       
        <Routes>
          <Route 
            exact 
            path="/" 
            element={
              <>
                <div className='banner'>
                  <Banner />
                </div>
                <Product productsList = {productsList}  addToCart = {addToCart}
                />
                
              </>
            } 
          />
          <Route 
            exact 
            path='/cart' 
            element={<ShoppingCart   cart={cart}  />} 
          />
          <Route 
            exact 
            path='/signup' 
            element={<SignUp />} 
          />
          {/* <Route 
            exact 
            path='/login' 
            element={<Login />} 
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;





