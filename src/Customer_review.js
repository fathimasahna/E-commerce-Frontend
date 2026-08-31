import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Customer_Nav from "./Customer_Nav";
import "./Customer_Review.css";

const Customer_Review = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/customerGet")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const review = (productId) => {
    navigate("/reviewtextarea", {
      state: {
        productId: productId,
      },
    });
  };

  return (
    <>
      <Customer_Nav />

      <main className="reviewPage">

        {/* Page Header */}
        <div className="reviewHeader">
          <h1>Write a Review</h1>
          <p>
            Select a product and share your experience with us.
          </p>
        </div>

        {/* Products */}
        <div className="reviewProductGrid">

          {products.length === 0 ? (
            <div className="noProducts">
              <h3>No products available</h3>
              <p>Please check back later.</p>
            </div>
          ) : (
            products.map((product) => (
              <div
                className="reviewProductCard"
                key={product.id}
              >

                {/* Product Image Placeholder */}
                <div className="reviewProductImage">
                  <span>Product</span>
                </div>

                {/* Product Details */}
                <div className="reviewProductDetails">

                  <h2>{product.name}</h2>

                  <p className="reviewPrice">
                    ₹{product.price}
                  </p>

                  <button
                    className="reviewButton"
                    onClick={() => review(product.id)}
                  >
                    Review
                  </button>

                </div>

              </div>
            ))
          )}

        </div>

      </main>
    </>
  );
};

export default Customer_Review;