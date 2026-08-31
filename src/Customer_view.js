import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Customer_Nav from "./Customer_Nav";
import styles from "./Customer_view.module.css";

const Customer_view = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/customerGet")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (productId) => {
    axios
      .post("https://e-commerce-application-fdjs.onrender.com/sample/add_to_cart", { productId })
      .then(() => {
        alert("Product added to cart!");
      })
      .catch((err) => console.error(err));
  };

  const viewReview = (productId) => {
    navigate("/review", {
      state: { productId: productId },
    });
  };

  return (
    <>
      <Customer_Nav />

      <div className={styles.productsPage}>
        <div className={styles.productsHeader}>
          <h2>Our Products</h2>
          <p>Explore our latest products</p>
        </div>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <div className={styles.productCard} key={product.id}>

             

              <div className={styles.productInfo}>
                <h3>{product.name}</h3>

                <p className={styles.price}>
                  ₹{product.price}
                </p>

                <div className={styles.buttonGroup}>
                  <button
                    className={styles.cartButton}
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </button>

                  
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Customer_view;