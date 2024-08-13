import React, { useEffect } from 'react'

const ProductDescription = ({selectedProduct}) => {
    useEffect(()=>{
        console.log("selectedProduct::",selectedProduct);
    },[])
  return (
    <div>{selectedProduct.title}</div>
  )
}

export default ProductDescription