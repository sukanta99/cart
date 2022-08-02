import './App.css';
import data from '../src/components/back/Data/Data';
import Header from '../src/components/front/Navbar/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import RoutesLink from "./components/front/RoutesLink/RoutesLink"
import React,{ useState } from 'react';
import Products from './components/front/Products/Products';

function App() {
  const {cartList} = data;
  const [cartItem,setCartItem]= useState([]);
  const handleAddProduct = (product) =>{
    const productExist = cartItem.find((item)=> item.id === product.id);
    if(productExist){
      setCartItem(
        cartItem.map((item) =>
        item.id === product.id?{...productExist,quentity:productExist.quentity + 1}:item)
      );
    }
    else{
      setCartItem([...cartItem,{...product,quentity:1}])
    }
  };
  const handleRemoveProduct = (product)=>{
    const productExist = cartItem.find((item)=> item.id === product.id);
    if(productExist.quentity===1){
      setCartItem(cartItem.filter((item)=>item.id !==product.id));
    } else{
      setCartItem(
        cartItem.map((item)=>
        item.id === product.id
        ?{...productExist,quantity:productExist.quantity - 1}:item)
      )
    }
  }
  const handleCartClearence = () => {
    setCartItem([]);
  }
  return (
    <div className="App">
      <Router>
      <Header  cartItem={cartItem}/>
      <RoutesLink 
      cartList={cartList} 
      cartItem={cartItem} 
      handleAddProduct={handleAddProduct} 
      handleRemoveProduct = {handleRemoveProduct}
      handleCartClearence = {handleCartClearence}
      />
      </Router>
    </div>
  );
}

export default App;
