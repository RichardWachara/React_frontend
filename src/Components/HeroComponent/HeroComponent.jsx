import React from "react" ;
import {Link} from 'react-router-dom'

const HeroComponent = () => {

  return (
    <section className='hero-section'>
    <div className="hero bg-width">
      <h4>Casio Timeless Pieces</h4>
      <h2>Precision and style</h2>
      <h1>hand in hand.</h1>
      <p>Save more with coupons & up-to 70% off!</p>
      <Link className="button">Shop now</Link>
    </div>
    </section>
  );
};

export default HeroComponent;
