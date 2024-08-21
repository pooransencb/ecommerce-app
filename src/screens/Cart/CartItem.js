import React from "react";

const CartItem = ({
  cartData,
  setCartProduct,
  cartProduct,
  selectedQuantity,
  setSelectedQuantity,
}) => {
  const handleQuantity = (increase) => {
    const checkProductAlreadyInCart = cartProduct.find(
      (item) => cartData.id === item.id
    );
    if (checkProductAlreadyInCart.quantity !== 1 || increase===true) {
      setSelectedQuantity(
        increase ? selectedQuantity + 1 : selectedQuantity - 1
      );
      const updateCartData = cartProduct.map((item) => {
        if (cartData.id === item.id) {
          return {
            ...item,
            quantity: increase === true ? item.quantity + 1 : item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      setCartProduct(updateCartData);
    }
  };

  const increaseQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
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
  };

  const decreaseQuantity = () => {
    const checkProductAlreadyInCart = cartProduct.find(
      (item) => cartData.id === item.id
    );

    if (checkProductAlreadyInCart.quantity !== 1) {
      setSelectedQuantity(selectedQuantity - 1);
      const updateCartData = cartProduct.map((item) => {
        if (cartData.id === item.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      setCartProduct(updateCartData);
    }
  };

  const deleteProduct = () => {
    const updatedCartData = cartProduct.filter(
      (item) => cartData.id !== item.id
    );
    setCartProduct(updatedCartData);
  };
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
        <div
          style={{ display: "flex", flexDirection: "column", width: "200px" }}
        >
          <img src={cartData.image} style={{ height: "60px", width: "60px" }} />
          {cartData.title.slice(0, 20)}...
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
          <span onClick={deleteProduct}>x</span>
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
            <span onClick={decreaseQuantity} style={{ cursor: "pointer" }}>
              -
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
