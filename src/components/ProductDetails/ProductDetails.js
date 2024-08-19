import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ProductDetails = ({setSelectedProduct}) => {
  
  const [productData,setProductData] = useState([]);


  const getProductData = () =>{
    fetch('https://fakestoreapi.com/products').then((response)=>{
      console.log("Response::",response);
      
      return response.json();
    }).then((data)=>{
      console.log("Data::",data);
      setProductData(data);
      
    }).catch((error)=>{
      console.log("error",error);
      
    })
  }

  useEffect(()=>{
    getProductData();
  },[])

  useEffect(()=>{
    // console.log("Product Data::",productData);

  },[productData])

  return (
    <div>
        <h2 style={{textAlign:'center'}}>NEW ARRIVALS</h2>
        <div style={{display:'grid',  gridTemplateColumns: "auto auto auto auto",  padding:'25px 120px', gap:'20px'}}>
          {productData.map((productItem)=>{
            return <ProductCard productValue={productItem} setSelectedProduct={setSelectedProduct}/>
          })}
          {/* {productData.map((productItem)=>{
            return <ProductCard productValue={productItem} setSelectedProduct={setSelectedProduct}/>
          })} */}
        </div>

    </div>
  )
}

export default ProductDetails