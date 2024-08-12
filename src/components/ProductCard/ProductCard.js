import React from "react";

const ProductCard = () => {
  return (
    <div style={{display:"flex",flexDirection:'column'}}>
      <div style={{ background: "#F0EEED", borderRadius:'15px', padding:'20px', textAlign:'center' }}>
        <img style={{height:'200px', width:'180px', objectFit:'contain'}} src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/w/4/o/t2-pro-5g-v2321-vivo-original-imagtknhfw4adusm.jpeg?q=70&crop=false" />
      </div>
      <span style={{fontWeight:'bold', marginTop:'5px'}}>Vivo Phone</span>
      <span>Price: 20</span>
    </div>
  );
};

export default ProductCard;
