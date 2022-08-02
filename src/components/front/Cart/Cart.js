import React from 'react';
import "./Cart.css"
const Cart = ({cartItem,handleAddProduct,handleRemoveProduct,handleCartClearence}) => {

    const totalPrice = cartItem.reduce((price,item)=> price + item.quantity * item.price,0);
    return (
        <div className='cart-item'>
            <h2 className='cart-item-header'>Cart Item</h2>
            <div className='clear-cart'>
                {cartItem.length >=1 &&(
                    <button className='clear-cart-button' onClick={handleCartClearence}>Clear Cart</button>
                )}
            </div>

            {cartItem.length === 0 &&(
                <div className='cart-item-empty'>No items are added. </div>
            )}
            <div>
                {cartItem.map((item)=>{
                    <div key={item.id} className="cart-item-list">
                        <img className='cart-item-image' src={item.image} alt={item.name} />
                        <div className='cart-items-name'>{item.name}</div>
                        <div className='cart-items-function'>
                            <button className='cart-items-add'
                            onClick={()=>handleAddProduct(item)}>+</button>
                            <button className='cart-items-add'
                            onClick={()=>handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className='cart-item-price'>
                            {item.quantity} * {item.price}
                        </div>
                    </div>
                })}
            </div>
            <div className='cart-items-total-price-name'>
                Total price
                <div className='cart-items-total-price'>{totalPrice}</div>
            </div>
        </div>
    )
}
export default Cart