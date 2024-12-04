import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";
import NavBar from "../../Components/Utils/NavBar/NavBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import Watch from "../../assets/verifiedWatch.webp";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { RxValue } from "react-icons/rx";

const Checkout = () => {

  const BASE_URL = import.meta.env.VITE_BASE_URL

  const [isShipment, setisShipment] = useState(false);
  const [isPayment, setisPayment] = useState(false);
  const [isMpesa, setisMpesa] = useState(false);

  const showMpesa = () => {
    return isMpesa ? "showMpesaSelect" : "showMpesa";
  };

  const showShipmentForm = () => {
    return isShipment ? "show" : "";
  };

  const showPaymentForm = () => {
    return isPayment ? "show" : "";
  };

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

  // console.log(products);

  const [paymentData, setpaymentData] = useState({
    first_name: "",
    last_name: "",
    delivery_address: "",
    phone_number: "",
    email_address: "",
    mpesa: false,
  });

  const collectPaymentData = (event) => {
    event.preventDefault();
    const { name, value, checked } = event.target;
    console.log(checked);
    setpaymentData({
      ...paymentData,
      [name]: value,
      mpesa: checked,
    });
  };

  const handlePayments = async (event) => {
    console.log('Clicked')
    event.preventDefault();
    paymentData.amount = Number(products.price);
    if (paymentData.mpesa) {
      console.log("Paying with mpesa: ");
      try {
        const url = `${BASE_URL}/api/payments/initiate-payment/`
        console.log(url)
        const response = await axios.post(
          url,
          paymentData
        )
      } catch (error) {
        alert("Something went wrong");
      }
    } else {
      console.log("Not paying with mpesa");
    }
  };

  return (
    <>
      <NavBar />
      <section className="checkout__section bg-width">
        <div className="checkout__details">
          <div className="checkout__documents">
            <h3>Checkout</h3>
            <div className="deliver">
              <h4>Delivery</h4>
              <div className="delivery__details">
                <span className="span__style">
                  Arrival est: 4-7 business days
                </span>
                <span className="span__gray span__style">
                  Your watch ships to us first for authentication
                </span>
              </div>
              <div
                className="shipping__container"
                onClick={() => {
                  setisShipment(!isShipment);
                }}
              >
                <div className="shipping__details">
                  <span className="span__style">Ship to</span>
                  <span className="span__gray span__style">
                    Add a shipping address
                  </span>
                </div>
                <MdKeyboardArrowRight />
              </div>
              <div className="secure__payment">
                <div className="secure__text">
                  <RiSecurePaymentLine />
                  <span>Safe and Secure checkout</span>
                </div>
                <div className="powered">
                  Powered by <strong>Mpesa</strong>
                </div>
              </div>
            </div>
            <div className="deliver">
              <h4>Payment</h4>
              <div
                className="shipping__container"
                onClick={() => {
                  setisPayment(!isPayment);
                }}
              >
                <div className={`shipping__details`}>
                  <span className="span__style">Pay with</span>
                  <span className="span__gray span__style">
                    Add a payment method
                  </span>
                </div>
                <div className={`${showMpesa()}`}>
                  <span className="span__gray span__style">Mpesa</span>
                </div>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <div className="deliver">
              <h4>Discount Code</h4>
              <div className="discount__code">
                <input type="text" placeholder="Enter discount code" />
                <button>APPLY CODE</button>
              </div>
            </div>
            <div className="deliver">
              <h4>Bonus Purchases</h4>
              <div className="bonus__purchase">
                <div className="bonus__top">
                  <div className="shipping__details">
                    <span className="span__style">Watch Protector</span>
                    <span className="span__gray span__style added__cost">
                      $250
                    </span>
                    <span className="span__gray span__style">
                      Worry-free buying with concierge support and 1 year watch
                      warranty Learn more
                    </span>
                  </div>
                  <div className="image">
                    <img src={Watch} alt="" />
                  </div>
                </div>
                <Link className="button_1">add to purchase</Link>
              </div>
            </div>
            <div className="deliver">
              <h4>Returns</h4>
              <div className="delivery__details">
                <span className="span__style">24-hour return policy</span>
                <span className="span__gray span__style">
                  All sold watches go through our rigorous, in-house
                  authentication process before they’re shipped to you. For
                  added protection, you have 24 hours after delivery to submit a
                  return request to Bezel. Full refunds are available for any
                  functional issues or deviations from the condition listed in
                  the purchase description.
                </span>
              </div>
              <div className="delivery__details margin__b1">
                <span className="span__style">Authentication</span>
                <span className="span__gray span__style">
                  All watches ship to us first for thorough authentication. We
                  then ship the watch to you, including a Bezel document of
                  authentication.
                </span>
              </div>
            </div>
          </div>
          <div className="checkout__summary">
            <div className="checkout_card">
              <h2>Summary</h2>
              <div className="checkout_card_title">
                <div className="c_card_title">
                  <span>{products.name}</span>
                  <span className="span__style span__gray">
                    {products.slug}
                  </span>
                </div>
                <img
                  src={`${BASE_URL}/${products.image}`}
                  alt=""
                />
              </div>
              <div className="purchase_totals">
                <div className="totals">
                  <span className="title span__gray">Purchase Price</span>
                  <span className="pricing">{products.price}</span>
                </div>
                <div className="totals">
                  <span className="title span__gray">
                    Insured Overnight Shipping
                  </span>
                  <span className="pricing">---</span>
                </div>
                <div className="totals">
                  <span className="title span__gray">
                    Authentication Report
                  </span>
                  <span className="pricing">Free</span>
                </div>
                <div className="totals">
                  <span className="title span__gray">
                    Payment Processing Fee
                  </span>
                  <span className="pricing">Free</span>
                </div>
                <div className="totals">
                  <span className="title span__gray">Estimated Sales Tax</span>
                  <span className="pricing">--</span>
                </div>
              </div>
              <div className="total_cost">
                <div className="totals">
                  <span className="title span__gray">Estimated Total</span>
                  <span className="pricing">{products.price}</span>
                </div>
                <div className="totals bg-settings">
                  <span className="title span__gray">You're saving</span>
                  <span className="pricing">{products.price * 0.2}</span>
                </div>
                <Link
                  onClick={handlePayments}
                  className="button_1 button_bg mobile_display"
                >
                  Submit Purchase
                </Link>
              </div>
            </div>
          </div>
          <div className="mobile__submit__button">
            <div className="mobile_bt_container">
              <Link onClick={handlePayments} className="button_1 button_bg">Submit Purchase</Link>
            </div>
          </div>
        </div>
        <div className={`form__sidebar ${showShipmentForm()}`}>
          <div className="form__container">
            <div className="form_header">
              <MdClose
                className="icon"
                onClick={() => setisShipment(!isShipment)}
              />
            </div>
            <h3>New Address</h3>
            <form className="shipment_form">
              <label>
                First Name:{" "}
                <input
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  onChange={collectPaymentData}
                />
              </label>
              <label>
                Last Name:{" "}
                <input
                  onChange={collectPaymentData}
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                />
              </label>
              <label>
                Delivery Address (Pickup Location):{" "}
                <input
                  onChange={collectPaymentData}
                  type="text"
                  placeholder="Delivery Address"
                  name="delivery_address"
                />
              </label>
              <label>
                Phone:{" "}
                <input
                  onChange={collectPaymentData}
                  type="text"
                  placeholder="Phone:"
                  name="phone_number"
                />
              </label>
              <label>
                Email Address:{" "}
                <input
                  onChange={collectPaymentData}
                  type="text"
                  placeholder="Email Address"
                  name="email_address"
                />
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(paymentData);
                  setisShipment(!isShipment);
                }}
                className="form_button"
              >
                Add Shipping address
              </button>
            </form>
          </div>
        </div>
        <div className={`form__sidebar ${showPaymentForm()}`}>
          <div className="form__container">
            <div className="form_header">
              <MdClose
                className="icon"
                onClick={() => setisPayment(!isPayment)}
              />
            </div>
            <h3>Payment</h3>
            <div className="payment_methods">
              <div className="mpesa__payment">
                <label htmlFor="">
                  {" "}
                  Mpesa{" "}
                  <input
                    type="checkbox"
                    name="mpesa"
                    checked={paymentData.mpesa}
                    onChange={collectPaymentData}
                    onClick={() => {
                      setisPayment(!isPayment);
                      setisMpesa(!isMpesa);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
