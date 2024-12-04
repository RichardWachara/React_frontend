

import Hero from "../../Section/Hero/Hero";
import Banner from "../../Section/Banner/Banner";
import Testimonial from "../../Section/Testimonial/Testimonial";
import About from "../../Section/About/About";
import ProductFeaturingComponent from "../../Components/ProductFeaturingComponent/ProductFeaturingComponent";

const Home = () => {



  return (
    <>
      <Hero />
      <ProductFeaturingComponent
        title="Recommended For You"
        subtitle="The Best of The Best Just For You"
        border="none"
      />
      <Banner />
      <ProductFeaturingComponent
        title="New In"
        subtitle="New Stock in Store"
        border="1px solid gray"
      />
      <Testimonial />
      <About />
    </>
  );
};

export default Home;
