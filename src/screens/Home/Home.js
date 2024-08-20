import HomeBanner from "../../components/HomeBanner/HomeBanner";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import "./home.css";
import ProductDescription from "../ProductDescription/ProductDescription";
import Cart from "../Cart/Cart";

const Home = ({
  selectedProduct,
  setSelectedProduct,
  setSelectedQuantity,
  selectedQuantity,
  showCart,
  cartProduct,
  setCartProduct,
}) => {
  return (
    <div>
      {!selectedProduct && !showCart && <HomeBanner />}
      {!selectedProduct && !showCart && (
        <ProductDetails setSelectedProduct={setSelectedProduct} />
      )}
      {selectedProduct && !showCart && (
        <ProductDescription
          cartProduct={cartProduct}
          setCartProduct={setCartProduct}
          selectedProduct={selectedProduct}
          setSelectedQuantity={setSelectedQuantity}
          selectedQuantity={selectedQuantity}
        />
      )}
      {showCart && (
        <Cart
          cartProduct={cartProduct}
          setCartProduct={setCartProduct}
          setSelectedQuantity={setSelectedQuantity}
          selectedQuantity={selectedQuantity}
        />
      )}
    </div>
  );
};

export default Home;
