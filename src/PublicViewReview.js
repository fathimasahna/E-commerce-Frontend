
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Public_Navbar from "./Public_Navbar";
import './PublicViewReview.css';

const PublicViewReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const productId = location.state?.productId;
  const productName = location.state?.productName;

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }

    axios
      .get(
        `https://e-commerce-application-fdjs.onrender.com/sample/reviewGet/?product_id=${productId}`
      )
      .then((response) => {
        console.log("Reviews:", response.data);
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  // Product not selected
  if (!productId) {
    return (
      <>
        <Public_Navbar />

        <main className="publicViewReviewPage">
          <div className="publicReviewError">
            <h2>Product Not Selected</h2>

            <p>
              Please select a product to view its reviews.
            </p>

            <button
              className="publicBackButton"
              onClick={() => navigate("/prodCust")}
            >
              ← Back to Products
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Public_Navbar />

      <main className="publicViewReviewPage">

        {/* Header */}
        <section className="publicReviewsHeader">
          <div>
            <h1>Customer Reviews</h1>

            <p>
              See what our customers have to say about{" "}
              <strong>{productName || "this product"}</strong>.
            </p>
          </div>

          <button
            className="publicBackButton"
            onClick={() => navigate("/prodCust")}
          >
            ← Back to Products
          </button>
        </section>

        {/* Product Summary */}
        <section className="publicProductSummary">

          <div className="summaryItem">
            <span>Product</span>
            <h2>{productName || "Product"}</h2>
          </div>

          <div className="summaryItem">
            <span>Product ID</span>
            <h2>{productId}</h2>
          </div>

          <div className="summaryItem">
            <span>Total Reviews</span>
            <h2>{reviews.length}</h2>
          </div>

        </section>

        {/* Loading */}
        {loading && (
          <div className="publicReviewMessage">
            <div className="loader"></div>
            <p>Loading reviews...</p>
          </div>
        )}

        {/* No Reviews */}
        {!loading && reviews.length === 0 && (
          <div className="publicReviewMessage">
            <div className="emptyIcon">💬</div>

            <h2>No Reviews Yet</h2>

            <p>
              This product does not have any customer reviews yet.
            </p>
          </div>
        )}

        {/* Reviews */}
        {!loading && reviews.length > 0 && (
          <section className="publicReviewList">

            {reviews.map((item) => (
              <article
                className="publicReviewCard"
                key={item.review_id}
              >

                <div className="publicReviewTop">

                  <div className="reviewCustomer">
                    <div className="customerAvatar">
                      👤
                    </div>

                    <div>
                      <h3>Customer</h3>

                      <span>
                        Review #{item.review_id}
                      </span>
                    </div>
                  </div>

                 <div className="publicReviewDate">
  {new Date(item.review_date).toLocaleDateString("en-IN")}
</div>

                </div>

                

                <p className="publicReviewText">
                  {item.review}
                </p>

              </article>
            ))}

          </section>
        )}

      </main>
    </>
  );
};

export default PublicViewReview;

