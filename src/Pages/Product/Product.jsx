import React, { useState, useEffect, useContext } from "react";
import watch from "../../assets/Watch3.webp";
import "./Product.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductFeaturingComponent from "../../Components/ProductFeaturingComponent/ProductFeaturingComponent";
import axios from "axios";
import AuthContext from "../../Components/Utils/Context/AuthContext";

const Product = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const [products, setProducts] = useState([]);
  const currentLocation = useLocation();
  const productId = Number(
    new URLSearchParams(currentLocation.search).get("id")
  );

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/products/${productId}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [productId]);

  const imageURL = [
    products.image,
    ...(products.additional_product_images?.map((imgObj) => imgObj.image) ||
      []),
    // ...(products.additional_product_images?.map(imageObj => image.imageObj.image) || [])
  ];

  // console.log(imageURL)

  const [isMenuShowing, setisMenuShowing] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(clicked){
      console.log("Checking for user")
      console.log(clicked)
      if(user){
        navigate(`/checkout?id=${products.id}`)
      }
      else if(clicked){
        setisMenuShowing(true);
      }
    }
    else{
      setisMenuShowing(false);
    }
  },[isMenuShowing, clicked])


  return (
    <>
      <section className="product-section bg-width">
        <div className="left__section">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={300}
            loop={true}
          >
            {imageURL.map((image) => {
              return (
                <SwiperSlide key={image}>
                  <img
                    src={`${BASE_URL}${image}`}
                    alt="product-image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="right__section">
          <h2>{products.name}</h2>
          <h3>{products.price}</h3>
          <h4>Product Details</h4>
          <p>{products.description}</p>
          <div className="last">
            <input type="number" value="1" />
            <div className="buttons">
              <Link>ADD TO CART</Link>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setClicked(true);
                }}
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
        <div className={`buynow__section ${isMenuShowing ? "active" : ""}`}>
          <div className="buynow__header">
            <div className="buynow__nav">
              <Link>MWANGEAR</Link>
              <Link>
                <MdClose
                  onClick={(e) => {
                    e.preventDefault();
                    setClicked(false);
                  }}
                  className="icon"
                />
              </Link>
            </div>
            <h3>Check-out and authentication is handled by Bezel</h3>
          </div>
          <div className="buynow__content">
            <p>
              <span>100% authenticated, in-house by Bezel</span> We ship your
              watch to Bezel’s in-house team of watch experts for industry
              leading authentication before it gets to you. Learn more
            </p>
            <p>
              <span>Pay with credit card, wire, or with Affirm</span> Bezel
              securely handles the purchase flow and allows you to check out
              with any payment method you’d like, including credit cards.
            </p>
            <p>
              <span>Bezel Concierge is available for any questions</span>The
              Bezel Concierge is here to answer any questions you have from the
              purchase process to ownership
            </p>
          </div>
          <div className="buynow__buttons">
            <Link to="/signin?source=buy" className="create_button">
              Create an Account
            </Link>
            <p>
              I have an account already{" "}
              <Link to={`/login?source=buy&&id=${products.id}`}>Log in</Link>
            </p>
          </div>
        </div>
      </section>
      <ProductFeaturingComponent
        title="You May also like:"
        border="1px solid gray"
      />
    </>
  );
};

export default Product;
