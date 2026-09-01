import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProdTable.module.css";
import ProdNav from "./ProdNav";

const ProdTable = () => {
  const [view, setView] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://e-commerce-application-fdjs.onrender.com/sample/productGet")
      .then((response) => {
        setView(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const del = (id) => {
    axios
      .delete(`https://e-commerce-application-fdjs.onrender.com/sample/productDel/${id}/`)
      .then(() => {
        setView((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const edit = (id) => {
    axios
      .get(`https://e-commerce-application-fdjs.onrender.com/sample/productUpdateView/${id}/`)
      .then((response) => {
        navigate("/formUpd", { state: response.data });
      })
      .catch((error) => {
        console.error("Error loading product:", error);
      });
  };

  return (
  <><ProdNav/> 
    <div className={styles.pageContainer}>

      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.smallTitle}>PRODUCT MANAGEMENT</p>
          <h2>View Products</h2>
          <p className={styles.subtitle}>
            Manage your products, stock and pricing.
          </p>
        </div>

        <div className={styles.productCount}>
          <span>Total Products</span>
          <strong>{view.length}</strong>
        </div>
      </div>

      {/* Desktop / Tablet Table */}
      <div className={styles.tableContainer}>
        <table className={styles.productsTable}>

          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {view.map((item) => (
              <tr key={item.id}>

                <td className={styles.productId}>
                  #{item.id}
                </td>

                <td className={styles.productName}>
                  {item.name}
                </td>

                <td className={styles.price}>
                  ₹{item.price}
                </td>

                <td>
                  <span
                    className={
                      Number(item.stock) > 0
                        ? styles.stockAvailable
                        : styles.stockEmpty
                    }
                  >
                    {item.stock}
                  </span>
                </td>

                <td className={styles.actions}>

                  <button
                    className={styles.editButton}
                    onClick={() => edit(item.id)}
                  >
                    Edit
                  </button>

                  <button
                    className={styles.deleteButton}
                    onClick={() => del(item.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Empty State */}
      {view.length === 0 && (
        <div className={styles.emptyState}>
          <h3>No Products Found</h3>
          <p>
            There are currently no products available.
          </p>
        </div>
      )}

    </div>
  </>   
  );
};

export default ProdTable;