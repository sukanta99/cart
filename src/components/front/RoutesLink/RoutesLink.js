import React from "react";
import Products from "../Products/Products";
import Cart from '../Cart/Cart'
import {Route,Switch} from 'react-router-dom';
import Header from "../Navbar/Header";
//import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
//import ReactDOM from "react-dom/client";
//import { Routes ,Route } from 'react-router-dom';
const RoutesLink = ({cartList,cartItem,handleAddProduct,handleRemoveProduct,handleCartClearence}) => {
    return (
       <div>
        <Switch>
            <Route exact path='/' >
                <Products cartList={cartList} handleAddProduct={handleAddProduct}/>
            </Route>
            <Route path='/cart'  >
                <Cart />
                <Cart cartItem={cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearence = {handleCartClearence}/>
            </Route>
        </Switch>
       </div>
    );
};
export default RoutesLink