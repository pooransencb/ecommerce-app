import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <div>
        <h1>Your Cart</h1>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{ background: "pink", flex: "1.5" }}
          className="CartDetails"
        >
          <div style={{ padding: "75px"}}>
            <div style={{border:'2px solid grey', padding: '20px', borderRadius: '20px'}}>
            <div className="cart">images<div className="cross">x</div><button style={{display: "flex", justifyContent: "space-around"}} className="button"><div style={{cursor: 'pointer'}}>+</div>1<div style={{cursor: 'pointer'}}>-</div></button></div>
            <div className="cart">images<div className="cross">x</div><button style={{display: "flex", justifyContent: "space-around"}} className="button"><div style={{cursor: 'pointer'}}>+</div>1<div style={{cursor: 'pointer'}}>-</div></button></div>
            <div className="cart">images<div className="cross">x</div><button style={{display: "flex", justifyContent: "space-around"}} className="button"><div style={{cursor: 'pointer'}}>+</div>1<div style={{cursor: 'pointer'}}>-</div></button></div>
          </div>
          </div>
        </div>
        <div style={{ background: "lightblue", flex: "1"}} className="CartDetails">
          <div style={{padding: '30px'}}>
          <div style={{border:'2px solid grey', padding: '20px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '20px'}}>
          <div className="summary">
            <h3 style={{flex: '1', background: 'limegreen'}}>
          Order Summary
          </h3>
          <div style={{flex: '2', height: '100px'}}>Subtotal</div>
          <div style={{display: 'flex', justifyContent: 'center', flex: '1'}}>
          <button className="checkoutBtn" >Go to Checkout</button>
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