import React from "react";
import { images } from "../../utils/constants/images";

const HomeBanner = () => {
  return (
    <div style={{ background: "#F2F0F1", display: "flex", height: "500px" }}>
      <div
        style={{
          flex: 1.3,
          padding: "65px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "58px" }}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </span>
        <p style={{ color: "#00000060" }}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button
          style={{
            cursor: "pointer",
            background: "black",
            height: "42px",
            width: "200px",
            borderRadius: "62px",
            border: "none",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Shop Now
        </button>

        <div style={{ display: "flex", marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              borderRight: "1px solid #00000060",
              marginRight: "50px",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 24 }}>200+</span>
            <span style={{ color: "#00000060", fontSize: 13 }}>
              International Brands
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              borderRight: "1px solid #00000060",
              marginRight: "50px",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 24 }}>2,000+</span>
            <span style={{ color: "#00000060", fontSize: 13 }}>
              High-Quality Products
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 24 }}>30,000+</span>
            <span style={{ color: "#00000060", fontSize: 13 }}>
              Happy Customers
            </span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, height:'500px' }}>
        <img
          alt="bannerImage"
          src={images.bannerImage}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
    
  );
};

export default HomeBanner;
