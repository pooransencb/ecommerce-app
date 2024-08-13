import React, { useEffect } from "react";

const ProductCard = ({productValue,setSelectedProduct}) => {

  useEffect(()=>{
    // console.log("Testing::",productValue);
  },[])

  return (
    <div style={{display:"flex",flexDirection:'column'}} onClick={()=>{
      setSelectedProduct(productValue);
    }}>
      <div style={{ background: "#F0EEED", borderRadius:'15px', padding:'20px', textAlign:'center' }}>
        <img style={{height:'200px', width:'180px', objectFit:'contain'}} src={productValue.image} />
      </div>
      <span style={{fontWeight:'bold', marginTop:'5px'}}>{productValue.title}</span>
      <span>Price: {productValue.price}</span>
    </div>
  );
};

export default ProductCard;
