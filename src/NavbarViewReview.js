import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./NavbarViewReview.module.css";

const NavbarViewReview = () => {
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
        `https://e-commerce-application-fdjs.onrender.com/sample/reviewGet?product_id=${productId}`
      )
      .then((response) => {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (!productId) {
    return (
      <>
        <Navbar />

        <div className={styles.pageContainer}>
          <div className={styles.errorCard}>
            <h2>Product Not Selected</h2>
            <p>Please select a product to view its reviews.</p>

            <button
              className={styles.backButton}
              onClick={() => navigate("/adminreview")}
            >
              Back to Products
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className={styles.pageContainer}>
        <div className={styles.headerSection}>
          <div>
            <h1>Product Reviews</h1>
            <p>
              Customer reviews for{" "}
              <strong>{productName || "Selected Product"}</strong>
            </p>
          </div>

          <button
            className={styles.backButton}
            onClick={() => navigate("/adminreview")}
          >
            ← Back
          </button>
        </div>

        <div className={styles.productHeader}>
          <div>
            <span>Product</span>
            <h2>{productName || "Product"}</h2>
          </div>

          <div>
            <span>Product ID</span>
            <h2>{productId}</h2>
          </div>

          <div>
            <span>Total Reviews</span>
            <h2>{reviews.length}</h2>
          </div>
        </div>

        {loading ? (
          <div className={styles.messageCard}>
            <p>Loading reviews...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className={styles.messageCard}>
            <h2>No Reviews Yet</h2>
            <p>
              This product does not have any customer reviews yet.
            </p>
          </div>
        ) : (
          <div className={styles.reviewList}>
            {reviews.map((item) => (
              <div className={styles.reviewCard} key={item.review_id}>
                <div className={styles.reviewTop}>
                  <div className={styles.reviewNumber}>
                    Review #{item.review_id}
                  </div>

                  <div className={styles.reviewDate}>
                    {item.review_date}
                  </div>
                </div>

                <div className={styles.reviewContent}>
                  <p>{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarViewReview;