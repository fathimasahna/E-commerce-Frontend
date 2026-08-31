import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Public_Navbar from "./Public_Navbar";
import "./PublicRev.css";

const PublicRev = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/customerGet")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

 

  return (
    <>
      <Public_Navbar />

      <main className="publicReviewPage">

        {/* Page Header */}
        <section className="publicReviewHeader">
          <h1>Our Products</h1>
          <p>
            Explore our products and read what our customers have to say.
          </p>
        </section>

        {/* Product Grid */}
        <section className="publicProductGrid">

          {products.map((product) => (
            <div
              className="publicProductCard"
              key={product.id}
            >

              {/* Product Image */}
              <div className="publicProductImage">
                <span>Product</span>
              </div>

              {/* Product Details */}
              <div className="publicProductDetails">

                <h2>{product.name}</h2>

                <p className="publicProductPrice">
                  ₹{product.price}
                </p>

              <button
  className="publicReviewButton"
  onClick={() =>
    navigate("/publicViewReview", {
      state: {
        productId: product.id,
        productName: product.name
      }
    })
  }
>
  View Reviews
</button>

              </div>

            </div>
          ))}

        </section>

      </main>
    </>
  );
};

export default PublicRev;