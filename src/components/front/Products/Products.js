import React from "react";
import '../Products/Products.css'
 const Products= ({cartList,handleAddProduct}) =>{
    console.log(cartList.image,"cartlist")
    return(
        <div className="products">
            {cartList.map(cartLists =>{
                return(
                    <div className="card">
                        <div>
                            <img className="product-image" src={cartLists.image} alt={cartList.name} />
                        </div>
                        <div>
                            <h3 className="product-name">{cartLists.name}</h3>
                        </div>
                        <div>
                            <h3 className="product-color">{cartLists.color}</h3>
                        </div>
                        <div>
                            <h3 className="product-price">${cartLists.price}</h3>
                        </div>
                        <div>
                            <button className="product-add-button" onClick={()=>handleAddProduct(cartLists)}>Add to Cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
 }
 export default Products