import React from 'react'
import './Banner.css'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <section className='banner-section'>
      <div className="banner bg-width-nav">
        <h4>Festive Season Offers</h4>
        <h2>The Black Friday Sales</h2>
        <p>The sales are only available till 30<sup>th</sup>November 2024 - get up-to <span>50% OFF</span></p>
        <Link className='banner-button'>Explore More</Link>
      </div>
    </section>
  )
}

export default Banner
