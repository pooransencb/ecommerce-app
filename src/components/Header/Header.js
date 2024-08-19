import React, { useState } from "react";
import "./header.css";
import { images } from "../../utils/constants/images";

const Header = ({ setSelectedProduct, selectedQuantity, setShowCart }) => {
  // 1. state number 2. state set function 3. assign value in useState
  const [showOfferHeader, setShowOfferHeader] = useState(true);

  const closeHeaderOffer = () => {
    setShowOfferHeader(false);
  };
  return (
    <div>
      {showOfferHeader === true && (
        <div
          style={{
            background: "black",
            color: "white",
            textAlign: "center",
            padding: "8px",
            fontSize: "13px",
          }}
        >
          Sign up and get 20% off to your first order.{" "}
          <span style={{ fontWeight: "bold" }}>Sign Up Now</span>
          <span
            onClick={closeHeaderOffer}
            style={{
              fontWeight: "bold",
              position: "absolute",
              right: "100px",
              cursor: "pointer",
            }}
          >
            X
          </span>
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <img
          onClick={() => {
            setSelectedProduct(undefined);
            setShowCart(false);
          }}
          style={{ height: "24px", width: "160px", objectFit: "contain" }}
          src={images.logoImage}
          alt="logo-image"
        />

        <div style={{ listStyle: "none", display: "flex", gap: "30px" }}>
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </div>

        <div
          style={{
            background: "#F0F0F0",
            borderRadius: "25px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <img
            src={images.search}
            style={{ height: "20px", width: "20px", objectFit: "contain" }}
            alt="search-icon"
          />
          <input
            className="seach-input-box"
            placeholder="Search for products..."
            type="text"
            style={{
              paddingLeft: "10px",
              background: "transparent",
              width: "400px",
              border: "none",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ position: "relative", cursor:'pointer' }} onClick={()=>{setShowCart(true)}}>
            <span
              style={{
                position: "absolute",
                right: "-5px",
                bottom: "12px",
                background: "black",
                color: "white",
                width: "20px",
                height:'20px',
                borderRadius: "25px",
                fontSize: "12px",
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontWeight: "bold",
              }}
            >
              {selectedQuantity}
            </span>
            <img
              src={images.cartImage}
              style={{ height: "20px", width: "20px", objectFit: "contain" }}
              alt="cart-image"
            />
          </div>
          <img
            src={images.profileImage}
            style={{ height: "20px", width: "20px", objectFit: "contain" }}
            alt="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
