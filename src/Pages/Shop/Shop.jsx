import "./Shop.css";
import ProductFeaturingComponent from "../../Components/ProductFeaturingComponent/ProductFeaturingComponent";
import "swiper/css";
import "swiper/css/navigation";

const Shop = () => {
  return (
    <>
      <section className="shop-section">
        <div className="shop bg-width">
          <h4>Casio Timeless Pieces</h4>
          <h2>Precision and style</h2>
          <h1>hand in hand.</h1>
          <p>Save more with coupons & up-to 70% off!</p>
        </div>
      </section>
      <ProductFeaturingComponent border="1px solid gray" />
      
    </>
  );
};

export default Shop;
