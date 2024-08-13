import React, { useState } from "react";
import Home from "./screens/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [selectedProduct,setSelectedProduct] = useState();
  return (
    <div>
      <Header setSelectedProduct={setSelectedProduct}/>
      <Home selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
      <Footer/>
    </div>
  );
};

export default App;
