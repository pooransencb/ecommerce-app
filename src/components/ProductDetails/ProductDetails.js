import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductDetails = () => {
  return (
    <div>
        <h2 style={{textAlign:'center'}}>NEW ARRIVALS</h2>
        <div style={{display:'grid',  gridTemplateColumns: "auto auto auto auto",  padding:'25px 120px', gap:'20px'}}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default ProductDetails