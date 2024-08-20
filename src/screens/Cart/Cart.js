import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = ({
  cartProduct,
  setCartProduct,
  selectedQuantity,
  setSelectedQuantity,
}) => {
  const [subTotal,setSubTotal] = useState(0);
  useEffect(()=>{
    let total = 0;

    for(let i=0; i<cartProduct.length;i++){
      console.log("cartProduct::",cartProduct);
      
      total = total + (cartProduct[i].quantity * cartProduct[i].price);
    }

    setSubTotal(total);
    console.log("total",total);
    
  },[cartProduct])
  return (
    <div style={{ padding: "10px" }}>
      <div>
        <h1>Your Cart</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1.5" }} className="CartDetails">
          <div style={{}}>
            {cartProduct.length === 0 ? (
              <div>Cart is Empty!</div>
            ) : (
              <div style={{ padding: "20px" }}>
                {cartProduct.map((cartData) => {
                  return (
                    <CartItem
                      setSelectedQuantity={setSelectedQuantity}
                      selectedQuantity={selectedQuantity}
                      cartProduct={cartProduct}
                      setCartProduct={setCartProduct}
                      cartData={cartData}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div style={{ flex: "1" }} className="CartDetails">
          <div style={{ padding: "30px" }}>
            <div
              style={{
                border: "2px solid grey",
                padding: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                borderRadius: "20px",
              }}
            >
              <div className="summary">
                <h3 style={{ flex: "1" }}>Order Summary</h3>
                <div style={{ flex: "2", height: "100px" }}>Subtotal: {subTotal}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: "1",
                  }}
                >
                  <button className="checkoutBtn">Go to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
