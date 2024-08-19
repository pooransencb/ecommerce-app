import React, { useState } from "react";
import Home from "./screens/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [selectedProduct,setSelectedProduct] = useState();
  const [selectedQuantity,setSelectedQuantity] = useState(0);
  const [showCart,setShowCart] = useState(false);
  return (
    <div>
      <Header setSelectedProduct={setSelectedProduct} selectedQuantity={selectedQuantity} setShowCart={setShowCart}/>
      <Home selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} setSelectedQuantity={setSelectedQuantity} selectedQuantity={selectedQuantity} showCart={showCart}/>
      <Footer/>
    </div>
  );
};

export default App;
