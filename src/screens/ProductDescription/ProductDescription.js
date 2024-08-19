import React, { useEffect } from "react";
import "./ProductDescription.css";

const ProductDescription = ({ selectedProduct, setSelectedQuantity,selectedQuantity }) => {
  useEffect(() => {
    console.log("ProductData::", selectedProduct);
  }, [selectedProduct]);

  const handleAddToCart = () =>{
    setSelectedQuantity(selectedQuantity+1);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", padding: "50px", width: "650px" }}>
        <div
          style={{
            width: "220px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={selectedProduct.image}
            style={{ height: "200px", width: "200px", objectFit: "contain" }}
            alt="product-image"
          />
          <span>{selectedProduct.title}</span>
        </div>
        <div style={{ flex: 2.5 }}>
          <h4>Price: {selectedProduct.price}$</h4>
          <p>{selectedProduct.description}</p>
          <button
          onClick={handleAddToCart}
            className="click-effect"
            style={{
              background: "black",
              color: "white",
              width: "200px",
              borderRadius: "25px",
              padding: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
