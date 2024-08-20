import React from "react";

const CartItem = ({
  cartData,
  setCartProduct,
  cartProduct,
  selectedQuantity,
  setSelectedQuantity,
}) => {
  const increaseQuantity = () => {
    setSelectedQuantity(selectedQuantity+1)
    const checkProductAlreadyInCart = cartProduct.find(
      (item) => cartData.id === item.id
    );

    if (checkProductAlreadyInCart) {
      const updateCartData = cartProduct.map((item) => {
        if (cartData.id === item.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setCartProduct(updateCartData);
    } else {
      setCartProduct([
        ...cartProduct,
        {
          ...cartData,
          quantity: 1,
        },
      ]);
    }
  };

  const decreaseQuantity = () =>{

  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "500px",
          borderBottom: "1px solid grey",
          padding: "10px",
        }}
      >
        <div style={{display:'flex',flexDirection:'column', width:'200px'}}>
        <img src={cartData.image} style={{ height: "60px", width: "60px" }} />
        {cartData.title.slice(0,20)}...
        <h5>${cartData.price}</h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <span>x</span>
          <button
            style={{
              display: "flex",
              height: "30px",
              alignItems: "center",
              justifyContent: "space-around",
              color: "white",
            }}
            className="button"
          >
            <span onClick={increaseQuantity} style={{ cursor: "pointer" }}>
              +
            </span>
            {cartData.quantity}
            <span onClick={decreaseQuantity} style={{ cursor: "pointer" }}>-</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
