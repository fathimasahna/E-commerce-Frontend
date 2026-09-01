import React from 'react'
import { Link } from 'react-router-dom'
import Public_Navbar from './Public_Navbar'
import './PublicHome.css'

const PublicHome = () => {
  return (
    <div className="publicPage">

      {/* Navbar */}
      <Public_Navbar />

      {/* Hero Section */}
      <main className="publicHero">

        <div className="heroGlow heroGlowOne"></div>
        <div className="heroGlow heroGlowTwo"></div>

        <div className="publicHeroContent">

          <p className="publicLabel">
            WELCOME TO ELORA SHOP
          </p>

          <h1>
            Discover what
            <span> feels right.</span>
          </h1>

          <p className="publicDescription">
            Explore carefully selected products from trusted shops.
            Discover new styles, find your favourites and shop with confidence.
          </p>

          <div className="publicActions">

            <Link to="/prodCust" className="primaryBtn">
              Explore Products
            </Link>

            <Link to="/cusReg" className="secondaryBtn">
              Create Account
            </Link>

          </div>

        </div>

        {/* Right-side visual */}
        <div className="publicVisual">

          <div className="visualMainCard">

            <div className="visualTop">
              <span>CURATED COLLECTION</span>
              <span className="visualDot"></span>
            </div>

            <div className="visualImage">
              <div className="imageShape">
                <span>ELORA</span>
              </div>
            </div>

            <div className="visualBottom">

              <div>
                <small>DISCOVER</small>
                <h3>Something New</h3>
              </div>

              <div className="arrow">
                →
              </div>

            </div>

          </div>

          <div className="floatingCard">
            <strong>100+</strong>
            <span>Products to explore</span>
          </div>

        </div>

      </main>

      {/* Feature Section */}
      <section className="publicFeatures">

        <div className="feature">

          <div className="featureIcon">
            ✓
          </div>

          <div>
            <h3>Trusted Shops</h3>
            <p>Discover products from registered shops.</p>
          </div>

        </div>

        <div className="feature">

          <div className="featureIcon">
            ◇
          </div>

          <div>
            <h3>Easy Shopping</h3>
            <p>Find products and explore collections easily.</p>
          </div>

        </div>

        <div className="feature">

          <div className="featureIcon">
            ★
          </div>

          <div>
            <h3>Real Reviews</h3>
            <p>See customer reviews before you shop.</p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default PublicHome