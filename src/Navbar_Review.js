import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./Navbar_Review.module.css";

const Navbar_Review = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/customerGet")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const review = (productId, productName) => {
    navigate("/reviewTable", {
      state: {
        productId: productId,
        productName: productName,
      },
    });
  };

  return (
    <>
      <Navbar />

      <div className={styles.pageContainer}>
        <div className={styles.headerSection}>
          <h1>Product Reviews</h1>
          <p>View customer reviews for your products</p>
        </div>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <div className={styles.productCard} key={product.id}>
              <div className={styles.productInfo}>
                <h2>{product.name}</h2>

                <div className={styles.details}>
                  <p>
                    <span>Product ID</span>
                    {product.id}
                  </p>

                  <p>
                    <span>Price</span>
                    ₹{product.price}
                  </p>
                </div>
              </div>

              <button
                className={styles.reviewButton}
                onClick={() => review(product.id, product.name)}
              >
                View Reviews
              </button>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className={styles.emptyState}>
            <p>No products available.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar_Review;