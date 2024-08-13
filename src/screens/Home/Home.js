import { useState } from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import "./home.css";
import ProductDescription from "../ProductDescription/ProductDescription";

const Home = ({selectedProduct,setSelectedProduct}) => {
  return <div>
    {!selectedProduct && <HomeBanner/>}
    {!selectedProduct && <ProductDetails setSelectedProduct={setSelectedProduct}/>}
    {selectedProduct && <ProductDescription selectedProduct={selectedProduct}/>}
  </div>
};

export default Home;
